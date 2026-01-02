plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    // 如果你用了 @Serializable，记得加上这个
    // alias(libs.plugins.kotlinSerialization)
}

// Android 基础配置
android {
    namespace = "com.kulipai.hello.shared" // 修改为你的包名
    compileSdk = 36 // app 模块保持一致
    defaultConfig {
        minSdk = 24
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
}

kotlin {
    // 自动配置源集层级
    applyDefaultHierarchyTemplate()

    // --- Android Target ---
    androidTarget {
        // 配置库发布时的变体规则，通常保持默认即可
        publishLibraryVariants("release", "debug")
    }

    // --- JVM Target (Server / Desktop) ---
    jvm()

    // --- iOS Targets ---
    // 定义生成的 Framework 名称
    val xcfName = "SharedKit"

    // 配置 iOS 目标列表
    val iosTargets = listOf(iosX64(), iosArm64(), iosSimulatorArm64())

    // 配置 Framework 输出
    iosTargets.forEach { target ->
        target.binaries.framework {
            baseName = xcfName
            isStatic = true // 或者 false，取决于你的引用方式
        }
    }

    // --- HarmonyOS (JS) Target ---
    js(IR) {
        generateTypeScriptDefinitions()
        useEsModules()
        nodejs()
        binaries.executable()

        tasks.register<Copy>("copyOutput") {
            group = "nodejs"
            dependsOn("jsDevelopmentExecutableCompileSync")

            val buildDir = layout.buildDirectory
            val projectDir = layout.projectDirectory

            val sourceDir =
                buildDir.dir("compileSync/js/main/developmentExecutable/kotlin").get().asFile
            val destDir = projectDir.dir("../../HelloOhos/entry/src/main/js").asFile

            from(sourceDir) {
                include("*.mjs")
                include("*.mjs.map")
                include("*.d.mts")
            }

            into(destDir)

            rename { filename ->
                when {
                    filename.endsWith(".d.mts") -> filename.replace(".d.mts", ".d.ts")
                    filename.endsWith(".mjs.map") -> filename.replace(".mjs.map", ".js.map")
                    filename.endsWith(".mjs") -> filename.replace(".mjs", ".js")
                    else -> filename
                }
            }

            filesMatching("*.mjs") {
                filter { line ->
                    when {
                        line.startsWith("//# sourceMappingURL=") ->
                            line.replace(".mjs.map", ".js.map")
                        else ->
                            line.replace(Regex("""'(\./.+)\.mjs'""")) { matchResult ->
                                "'${matchResult.groupValues[1]}.js'"
                            }
                    }
                }
            }

            doFirst {
                if (!sourceDir.exists()) {
                    error("错误：源目录不存在！请先执行 build。路径: ${sourceDir.absolutePath}")
                }
                if (destDir.exists()) {
                    destDir.deleteRecursively()
                }
                destDir.mkdirs()
            }

            doLast {
                val fileCount = destDir.listFiles()?.count { it.extension == "js" } ?: 0
                println("✅ 成功复制并处理了 $fileCount 个 JS 文件到鸿蒙目录。")
            }
        }
    }

    // --- Source Sets ---
    sourceSets {
        commonMain {
            dependencies {
                implementation(libs.kotlin.stdlib)

                // 假设你在用 Ktor 和 Coroutines，这里需要定义 common 依赖
                // implementation(libs.kotlinx.coroutines.core)
                // implementation(libs.ktor.client.core)
                // implementation(libs.ktor.client.content.negotiation)
                // implementation(libs.ktor.serialization.kotlinx.json)
            }
        }

        // Android 独有依赖
        androidMain {
            dependencies {
                // Ktor 的 Android 引擎
                // implementation(libs.ktor.client.okhttp)
            }
        }

        // iOS 独有依赖
        iosMain {
            dependencies {
                // Ktor 的 iOS 引擎
                // implementation(libs.ktor.client.darwin)
            }
        }

        // JVM 独有依赖
        jvmMain {
            dependencies {
                // Ktor 的 Java 引擎
                // implementation(libs.ktor.client.okhttp) // 或者 cio
            }
        }

        // JS (HarmonyOS)
        jsMain {
            val ktorVersion = "2.3.7-SNAPSHOT"
            dependencies {
                implementation("com.bennyhuo.ktor:ktor-client-core:$ktorVersion")
                implementation("com.bennyhuo.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation("com.bennyhuo.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation("com.bennyhuo.ktor:ktor-client-js:$ktorVersion")
            }
        }

    }
}

// Yarn 配置
rootProject.plugins.withType(org.jetbrains.kotlin.gradle.targets.js.yarn.YarnPlugin::class.java) {
    rootProject.extensions.getByType(org.jetbrains.kotlin.gradle.targets.js.yarn.YarnRootExtension::class.java).apply {
        yarnLockMismatchReport = org.jetbrains.kotlin.gradle.targets.js.yarn.YarnLockMismatchReport.WARNING
        yarnLockAutoReplace = true
        reportNewYarnLock = false
    }
}