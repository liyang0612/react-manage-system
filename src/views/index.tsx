import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import { getInfo } from '../redux/action/userInfo'

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
      <div className="wrap" style={{ paddingTop: 50 }}>
        <Timeline mode="alternate">
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Technical testing 2015-09-01
          </Timeline.Item>
        </Timeline>
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