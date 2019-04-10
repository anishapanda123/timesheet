import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import{
  BrowserRouter as Router,Route,Link,Redirect
} from"react-router-dom";

import Grid from '@material-ui/core/Grid';
import './style.css';

export default class Admin_dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
value1:this.props.location.state.value1,
value2:this.props.location.state.value2,
        }
    }
   

  render(){
   
  return (
    
      <div style={{height:"100vh"}}>
           <table className="body" style={{width:"100%",backgroundColor:'white',height:"100%"}}>
           <tr>
               <AppBar style={{backgroundColor:"#000080"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
           Daily Work Report
          </Typography>
          <Link to={{
            pathname:'/'}}>
          <Button className="b1" color="inherit" style={{marginLeft:"900px"}}>LOGOUT</Button></Link>
          <Link to={{
            pathname:'/add_admin',
            state:{
            
              value1:this.state.value1,
              value2:this.state.value2
            }
            }}>
          <Button className="b2" color="inherit" style={{marginLeft:"10px"}}>ADD ADMIN</Button></Link>
        </Toolbar>
      </AppBar>
</tr>
      <tr>
       <td style={{height:"92vh", width:"25vh"}}>
      
      <ul style={{backgroundColor:"#4d4d4d", height:"100%"}}>
              <li><Link to={{
                 pathname:"/admin_dashboard" , 
                 state:{
        value2:this.state.value2,
                  value1:this.state.value1
                }}}>Home</Link></li>
              <li><Link to={{
            pathname:'/add_emp',
            state:{
                value1:this.state.value1,
                value2:this.state.value2
              }}}>Add Employee</Link></li>
              <li><Link to={{
                 pathname:"/ve" , 
                 state:{
                  value2:this.state.value2,
                  value1:this.state.value1
                }}}>View Employee</Link></li>
                 <li><Link to={{
                 pathname:"/add_project" , 
                 state:{
        
                  value1:this.state.value1,
                  value2:this.state.value2
                }}}>Add project</Link></li>
              <li><Link to={{
                 pathname:"/view_projects" , 
                 state:{
                  value1:this.state.value1,
                  value2:this.state.value2
                }}}>View projects</Link></li>
              
               <li><Link to={{
                 pathname:"/cp" , 
                 state:{
                  value2:this.state.value2,
                  value1:this.state.value1
                }}}>change password</Link></li>
                
               <li><Link to={{
                 pathname:"/summary" , 
                 state:{
                  value2:this.state.value2,
                  value1:this.state.value1
                }}}>Summary</Link></li>
               <li></li>
        </ul>
        
        </td> 
        
       
        <td className="picture">
      
          <Card style={{width:"50vh",marginLeft:400}}>

          <label className="label" style={{marginLeft:30,textTransform:'uppercase'}}>WELCOME {this.state.value1}</label>
          </Card>
        
         
        </td>
        </tr>
        </table>
        </div>
  );


};
}

