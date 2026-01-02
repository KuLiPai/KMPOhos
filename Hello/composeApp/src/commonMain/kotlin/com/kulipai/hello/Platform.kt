package com.kulipai.hello

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform