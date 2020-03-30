import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'
import { AppleOutlined } from '@ant-design/icons'
import Home from '../views/index.tsx'
import { getMenuData } from '../redux/action/common'
import styles from './index.module.scss'

const { Content, Header, Sider } = Layout
class BasicLayout extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getMenuData())
  }

  shouldComponentUpdate(_props, _state) {
    const { menu } = this.props
    try {
      if(JSON.stringify(_props.menu) === JSON.stringify(menu)) {
        console.log('阻止render')
        return false
      }
    }
    catch (err) {
      return true
    }
    return true
  }

  render() {
    const { menu } = this.props
    console.log(menu, 'global render')
    return (
      <Layout className={styles.msLayout}>
        {/* header 部分 */}
        <Layout style={{ height: 64, flex: 'none' }}>
          <Header>
            <AppleOutlined className={styles.logoIcon} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
        </Layout>

        <Layout className={styles['ms-layout']} style={{ flex: 1 }}>
          {/* 左侧边栏 */}
          <Sider className={styles.siderVh} width={200}>
            <Menu
              theme="dark"
              defaultSelectedKeys={['2']}
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </Menu>
          </Sider>
          {/* content部分 */}
          <Content>
            <Home />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect(state => {
  const { menu } = state
  // console.log(state, 'global')
  return {
    menu
  }
})(BasicLayout)