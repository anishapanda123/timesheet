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
export default class User_dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            value1:this.props.location.state.value1,
            value2:this.props.location.state.value2
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
          <Button className="b1" color="inherit" style={{marginLeft:"1000px"}}>LOGOUT</Button></Link>
         
        </Toolbar>
      </AppBar>
</tr>
      <tr>
       <td style={{height:"92vh", width:"25vh"}}>
      
      <ul style={{backgroundColor:"#4d4d4d", height:"100%"}}>
              <li><Link to={{
                 pathname:"/user_dashboard" , 
                 state:{
        
                  value1:this.state.value1,
                  value2:this.state.value2}}}>Home</Link></li>
              <li><Link to={{
                 pathname:"/profile" , 
                 state:{
                  value2:this.state.value2,
                  value1:this.state.value1}}}>Profile</Link></li>
              <li>
              <Link to={{
                 pathname:"/timesheet" , 
                 state:{
                   value2:this.state.value2,
                  value1:this.state.value1}}}>Timesheet</Link></li>
               <li><Link to={{
                 pathname:"/cpu" , 
                 state:{
                  value2:this.state.value2,
                  value1:this.state.value1}}}>Change Password</Link></li>
              
               <li></li>
        </ul>
        </td> 
       <td className="picture">
      
          <Card style={{width:"50vh",marginLeft:500}}>

          <label className="label" style={{marginLeft:30,textTransform:'uppercase'}}>WELCOME {this.props.location.state.value1}
         </label>
          </Card>
        </td>
        </tr>
        </table>
        </div>
  );
};
}