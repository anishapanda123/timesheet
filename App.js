import React, { Component } from 'react';
import './App.css';
import User_dashboard from './user_dashboard';
import Admin_dashboard from './admin_dashboard';
import Login2 from './login';
import Forgotpwd from './forgot_pass';
import Changepwd from './change_pass';
import UserDetails from './user_details';
import Add_Admin from './add_admin';
import View_Employee from './view_employee';
import Changepwduser from './changePassUser';
import Employee from './add_employee';
import AddProject from './add_project'
import ViewProjects from './view_project';
import Timesheet from './Timesheet';
import Summary from './summary'
// import Month from './month'
import{
 BrowserRouter as Router, Link,Route,Redirect
} from "react-router-dom";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }}
        render(){
         return(
      
         <Router>
           <div>
           <Route exact path='/' component={Login2}/>
  <Route exact path='/admin_dashboard' component={Admin_dashboard}/> 
  <Route exact path='/fp' component={Forgotpwd}/> 
  <Route exact path='/cp' component={Changepwd} /> 
  <Route exact path='/add_admin' component={Add_Admin}/> 
  <Route exact path='/user_dashboard' component={User_dashboard}/> 
  <Route exact path='/cpu' component={Changepwduser}/> 
  <Route exact path='/profile' component={UserDetails}/> 
  <Route exact path='/ve' component={View_Employee}/> 
  <Route exact path='/add_emp' component={Employee}/> 
  <Route exact path='/view_projects' component={ViewProjects}/>
  <Route exact path='/add_project' component={AddProject}/> 
  <Route exact path='/timesheet' component={Timesheet}/>
  <Route exact path='/summary' component = {Summary}/>
  {/* <Route exact path='/summary/month' component ={Month}/> */}
           </div>
         </Router>
    );
  }
}
export default App;

