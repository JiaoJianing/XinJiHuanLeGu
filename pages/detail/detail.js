Page({
  data:{
    rooms:{}
  },

  onReady:function(){
    wx.showNavigationBarLoading();
     var that = this;
     setTimeout(function(){
       var jsonstr = [{ image: "/images/room.jpg", title: "辛集欢乐谷", subTitle: "标准间",action:"预订" }, 
         { image: "/images/room.jpg", title: "辛集欢乐谷", subTitle: "标准间", action: "预订"},
         { image: "/images/room.jpg", title: "辛集欢乐谷", subTitle: "标准间", action: "预订" },
         { image: "/images/room.jpg", title: "辛集欢乐谷", subTitle: "标准间", action: "预订" }];
       console.log(jsonstr);
       that.setData({
         rooms:jsonstr,
       });
       wx.hideNavigationBarLoading();
     }, 1000);
  }
})