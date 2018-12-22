import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import './Slider.css';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout height="100vh">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{height:"100vh"}}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} style={{height:"40px"}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            <Menu.Item key="1">
              <Icon type="user" style={{fontSize:"20px"}}/>
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" style={{fontSize:"20px"}} />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3" >
              <Icon type="upload" style={{fontSize:"20px"}} />
              <span>nav 3</span>
            </Menu.Item>
            <Menu.Item key="3" >
              <Icon type="upload" style={{fontSize:"20px"}} />
              <span>nav 3</span>
            </Menu.Item>
            <Menu.Item key="3" >
              <Icon type="upload" style={{fontSize:"20px"}} />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        
          
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
        
        
       
      </Layout>
    );
  }
}
export default SiderDemo; 


