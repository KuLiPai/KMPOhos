














@Preview
@Component
export struct TutorialItem {
  private title: string = 'Step1 快速入门介绍';
  private brief: string = '本篇教程实现了快速入门——一个用于了解和学习HarmonyOS的应用程序 。';

  build() {
    Row() {
      Column() {
        Text(this.title)
          .maxLines(1)
          .fontWeight(700)
          .width("100%")


        Text(this.brief)
          .maxLines(2)
          .fontColor("rgba(0,0,0,0.6)")
          .textOverflow({overflow:TextOverflow.Ellipsis})
          .width("100%")
          .margin({top:8})
          .fontSize(12)

      }.layoutWeight(1).width("100%") //Col
      Image($r("app.media.enablement_pic1"))
        .height("100%")
        .objectFit(ImageFit.Contain)
        .margin({left:12})
        .borderRadius(12)

    }
    .backgroundColor(Color.White)
    .width("100%")
    .borderRadius(16)
    .padding(16)
    .height(88) // Row
  }
}