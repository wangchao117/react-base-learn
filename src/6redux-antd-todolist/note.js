// redux-thunk使用:
//  1.安装
//  2.创建store去使用redux-thunk,具体使用看代码
//  3.配置好后就能在actionCreator中去写异步的请求了
//    原理是:正常的话,创建一个action只能是返回一个js对象,但是在用了redux-thunk后,
//           action就能返回一个函数了,也能通过dispatch发送给store
//  4.store发现就受到的不是一个js对象二十一个函数,那么store会执行这个函数,这个函数就是异步操作,
//    获取到数据,需要改变数据,就又需要创建action,异步操作的函数能直接接受stor的dispatch,所以直接传入dispatch,
//   派发action给store,改变数据
