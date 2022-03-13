import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Receipt from './Receipt.js'
import Tab from './Tab.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "Receipt" component = {Receipt} title = "Receipt" initial = {true} />
         <Scene key = "Tab" component = {Tab} title = "Tab" />
      </Scene>
   </Router>
)
export default Routes