import { Filtration } from '../../module/filtrate/filtrate'; //引入条件筛选
const app = getApp()
const { wc } = app
const { host, data, isSuccess, success } = wc

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../image/1.jpg",
      "../../image/2.jpg"
    ],

    supSortSelectId: 100,
    list: [
      {
        placeSortSelect: "全部分类",
        placePurSortOpen: true,
        placeSortData: [
          { id: 100, name: '全部分类', checked: 'true' },
          { id: 101, name: '精品推存' },
          { id: 102, name: '文艺青年' },
          { id: 103, name: '炫酷风格' }
        ],
      },
      {
        placeSortSelect: "产地",
        placePurSortOpen: true,
        placeSortData: [
          { id: 100, name: '产地', checked: 'true' },
          { id: 101, name: '北京' },
          { id: 102, name: '天津' },
          { id: 103, name: '上海' }
        ],
      }
    ],
  },

  // banner 跳转页面
  navToUrl: function (e) {
    wc.navigateTo(e.currentTarget.dataset.url)
  },

  // 搜索列表
  searchList: function (e) {
    const that = this
    let content = e.detail.value

    this.getList({ KeyWords: content })
  },

  // 获取列表
  getList: function ({ Action = 'GetProductList', KeyWords = '', ClassID = 0, AreaID = 0, SortType = 0, TimeType = 0, pageSize = 10, pageIndex = 1 } = {}) {
    const that = this
    // list
    let getData = {
      Action,
      KeyWords,
      ClassID,
      AreaID,
      SortType,
      TimeType,
      pageSize,
      pageIndex,
      UserID: wx.getStorageSync('openId'),
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          goodList: json[data]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this

    // banner
    let bData = {
      Action: 'GetAd',
      ClassID: 3
    }
    wc.get(bData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          imgUrls: json[data]
        })
      }
    })

    // list
    this.getList()

    //引入条件筛选
    var filtration = new Filtration(this);
    filtration.bindEvents();

    // 分类列表
    let dData = {
      Action: 'GetClassList',
      DepClassID: 3
    }
    let list = this.data.list
    wc.get(dData, (json) => {
      if (json[isSuccess] === success) {
        json.List.unshift({
          ClassID: 0,
          ClassName: '全部分类',
          checked: 'true'
        })
        that.setData({
          'list[0].placeSortData': json.List
        })
      }
    })

    // 城市列表
    let aData = {
      Action: 'GetAreaList'
    }
    // let list = this.data.list
    wc.get(aData, (json) => {
      if (json[isSuccess] === success) {
        json.List.unshift({
          ClassID: 0,
          SortID: 0,
          ClassName: '产地',
          checked: 'true'
        })
        that.setData({
          'list[1].placeSortData': json.List
        })
      }
    })

  },


  // 收藏状态切换
  collectCut: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.goodList

    list[index].IsFav = !(list[index].IsFav || false);
    this.setData({ goodList: list })

    // 切换收藏状态
    let id = e.currentTarget.dataset.id
    let getData = {
      Action: 'AddFavorite',
      ClassID: 3,
      UserID: wx.getStorageSync('openId'),
      ID: id
    }
    // let list = this.data.list
    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {

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