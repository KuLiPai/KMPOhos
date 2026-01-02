package ohos

import kotlin.js.Json

// 1. 对应 declare namespace promptAction
// 鸿蒙中这个模块通常导入名为 "@ohos.promptAction"
@JsModule("@ohos.promptAction")
@JsNonModule
external object PromptAction {
    // 对应 function showToast(options: ShowToastOptions): void;
    fun showToast(options: ShowToastOptions)
}

// 2. 对应 export interface ShowToastOptions
external interface ShowToastOptions {
    // TS: string | Resource
    // 为了方便，我们这里定义为 String。如果是 Resource 对象，可以定义为 dynamic 或 Any
    var message: String

    // TS: duration?: number
    // Kotlin 中可空类型对应 TS 的可选属性
    var duration: Int?

    // TS: bottom?: string | number
    var bottom: Any? // 使用 Any? 来承接 string 或 number

    var showMode: Int?
    var alignment: Int?
    var backgroundColor: Any?
    var textColor: Any?
}

// 一个辅助函数，用于像 JS 那样方便地构建 Options 对象
inline fun ShowToastOptions(init: ShowToastOptions.() -> Unit): ShowToastOptions {
    // 创建一个空的 JS 对象，并强制转换为 ShowToastOptions 接口
    val options = js("{}").unsafeCast<ShowToastOptions>()
    options.init()
    return options
}



inline fun PromptAction.toast(block: ShowToastOptions.() -> Unit) {
    val options = js("{}").unsafeCast<ShowToastOptions>()
    options.block()
    this.showToast(options)
}