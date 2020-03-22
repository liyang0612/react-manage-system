import React from 'react'
import { connect } from 'react-redux'
import { getInfo } from '../redux/action/userInfo'

class Home extends React.Component {
  handleClick = () => {
    const { getData } = this.props
    getData()
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

const mapStateToProps = userInfo => ({
  userInfo,
})

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getInfo())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
