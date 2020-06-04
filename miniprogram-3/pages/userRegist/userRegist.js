// pages/userRegist/userRegist.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: "",
    code: "",
    sendTime: '发送验证码',
    sendColor: '#363636',
    snsMsgWait: 60,
    password:"",
    email:"",
    sex:null,
    selectArray: [{
      "id": "0",
      "text": "全部学校"
    }, {
      "id": "1",
      "text": "华南师范大学"
    }],
    items: [
      { name: "男", value: 1 },
      { name: "女", value: 2 }
    ]
  },
  
  onLoad:function(){
    
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
    this.setData({
      sex: e.detail.value
    })
  },
  jpassword(e){
    var cp = e.detail.value;
    var p = this.data.password;
    if (cp.length == 0) {
      wx.showToast({
        title: '密码不能空',
        icon: 'none',
        duration: 3000
      })
    } else {
      if(cp!=p){
        wx.showToast({
          title: '密码不一致',
          icon: 'none',
          duration: 3000
        })
      }
    }
  },
  passinput: function (e) {
    var p = p = e.detail.value;
    //var flag = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]")
    if(p.length==0){
      wx.showToast({
        title: '密码不能空',
        icon: 'none',
        duration: 3000
      })
    }
    else if (p.length<8){
      wx.showToast({
        title: '密码太短，至少8位',
        icon: 'none',
        duration: 3000
      })
    }
    else if (p.match(/\D/) == null){
      wx.showToast({
        title: '至少含有一个字母',
        icon: 'none',
        duration: 3000
      })
    }
    else{
      this.setData({
        password:p
      })
    }
  },
  // 手机号部分

  inputPhoneNum: function (e) {

    let phoneNumber = e.detail.value

    if (phoneNumber.length == 11) {

      let checkedNum = this.checkPhoneNum(phoneNumber)

    }

  },

  checkPhoneNum: function (phoneNumber) {

    let str = /^1\d{10}$/

    if (str.test(phoneNumber)) {

      return true

    } else {

      wx.showToast({

        title: '手机号不正确',

        icon: 'none',
        duration: 3000
      })

      return false

    }

  },

  // 邮箱验证部分

  inputemail: function (e) {

    let email = e.detail.value

    let checkedNum = this.checkEmail(email)

  },
  inputTel: function(e) {
    this.setData({
      tel: e.detail.value
    })
  },

  checkEmail: function (email) {

    let str = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

    if (str.test(email)) {
      this.setData({
        email:email
      })
      return true

    } else {

      wx.showToast({

        title: '请填写正确的邮箱号',

        icon: 'none',
        duration: 3000
      })

      return false

    }

  },
  // 获取验证码
  sendCode: function () {
    console.log(this.data.email)
    if(this.data.email==""){
      wx.showToast({
        title: '邮箱地址不能为空',
        icon:"none",
        duration:2000
      })
      return
    }
    // 60秒后重新获取验证码
    var inter = setInterval(function () {
      this.setData({
        smsFlag: true,
        sendColor: '#cccccc',
        sendTime: this.data.snsMsgWait + 's后重发',
        snsMsgWait: this.data.snsMsgWait - 1
      });
      if (this.data.snsMsgWait < 0) {
        clearInterval(inter)
        this.setData({
          sendColor: '#363636',
          sendTime: '发送验证码',
          snsMsgWait: 60,
          smsFlag: false
        });
      }
    }.bind(this), 1000);

    // 写自己的服务器和接口- - 
    var serverurl = app.serverUrl;
    wx.request({
      url: serverurl + '/user/regist/sendemail',
      data: {
        email: this.data.email,
      },
      method: "POST",
   
      success(res) {
        console.log(res);
        if (res.statusCode==200) {
          //that.toast('短信验证码发送成功，请注意查收');
          wx.showToast({
            title: '短信验证码发送成功，请注意查收',
            icon:"success",
            duration:2000
          })
          that.setData({
            code:res.data.data
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon:"none",
            duration:2000
          })
        }
      }
    })
  },
  doRegist:function(e){
    if (this.data.code != this.data.tel){
      wx.toast("验证码不正确，请重新输入")
      return
    }
    
      var formObject = e.detail.value;
      formObject['sex']=this.data.sex;
      console.log(formObject);
     if(formObject.uid.length==0){
       wx.showToast({
         title: "学号不能为空",
         icon: 'none',
         duration: 4000
       })
       return
     }
    if (formObject.sex.length == 0) {
      wx.showToast({
        title: "性别不能为空",
        icon: 'none',
        duration: 4000
      })
      return
    }
    if (formObject.school.length == 0) {
      wx.showToast({
        title: "学校不能为空",
        icon: 'none',
        duration: 4000
      })
      return
    }
    if (formObject.phone.length == 0) {
      wx.showToast({
        title: "电话不能为空",
        icon: 'none',
        duration: 4000
      })
      return
    }
    if (formObject.email.length == 0) {
      wx.showToast({
        title: "邮箱不能为空",
        icon: 'none',
        duration: 4000
      })
      return
    }
      var serverurl = app.serverUrl;
      wx.request({
        url: serverurl+'/user/regist',
        method:"POST",
        data:formObject,
        header:{
          'content-type':'application/json'//默认值
        },
        success:function(res){
          console.log(res.data);
          var status = res.statusCode;
          if(status==200) {
            wx.showToast({
              title: '注册成功',
              icon: 'none',
              duration: 4000
            }),
              wx.navigateBack({
                delta: 1
              })
          }else{
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 4000
            })
          }
        }
      })
    
  },
  goLoginBtn:function(){
   wx.navigateBack({
     delta: 1
   })
  }
})