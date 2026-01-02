package com.kulipai.hello

import ohos.HiLog
import ohos.PromptAction
import ohos.toast

@OptIn(ExperimentalJsExport::class)
@JsExport
class HelloJs {
    fun test1() {
        PromptAction.toast {
            message = "KT Ohos"
            duration = 2000
        }
        HiLog.debug(10086,"aaa","===============Kotlin===============")
    }
}