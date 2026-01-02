package com.kulipai.hello

import com.kulipai.hello.core.platform

class Greeting {
    private val a = platform()
    fun greet(): String {
        return "Hello, ${getPlatform().name}!"
    }
}