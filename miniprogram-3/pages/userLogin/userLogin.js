// pages/userLogin/userLogin.js

const app = getApp()
Page({
  data: {

  },
  onLoad: function () {
    if (app.globalData.token == null) {
      wx.showToast({
        title: '尚未登录',
        icon: 'none',
        duration: 4000
      })
    }
    var pages = getCurrentPages();
    console.log("当前page",pages)
  },
  toforget:function(){
    wx.navigateTo({
      url: '../forget/forget',
    })
  },
  doLogin: function (e) {
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;
    if (username.length == 0 || password.length == 0) {
      wx.showToast({
        title: '用户账号或密码不能为空',
        icon: 'none',
        duration: 1000

      })
    } else {
      //调用后端
      var serverurl = app.serverUrl;
      wx.showLoading({
        title: '请稍等...',
      }),
      wx.request({
        url: serverurl + '/user/login',
        method: "POST",
        data: {
          "uid": username,
          "password": password
        },
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          console.log(res.data);
          wx.hideLoading();
          var status = res.statusCode;
          if (status == 200) {
            app.globalData.userInfo = res.data.data;
            app.globalData.token = res.data.token;
            wx.showToast({
              title: res.data.msg,
              icon: 'success',
              duration: 8000
            })            
              wx.navigateBack({
                delta: 1,//返回上一页
              })
              console.log("怎么还在这？")
              //跳转
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 4000
            })
          } 
        }
        
      })

    }
  },
  goRegistBtn:function(){
    wx.navigateTo({
      url: '../userRegist/userRegist',
    })
  }
})