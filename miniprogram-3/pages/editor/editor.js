
var app =getApp()
Page({
  data: {
    pic_array: [
      { id: 1, name: '学习' },
      { id: 2, name: '运动' },
      { id: 3, name: '比赛' },
      { id: 4, name: '跑腿' },
      { id: 5, name: '实验' },
      { id: 6, name: '问卷' },
    ],
    title:'',
    hx_index: 0,
    formats: {},
    readOnly: false,
    placeholder: '输入信息...',
    editorHeight: 300,
    keyboardHeight: 0,
    isIOS: false,
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    m_to_m:0,
    content: '',
    money:'',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'RichText组件'
      }]
    }]

  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  onLoad(e) {
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({ isIOS})
    this.setData({
      m_to_m:e.ttot
    })
    const that = this
    this.updatePosition(0)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)

    })
  },
  updatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const { windowHeight, platform } = wx.getSystemInfoSync()
    let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    this.setData({ editorHeight, keyboardHeight })
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = wx.getSystemInfoSync()
    const { statusBarHeight, platform } = systemInfo
    const isIOS = platform === 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  blur() {
    this.editorCtx.blur()
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    console.log('format', name, value)
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },
  bindPickerChange_hx: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
      hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
    console.log('自定义值:', this.data.hx_select);
  },
  loginBtn:function(){
    
  },
  //获取editor
  onContentChange(e) {
    var that = this;
    that.setData({
      content: e.detail.html,
    })
    console.log(e.detail.html)
    wx.setStorageSync("content", e.detail.html)
  },
  // 显示结果
  clickShowText(e) {
    var that = this;
    that.setData({
      nodes: that.data.content.html,
      content_html: that.data.content.html
    })
  },
  titlechange:function(e){
    var that = this;
    that.setData({
      title: e.detail
    })

  },
  moneychange: function (e) {
    var that = this;
    that.setData({
      money: e.detail
    })
  },
  time_time: function () {
    var that = this;
    that.setData({
      m_to_m:1,
    })
  },
  time_money: function () {
    var that = this;
    that.setData({
      m_to_m: 2,
    })
  },
  backBtn:function(){
    wx.navigateBack({
      delta: 1
    })
  }
})
