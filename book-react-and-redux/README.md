# 笔记

# 1 React 新的前端思维方式
```
npm i create-react-app -g
create-react-app first_react_app
npm start

执行eject则会弹出原本的scripts配置，不可逆
```

react的理念
```
UI = render(data)
```

# 2 设计高质量的React组件
当 prop 的值不是字符串类型时，在 JSX 中必须用花括号 {} 包住，
所以 style 的值有两层花括号，外层花括号代表是 JSX 的语法，内层的花括号代表这是一个对象常量。

可以使用 babel-react-optimize 在发布时去除开发中的propTypes。

直接使用this.state = xxx 而不是使用setState，可能会导致渲染异常。

在constructor里初始化state，替代了过去的getInitialState。

render函数并不做实际渲染动作，只是返回一个JSX描述的结构，最终由React操作渲染。
如果不需要渲染可以让render return null || false 。
不要在render里执行setState。

componentWillMount进行setState无效，和componentDidMount对称。随着组件render前调用。
componentWillMount可以在服务端被调用。

componentDidMount 并不是紧随着组件render后调用。而是当所有子组件都render后才会一起进行componentDidMount。
产生真实dom。

装载生命周期：
constructor -> getInitialState(deprecated) -> getDefaultProps -> componentWillMount -> render -> componentDidMount

更新生命周期：
componentWillReceiveProps -> shouldComponentUpdate(只有为true才会往下执行) -> componentWillUpdate -> render -> componentDidUpdate

只要父组件的render被调用，render函数里的子组件就会进行更新，不管父组件传给子组件的props有没有改变，都会触发componentWillReceiveProps。
而子组件内部的setState不会触发componentWillReceiveProps。
当对子组件传入function时，可能会触发子组件无谓的刷新？
componentWillReceiveProps可以做两次props的比较，拒绝无谓的刷新，算一点小优化。

render决定渲染什么，shouldComponentUpdate决定渲不渲染，默认为true。可以通过手动比较nextProps,nextState和this.props与this.state的值来决定是否渲染。
由于setState不是立即state值，在shouldComponentUpdate里取得可能不是this.setState()后的state值。

componentDidUpdate的作用在于一些原生的绑定事件在dom更新后在这里可以重新进行绑定。

如果在组件内自建了原生DOM，可能需要在componentWillUnmount里进行手动销毁防止内存泄漏。

# 3 从Flux到Redux
## Flux
action是纯粹的数据对象，type定义action类型，由type触发相应的action构造函数。

Store也是对象，存储对应状态，接收Dispatcher派发的动作，根据动作来决定是否要更新应用状态。

不应该修改通过Store得到的数据，也就是Immutable的由来。

当一个动作被派发，Dispatcher就是简单地把所有注册的回调函数全部调用了一遍，至于这个动作是不是对方关心的，Flux 的Dispatcher不关心，要求每个回调函数去鉴别。

Flux的架构下，应用的状态被放在了store中，React组件中只是扮演View的作用，被动根据Store的状态来渲染，只是Store 的一个映射，不会主动变化数据，而是通过触发action来改变store，数据处理的工作不在view里。
正常组件里，操作可能是触发了setState，而Flux中只是派发了一个动作，这个动作会发送给所有Store对象，根据type改变Store对象，再而改变view本身。
这里的Store，不是一个数据的概念，而是一个大对象的概念，大对象里的某些Store，存储了数据。

缺点：1.Store之间依赖 2.难以进行服务端渲染(因为Dispatcher和Store都是全局唯一的一个) 3. Sotre混杂了逻辑和状态

## Redux
1.唯一数据源：
不像Flux，redux的数据源只存在一个唯一的store上。

2.保持状态只读：
不能直接去修改状态。要修改store的状态，必须通过派发一个action对象来完成，这点和Flux一致。
UI=redner(data)

3.数据改变只能通过纯函数完成
这里的纯函数也就是reducer，redux的red也就是reducer。(reducer+flux)。
reducer(state,action)
第一个参数state为当前的状态，
第二个参数action是接收到的action对象，
reducer做的就是根据action和state返回一个新的对象，
reducer是一个纯函数，无副作用的，不能修改action和state。
reducer只负责计算状态，不负责存储状态。









