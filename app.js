//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据

  },
  getUserInfo:function(cb){

  },
  globalData:{
    userInfo:null
  },
  sendRequest: function(param, customSiteUrl){

  },
  turnToPage: function(url, isRedirect){
      console.log('123')
  },
  switchToTab: function(url){
    wx.switchTab({
      url: url
    });
  },
  setPageTitle: function(title){
    wx.setNavigationBarTitle({
      title: title
    });
  },
  pageScrollTo : function( scrollTop ) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: scrollTop
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      });
    }
  },
})