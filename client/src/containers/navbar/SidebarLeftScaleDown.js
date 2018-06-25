import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid } from 'semantic-ui-react'
import Post from '../Post'
import { Link } from 'react-router-dom'
class SidebarLeftUncover extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment} id="sidebar">
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Link to="/u/dashboard"><Menu.Item name='home' >
              
              <Icon name='home'></Icon>
            </Menu.Item></Link>

            <Link to="/u/dashboard">
            <Menu.Item name='conversation'>
              <Icon name='conversation' disabled/>
            </Menu.Item> </Link>

            <Link to="/u/forecasters">
            <Menu.Item name='users'>
              <Icon name='users' />
            </Menu.Item>
            </Link>
            <Link to="/u/location">
            <Menu.Item name='map pin'>
              <Icon name='map pin' />
            </Menu.Item></Link>
            <Link to="/u/dashboard">
            <Menu.Item name='search'>
              <Icon name='search' disabled/>
            </Menu.Item></Link>
            <Link to='/u/dashboard'>
            <Menu.Item name='settings'>
              <Icon name='setting' disabled/>
            </Menu.Item> </Link>
          </Sidebar>
          <Sidebar.Pusher>
      
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftUncover