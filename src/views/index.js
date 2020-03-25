import React from 'react'
import { connect, Provider } from 'react-redux'
import { getInfo } from '../redux/action/userInfo'
import styles from './style.module.scss'

class Home extends React.PureComponent {

  handleClick = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getData(getInfo())
  }

  render () {
    // eslint-disable-next-line react/destructuring-assignment
    return (
      <div className={styles.spwrap}>
        <div className={styles.body} onClick={this.handleClick}>home page a</div>
        <div className={styles.body} onClick={this.handleClick}>home page 2</div>
        <div className={styles.body} onClick={this.handleClick}>home page 2</div>
        <div className={styles.body} onClick={this.handleClick}>home page 2</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { userInfo } = state
  return {
    userInfo
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getInfo())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)