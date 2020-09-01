import React, { Component } from 'react';
import './App.css';
import TabExample from './components/TabExample'
import DropDownExample from './components/DropDown';
import {Switch,Route,Redirect} from "react-router-dom";

class App extends Component {

  render() {
    const ShowListData=()=>{
      return(
        <DropDownExample />
      )}

      const ShowTabsData=()=>{
        return(
          <TabExample />
        )}
    return (
      <>
    
      <div >
        <Switch>
        <Route path="/class" component={ShowListData}/> 
        <Route exact path="/tabs" component={ShowTabsData}/>
        <Redirect to="class" />
        </Switch>

      </div>
      </>
    );
  }

}


export default App;
