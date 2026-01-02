

@Preview
@Component
export struct Banner {
  @State bannerList: Array<BannerClass> = [0, 1, 2, 3, 4, 5].map((index) => {
    return new BannerClass("pic" + index, $r('app.media.banner_pic' + index), "https://developer.huawei.com")
  })

  build() {
    Swiper() {

      ForEach(this.bannerList, (item: BannerClass, index: number) => {
        Image(item.imageSrc)
          .objectFit(ImageFit.Contain)
          .width("100%")
          .borderRadius(16)
          .padding({ top: 11, left: 16, right: 16 })

      })


    }
    .autoPlay(true)
    .loop(true)

  }
}


class BannerClass {
  id: string = ''
  imageSrc: ResourceStr = ''
  url: string = ''

  constructor(id: string, imageSrc: ResourceStr, url: string) {
    this.id = id
    this.imageSrc = imageSrc
    this.url = url
  }
}

