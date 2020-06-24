Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, things: "eat lunch", complated: false },
      { id: 2, things: "sleep", complated: true }
    ],
    valueInput:""
  },
  // 删除事项
  todoclear(e) {
    let id = e.currentTarget.dataset.id
    let idx = this.data.list.findIndex(item => item.id === id)
    this.data.list.splice(idx,1)
    this.setData(this.data)
  },
  // 改变选中状态
  todoSelect(e){
    let id = e.currentTarget.dataset.id
    let temp = this.data.list.filter(item => item.id === id)
    temp[0].complated = !temp[0].complated
    this.setData(this.data)
    
  },
  // 添加事项
  inputfn(e) {
    this.setData({
      valueInput: e.detail.value
    })
    
  },
  addTodo(e) {
    this.data.list.unshift({id:this.data.list.length+1,things:this.data.valueInput,complated:false})
    this.data.valueInput = ""
    this.setData(this.data)
  },
  //所有项目全部选中
  //如果有未完成的则全部选中否则全部不选中
  toggleAll() {
    if(this.data.list.some(item=>item.complated === false)) {

      this.data.list.forEach(item=>item.complated = true)
    }else {
      this.data.list.forEach(item=>item.complated = false)
    }
    this.setData(this.data)
    
  }

})