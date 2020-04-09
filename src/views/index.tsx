import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getInfo } from '../redux/action/userInfo'
import styles from './style.module.scss'

interface SettingsProps {
  dispatch?: Dispatch<any>;
  getData?: any;
  history?: any;
}

class Home extends React.PureComponent<SettingsProps> {

  handleClick = () => {
    // getData(getInfo())
  }

  render() {
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

const mapStateToProps = (state: any) => {
  const { userInfo } = state
  return {
    userInfo
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): any => ({
  getData: () => {
    dispatch(getInfo())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)