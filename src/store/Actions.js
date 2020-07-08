// 取消引入
export default {
  // 传值
  addCart(context, payload) {
    return new Promise((reslove, reject) => {
      // 判断不能添加重复商品(细品)
      let Info = context.state.CarInfoList.find(item => payload.id == item.id);
      if (Info) {
        // Info.count += 1;
        context.commit('couter', Info)
        reslove('商品数量加一')
      } else {
        context.commit('addToCar', payload)
        // state.CarInfoList.push(payload);
        payload.count = 1;
        reslove('商品数量增加')
      }
      // console.log(context.state.CarInfoList);
    })
  }
}