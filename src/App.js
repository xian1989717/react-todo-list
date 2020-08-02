import React from 'react';

const style = {
  textAlign: 'center'
}
const divStyle = {
  background: 'rgba(47, 47, 47, 0.98)',
  height: '50px',
  lineHeight: '50px',
  color: 'white'
}
const inputStyle = {
  marginLeft: '50px'
}
const buttonStyle = {
  margin: '0px 0px 0px 100px'
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      doneList: [],
      doingList: [],
      index: 1
    }
    this.cacheValue = ''
  }
  change = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  onKeyup = (e) => {
    if (e.keyCode === 13) {
      const arr = [...this.state.doingList]
      let index = this.state.index
      arr.push({ key: index, value: this.state.value })
      this.setState({
        doingList: arr,
        value: '',
        index: index + 1
      })
    }
  }
  clickDoing = (e, key) => {
    const doingArr = [...this.state.doingList]
    const doingIndex = doingArr.findIndex(item => item.key === key)
    doingArr.splice(doingIndex, 1)
    this.setState({
      doingList: doingArr,
      value: ''
    })
  }
  click = (e, key) => {
    const doneArr = [...this.state.doneList]
    const doneIndex = doneArr.findIndex(item => item.key === key)
    doneArr.splice(doneIndex, 1)
    this.setState({
      doneList: doneArr,
      value: ''
    })
  }
  liClick = (e, key) => {
    const index = this.state.doingList.findIndex(item => item.key === key)
    this.state.doneList.push(this.state.doingList[index])
    this.setState({
      doneList: this.state.doneList
    })
    this.state.doingList.splice(index, 1)
    this.setState({
      doingList: this.state.doingList
    })
  }
  render () {
    const doingList = []
    const doneList = []
    this.state.doingList.forEach(item => {
      doingList.push(<li
        style={{ height: '32px', lineHeight: '24px' }}>
        <span
          style={{ display: 'inlineBlock', width: '100px' }}
          key={item.key}
          onClick={(event) => { this.liClick(event, item.key) }}>
          {item.value}
        </span>
        <button
          style={buttonStyle}
          onClick={(event) => { this.clickDoing(event, item.key) }}>
          删除
          </button>
      </li>)
    })
    this.state.doneList.forEach(item => {
      doneList.push(<li
        style={{ height: '32px', lineHeight: '24px' }}>
        <span
          key={item.key}>
          {item.value}
        </span>
        <button
          style={buttonStyle}
          onClick={(event) => { this.click(event, item.key) }}>
          删除
          </button>
      </li>)
    })
    return (
      <div
        style={style} >
        <div
          style={divStyle}
        >
          ToDoList
          <input
            style={inputStyle}
            type="text"
            value={this.state.value}
            onChange={(event) => { this.change(event) }}
            onKeyUp={this.onKeyup} />
        </div>
        <h3>正在进行</h3>
        <ul>
          {doingList}
        </ul>
        <h3>已经完成</h3>
        <ul>
          {doneList}
        </ul>
      </div>)
  }
}
export default Test;
