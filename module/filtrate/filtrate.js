class Filtration {
  // 构造
  constructor(page) {
    this.page = page;
  }

  bindEvents() {
    var page = this.page;
    page.placeUnfold = (e) => {
      // console.log(e)
      var index = e.currentTarget.dataset.index;
      var status = page.data.list[index].placePurSortOpen
      var list = page.data.list
      for (var i = 0; i < list.length; i++) {
        list[i].placePurSortOpen = true;
      }
      list[index].placePurSortOpen = !status
      page.setData({ list });
    },
      // change value
      page.placeSortChangeFn = (e) => {
        let val = e.detail.value;
        var list = page.data.list
        var index = e.currentTarget.dataset.index;
        console.log(e)
        list[index].placeSortSelect = val
        for (let i in list[index].placeSortData) {
          list[index].placeSortData[i].checked = false
          if (list[index].placeSortData[i].ClassName == val) {
            list[index].placeSortData[i].checked = true
          }
        }
        page.setData({ list });
        //console.log('radio发生change事件，携带value值为：', e.detail.value)
      },
      page.supSortChangeItemFn = (e) => {
        //必须 用currentTarget 
        var curItem = e.currentTarget.dataset.item;
        console.log(curItem);
        page.getList(curItem)
        page.setData({
          supSortSelectId: curItem.ClassID
        });
      }
    //其它事件
  }
  //bindEvents :end;
}

//导出组件类
module.exports.Filtration = Filtration;
