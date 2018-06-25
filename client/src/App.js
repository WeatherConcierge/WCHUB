
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions/index'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Sticky } from 'semantic-ui-react'

import SidebarLeftScaleDown from './containers/navbar/SidebarLeftScaleDown'
import MenuExamplePointing from './containers/navbar/MainMenu'

import Post from './containers/Post'
import Dashboard from './containers/dashboard'
import Forecasters from './containers/forecasters'
import Settings from './containers/Settings'
import Location from './containers/location'
import Signin from './containers/Signin'
import Search from './containers/Search'
const Topbar = () =>     <div className="navbar">
        <span className="web-logo"> Weather Concierge</span>
      <Icon className="user-logo" name="user circle"> </Icon> 
 

</div>



class App extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }
    

    render() {
        return (
            <div>
                <BrowserRouter> 
                    <div>
                         <Route   path="/" component={Topbar} /> 
                        <Route exact  path="/u/dashboard" component={Dashboard} />  
                        <Route exact  path="/u/forecasters" component={Forecasters} />  
                        <Route exact  path="/u/settings" component={Settings} />  
                        <Route exact  path="/u/location" component={Location} />  
                        <Route  path="/" component={SidebarLeftScaleDown} />  
                        <Route path="/signin" component={Signin} />
                        <Route exact  path="/u/search" component={Search} /> 
                        

                    </div>
                </BrowserRouter>

                
            </div>
        )
    }
   
}



export default connect(null, actions)(App)

