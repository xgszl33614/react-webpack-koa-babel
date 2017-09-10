import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// let tT = null
// let rT = function() {
//   let oT = tT
//   let someM = 'hhh'
//   // let unused = function () {
//   //   if (oT) console.log('hi')
//   // }
//   tT = {
//     longStr: new Array(1000000).join('*'),
//     sM() {
//       console.log(someM)
//     }
//   }
// }
// setInterval(rT, 1000)
class ChildCmp extends React.Component {
  render() {
    return (
      <div>
        { this.props.childMessage }, { this.props.name }!
      </div>
    )
  }
}

ChildCmp.defaultProps = {
  childMessage: 'Stranger',
  name: 'xgs'
}
ChildCmp.propTypes = {
  childMessage: PropTypes.string,
  name: PropTypes.string.isRequired
}

class ExampleApplication extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: 'msg' }
  }

  componentWillMount() {
  }

  componentDidMount() {
      /* setTimeout(()=> {
          this.setState({ message: 'timeout state message' })
      }, 1000) */
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
  }

  onClickHandler() {
    this.setState({ message: 'click state message' })
  }

  render() {
    // return (
    //   <div>
    //     <button onClick={this.onClickHandler.bind(this)}> set state button </button>
    //     <ChildCmp childMessage={this.state.message} />
    //     And some text as well!
    //   </div>
    // )

    console.log('hhh=======', React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.onClickHandler.bind(this) },
        'set state button',
      ),
      React.createElement(
        ChildCmp,
        { childMessage: this.state.message },
      ),
      'And some text hhh!'
    ))
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.onClickHandler.bind(this) },
        'set state button',
      ),
      React.createElement(
        ChildCmp,
        { childMessage: this.state.message },
      ),
      'And some text hhh!'
    )
  }
}


ReactDOM.render(
  <ExampleApplication hello={'world'} />,
  document.getElementById('root'),
  function() {}
)

var domino = (() => {
  let originData = []
  let stackFlag = [] // 对象入栈时，压入索引
  // let resultArr = []
  let stack = []

  /**
   * [节点是否已经在栈中]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function nodeInStack(index) {
    return stackFlag.includes(index)
  }

  /**
   * [exchange description]
   * @param  {[type]} node [description]
   * @return {[type]}      [description]
   */
  function exchange(node) {
    node[0] = node[0] + node[1]
    node[1] = node[0] - node[1]
    node[0] = node[0] - node[1]
  }

  /**
   * [父子节点是否匹配]
   * @param  {[type]} parent [description]
   * @param  {[type]} child  [description]
   * @return {[type]}        [description]
   */
  function findMatch(parent, child) {
    if ( child[1] === parent[1]) {
      exchange(child)
      return true
    }
    if (child[0] === parent[1]) {
      return true
    }
    return false
  }

  /**
   * [寻找当前节点的所有可遍历子节点]
   * @param  {[type]} item         [description]
   * @param  {[type]} currentIndex [description]
   * @return {[type]}              [description]
   */
  function findNextNode(parentNode) {
    let nextNodeArr = []

    for (let i = 0; i < originData.length; i++) {
      if (findMatch(parentNode, originData[i]) && !nodeInStack(i)) {
        nextNodeArr.push[originData[i]]
      }
    }

    return nextNodeArr
  }

  function findPath(parentNode) {
    let nextNodeArr = findNextNode(parentNode)

    if (nextNodeArr.length !== 0) {
      stack.push(parentNode) // 入栈
      stackFlag.push(parentNode.index)

      nextNodeArr.forEach(node => {
        findPath(node)
      })
    } else {
      if (stack.length === originData.length && stack[stack.length - 1][1] === stack[0][0]) {
        console.log('success')
        return
      } else {
        stack.pop()
        stackFlag.pop()
      }
    }
  }

  function domino(input) {
    originData = input.forEach((item, i) => {
      item.index = i
    })
    findPath(originData[0])
  }

  return domino
})()
domino([[1, 2], [5, 3], [3, 1], [1, 2], [2, 4], [1, 6], [2, 3], [3, 4], [5, 6]])
