import { Banner } from './components/Banner'
import { EnablementItem } from './components/EnablementItem'
import { TutorialItem } from './components/TutorialItem'

import { HelloJs } from '../../js/Hello-shared'


@Entry
@Component
struct Index {
  @State message: string = ""

  build() {

    Column() {

      Button().onClick(()=>{
          new HelloJs().test1()
      })


      Text("快速入门")
        .margin({ left: 36, top: 0 })
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
        .textAlign(TextAlign.Start)
        .width('100%')


      Banner()

      Text("赋能套件").width("100%")
        .margin({ left: 36, top: 16 })
        .fontWeight(FontWeight.Bold)
        .fontSize(18)

      Scroll() {
        Row() {
          ForEach([1, 2, 3, 4], (item: number, index) => {
            EnablementItem().margin({left:12})
          })
        }.margin({left:8})
      }.scrollable(ScrollDirection.Horizontal)
      .scrollBar(BarState.Off)
      .edgeEffect(EdgeEffect.Spring)
      .margin({top: 16})

      Text("入门教程").width("100%")
        .margin({ left: 36, top: 16 })
        .fontWeight(FontWeight.Bold)
        .fontSize(18)


      List({ space: 12 }) {
        ForEach([1,2,3,4,2,3], (item: number) => {
          ListItem() {
            TutorialItem()
          }
        })
      }
      .margin({top: 16})
      .scrollBar(BarState.Off)
      .padding({ left: 16, right: 16 })
      .layoutWeight(1)


    }.height('100%')
    .width('100%')
    .background('#F1F3F5')

  }
}
