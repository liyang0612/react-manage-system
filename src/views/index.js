import React from 'react'
import { connect } from 'react-redux'
import { getInfo } from '../redux/action/userInfo'

class Home extends React.Component {
  handleClick = () => {
    this.props.getData()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div onClick={this.handleClick}>home page a</div>
      </div>
    )
  }
}

const mapStateToProps = userInfo => {
  return {
    userInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(getInfo())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
