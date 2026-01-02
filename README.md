# KMP HarmonyOS Starter

这是一个基于 **Kotlin Multiplatform (KMP)** 的探索性工程，旨在演示如何在 **Android**、**iOS**、**Desktop** 以及 **HarmonyOS (鸿蒙)** 之间实现业务逻辑的共享。

> ⚠️ **注意**：本项目目前处于实验阶段 (PoC)，功能较为简陋，仅供学习和参考 KMP 跨端架构使用。

## 🎯 项目架构

本项目的核心理念是 **“业务逻辑共享，UI 按需适配”**：

* **业务逻辑 (`:shared`)**：完全使用 Kotlin 编写。
* 对于 **Android / iOS / Desktop**：编译为 JVM/Native 字节码。
* 对于 **HarmonyOS**：通过 Kotlin/JS (IR) 编译器输出为 JavaScript (ES Modules)，供鸿蒙侧调用。


* **用户界面 (UI)**：
* **Android / iOS / Desktop**：使用 **Compose Multiplatform (CMP)** 统一编写，共享 UI 代码。
* **HarmonyOS**：使用原生 **ArkUI (ArkTS/JS)** 编写，通过导入编译后的 JS 文件调用 Kotlin 写的业务逻辑。



## 🛠️ 技术栈

* **Language**: Kotlin 2.0+
* **UI Framework**:
* Compose Multiplatform (Non-Harmony platforms)
* ArkUI (HarmonyOS)


* **Build System**: Gradle + DevEco Studio
* **Interoperability**: Kotlin/JS IR Compiler

## 📂 目录结构

* `composeApp`: 基于 Compose Multiplatform 的应用入口 (Android/iOS/Desktop)。
* `shared`: KMP 共享模块，包含核心业务逻辑。
* 配置了 `js(IR)` target 以输出鸿蒙所需的 JS 文件。


* `HelloOhos` (或其他鸿蒙工程名): 鸿蒙原生工程 (DevEco Studio Project)。

## 🚀 如何运行

### 1. 环境准备

* JDK 17+
* Android Studio / IntelliJ IDEA (用于 KMP 开发)
* DevEco Studio (用于鸿蒙开发)
* Node.js & Yarn (用于 Kotlin/JS 编译依赖)

### 2. 编译共享库 (针对鸿蒙)

项目中配置了自动脚本，将 Kotlin 编译出的 JS 文件处理并复制到鸿蒙项目的资源目录下。

```bash
# 在根目录执行
./gradlew :shared:copyOutput

```

执行成功后，编译产物会自动同步到鸿蒙工程的 `entry/src/main/js` (或你配置的路径) 下。

### 3. 运行应用

* **Compose 平台**：直接在 Android Studio 中运行对应的 Run Configuration。
* **鸿蒙平台**：使用 DevEco Studio 打开鸿蒙工程目录，Sync 后运行。

## 🤝 致谢与参考

本项目的鸿蒙适配方案深受 **[kotlin-for-ohos](https://www.google.com/search?q=https://github.com/kotlin-for-ohos)** 组织的启发。感谢社区对 Kotlin 在鸿蒙平台上运行所做的探索和开源贡献。

* 借鉴了其关于 Kotlin/JS 到 ArkTS 的互操作思路。
* 借鉴了 Gradle 脚本处理 JS 产物的流程。

## 📄 License

MIT License