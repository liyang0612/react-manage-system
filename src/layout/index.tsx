import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { AppleOutlined } from '@ant-design/icons'
import { getMenuData, getCurrentMenu } from '../redux/action/common'
import styles from './index.module.scss'

const { Content, Header, Sider } = Layout

interface BasicLayoutPropsType {
  dispatch: Dispatch<any>;
  config: any;
  history: any;
  menu: any;
}

const RenderMenu = menu => {
  return menu.map(item => (
    <Menu.Item key={item.id}>
      { item.name }
    </Menu.Item>
  ))
}

class BasicLayout extends React.Component<BasicLayoutPropsType> {

  componentDidMount() {
    const { dispatch } = this.props
    // eslint-disable-next-line react/destructuring-assignment
    dispatch(getMenuData())
  }

  shouldComponentUpdate(_props, _state) {
    const { menu } = this.props
    try {
      if(JSON.stringify(_props.menu) === JSON.stringify(menu)) {
        return false
      }
    }
    catch (err) {
      return true
    }
    return true
  }

  menuItemClick = (params: any) => {
    const { key } = params
    const { dispatch } = this.props
    // eslint-disable-next-line react/destructuring-assignment
    dispatch(getCurrentMenu(key))
  }

  render() {
    const { menu = {}, config = [], history } = this.props
    const { menuData = [], slideMenu = [], currentId } = menu
    return (
      <Layout className={styles.msLayout}>
        {/* header 部分 */}
        <Layout style={{ height: 64, flex: 'none' }}>
          <Header>
            <AppleOutlined className={styles.logoIcon} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
              onClick={this.menuItemClick}
            >
              {
                RenderMenu(menuData)
              }
            </Menu>
          </Header>
        </Layout>

        <Layout className={styles['ms-layout']} style={{ flex: 1 }}>
          {/* 左侧边栏 */}
          <Sider className={styles.siderVh} width={200}>
            <Menu
              theme="dark"
              defaultSelectedKeys={[currentId]}
            >
              {
                RenderMenu(slideMenu)
              }
            </Menu>
          </Sider>
          {/* content部分 */}
          <Content>
            <Switch>
              {
                config[0].routes.map(item => (
                  <Route path={item.path} key={`router-${item.path}`} history={history}>
                    <item.component></item.component>
                  </Route>
                ))
              }
              <Redirect exact from='/' to='/home'></Redirect>
              <Route path="*">
                404 
                { history.location.hash }
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ menu }: BasicLayoutPropsType) => ({
  menu
}))(BasicLayout)