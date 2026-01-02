package ohos


@JsModule("@ohos.hilog")
external class HiLog {

    companion object {


        fun debug(domain: Int, tag: String, format: String, vararg args: Any)

        fun info(domain: Int, tag: String, format: String, vararg args: Any)

        fun warn(domain: Int, tag: String, format: String, vararg args: Any)

        fun error(domain: Int, tag: String, format: String, vararg args: Any)

        fun fatal(domain: Int, tag: String, format: String, vararg args: Any)
    }
}
