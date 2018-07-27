const data = require('../../data.js')
const WxParse = require('../../wxParse/wxParse.js')

// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: data.data,
    imgUrl: '',
    zhName: '',
    enName: '',
    origin: '',
    company: '',
    createdTime: '',
    founder: '',
    briefInto: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let detailData = this.data.data[options.i].infos[options.j]

    this.setData({
      imgUrl: detailData.imgUrl,
      zhName: detailData.zhName,
      enName: detailData.enName,
      origin: detailData.origin,
      company: detailData.company,
      createdTime: detailData.createdTime,
      founder: detailData.founder,
      briefInto: detailData.briefInto
    })

    const p = /<img .* src=.*>/g
    const briefInto = detailData.briefInto.replace(p, '')
    WxParse.wxParse('briefInto', 'html', briefInto, this, 5);

    const pageTitle = detailData.zhName.replace('品牌名称：', '').trim()
    wx.setNavigationBarTitle({title: pageTitle})
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