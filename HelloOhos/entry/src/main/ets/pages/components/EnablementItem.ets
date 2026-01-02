@Preview
@Component
export struct EnablementItem {
  private title: string = 'HarmonyOS第一课';
  private brief: string = '基于真实的开发场景，提供向导式学习，多维度融合课程等内容，给开发者提供全新的学习体验。';

  build() {
    Column() {
      Image($r("app.media.enablement_pic1")).objectFit(ImageFit.Cover).width("100%")
        .borderRadius({ topLeft: 16, topRight: 16 })
      Text(this.title)
        .maxLines(1)
        .width('100%')
        .padding({
          left: 12,
          right: 12,
          top: 12,
          bottom: 8
        })
        .textOverflow({ overflow: TextOverflow.Ellipsis })
      Text(this.brief)
        .maxLines(2)
        .width('100%')
        .fontColor("rgba(0,0,0,0.6)")
        .padding({ left: 12, right: 12, bottom: 8 })
        .textOverflow({ overflow: TextOverflow.Ellipsis })
        .fontSize(16)


    }
    .borderRadius(16)
    .width(160)
    .height(169)
    .backgroundColor(Color.White)


  }
}

