// pages/courseDetail/courseDetail.js
const app = getApp()
const { wc } = app
const { host, data, isSuccess, success } = wc

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "在YAECA的第二家店铺YAECA APARTMENT STORE里，可以看到两位设计师为品牌所设定的生活方式。由1970年代老式钢筋混凝土结构的公寓单元改造而成的店铺里，阳光透过临街的大窗户照射进来，整个空间通透而安静。YAECA的当季系列被摆挂在几排衣架上，周围陈列着加州女陶艺家莉丝・洛克特（Lilith Rockett）的白色瓷器、各种古董玻璃器皿、酒杯，以及来自不同国家地区的日用品。 设计师似乎在用这样的陈列方式表达着自己的价值观：衣服并非生活中特殊的部分，而是和日常起居中自然而然使用着的各种用品等值等价。也正因为始终保持着这种作为“生活者”的视角，让YAECA的设计有着如“生活工具”般的必然性。YAECA的衣服，不会每季随不同主题而变化，却时时都在进化。即使看似普通，也会因为聚汇在其中的时间和精力而显得“特别”。“最终的目标还是普通，像New Balance运动鞋一样谁都能穿的最普通的衣服。”井出小姐微笑着说。在YAECA的第二家店铺YAECA APARTMENT STORE里，可以看到两位设计师为品牌所设定的生活方式。由1970年代老式钢筋混凝土结构的公寓单元改造而成的店铺里，阳光透过临街的大窗户照射进来，整个空间通透而安静。YAECA的当季系列被摆挂在几排衣架上，周围陈列着加州女陶艺家莉丝・洛克特（Lilith Rockett）的白色瓷器、各种古董玻璃器皿、酒杯，以及来自不同国家地区的日用品。 设计师似乎在用这样的陈列方式表达着自己的价值观：衣服并非生活中特殊的部分，而是和日常起居中自然而然使用着的各种用品等值等价。也正因为始终保持着这种作为“生活者”的视角，让YAECA的设计有着如“生活工具”般的必然性。YAECA的衣服，不会每季随不同主题而变化，却时时都在进化。即使看似普通，也会因为聚汇在其中的时间和精力而显得“特别”。“最终的目标还是普通，像New Balance运动鞋一样谁都能穿的最普通的衣服。”井出小姐微笑着说。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let id = options.id
    let getData = {
      Action: 'GetNewsDetail',
      ID: id || 12
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        json[data].authName = json[data].NewsBrief.split('，')[0]
        json[data].authDesc = json[data].NewsBrief.split('，')[1]
        that.setData({
          info: json[data]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})