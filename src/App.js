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
  render () {
    const doingList = []
    this.state.doingList.forEach((item, index) => {
      doingList.push(<li key={index}>{item}</li>)
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
      </div>)
  }
}
export default Test;
