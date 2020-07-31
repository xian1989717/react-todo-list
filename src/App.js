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
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      doneList: [],
      doingList: []
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
      arr.push(this.state.value)
      this.setState({
        doingList: arr,
        value: ''
      })
    }
  }
  click = (e) => {
    console.log(e)
  }
  render () {
    const doingList = []
    const doneList = []
    this.state.doingList.forEach((item, index) => {
      doingList.push(<li
        style={{ height: '24px', lineHeight: '24px' }}
        key={index}>
        {item}
        <button
          style={{ margin: '0px 0px 0px 100px' }}
          onClick={(event) => { this.click(event) }}>
          删除
          </button>
      </li>)
    })
    this.state.doneList.forEach((item, index) => {
      doneList.push(<li
        style={{ height: '24px', lineHeight: '24px' }}
        key={index}>
        {item}
        <button
          style={{ margin: '0px 0px 0px 100px' }}
          onClick={(event) => { this.click(event) }}>
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
