//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test: 2
  },
  onLoad: function() {
    this.tests();
  },
  tests() {

  },
  handleSelecteDate(e) {
    wx.showToast({ title: `${e.detail.date}`, icon: false })
  },
})
