//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    date:"2017-01-01",
  },

  select: function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

  bindDateChange: function(e){
    this.setData({
      date:e.detail.value
    })
  },

  onLoad: function (options) {
    console.log('onLoad')
  },
})
