import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import{
  BrowserRouter as Router,Route,Link,Redirect
} from"react-router-dom";
import Grid from '@material-ui/core/Grid';
import './style.css';
export default class Changepwduser extends Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    new1:'',
    current1:'',
    new:'',
    current:'',
    value1:this.props.location.state.value1,
    value2:this.props.location.state.value2,
    redirect:false,
  
    username2:'',
    rewrite:'',
    message:'',
    loading:false,
    open:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
   }
   submit(){
    this.setState({
      loading:true
     })
    fetch('http://localhost:8000/changepassuser',
                 {
                    method:'POST',
                    headers:{
                      Accept:'application/json',
                      'Content-Type':'application/json'
                    },
                    
                    body:JSON.stringify({
                        current:this.state.current1,
                        new:this.state.new1,
                        usrname:this.state.value1,
                        rewrite:this.state.rewrite,
                        redirect:this.state.redirect,
                        value2:this.state.value2,
                    }),
                    
                })
                  
                 .then((response) => response.json())
                 .then((responseJson) => {
                 
               
                 console.log(responseJson);
                  this.setState({
                   redirect:responseJson.result,
                   username2:responseJson.result1,
                   message:responseJson.key,
                   loading:responseJson.loading,
                     
                 })

              })
                 
                 .catch((error) =>{
                   console.error(error);
                 }); console.log(this.state.usrname);
                 console.log(this.state.value2);
                 this.setState({ open: true })
                
  }
  
  handleChange(event) {
    var current1 = event.target.value
    this.setState({
      current1: current1
    }); console.log(this.state.usrname);
}
    handleChange1(event) {
        var new1 = event.target.value
        this.setState({
          new1: new1
        })}
        handleChange2(event) {
          var rewrite = event.target.value
          this.setState({
            rewrite: rewrite
          })}
          handleClose (){
            this.setState({
              open:false})
              if(this.state.message == "password changed successfully")
              {  
                console.log("different")
                this.setState({
                current1:'',
                rewrite:'',
                new1:'',
                })
              }
              else{
                this.setState({
                  message:''
                })
              }
        }
render(){
   
  
  return (
    <div style={{height:"100%",marginTop:50}}>
    <Grid container justify="center">
    <table className="body" style={{width:"100%",backgroundColor:'white',height:"100%"}}>
    <tr>
        <AppBar style={{backgroundColor:"#000080"}}>
 <Toolbar>
   <Typography variant="h6" color="inherit">
    Daily Work Report
   </Typography>
   <Link to={{
    pathname:'/'}}>
  <Button className="b1" color="inherit" style={{marginLeft:"1050px"}}>LOGOUT</Button></Link>
 
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
<Grid container justify="center">
<Card style={{height:340,width:220,margin:90,padding:60}}>
<Grid container justify="center"><h2 style={{marginTop:0}}>Change Password</h2></Grid>
   <label > Current Password:<br></br> </label>
    <TextField value={this.state.current1} onChange={this.handleChange}
          id="outlined-email-input"
          placeholder="password"
          type="text"
          name="email"
          autoComplete="email"
          margin="right"
          variant="outlined"
        />
    <br></br>
    <br></br>
    <label> Password:<br></br></label>
    <TextField value={this.state.new1} onChange={this.handleChange1}
          id="outlined-email-input"
          placeholder="Password"
          type="text"
          name="password"
          autoComplete="password"
          margin="password"
          variant="outlined"
        />
        <br></br>
        <br></br>
        <label>Verify Password:<br></br></label>
    <TextField value={this.state.rewrite} onChange={this.handleChange2}
          id="outlined-email-input"
          placeholder="verify password"
          type="text"
          name="password"
          autoComplete="password"
          margin="password"
          variant="outlined"
        />
        <br></br>
        <br></br>
        
   <CardActions>
   <Button style={{marginLeft:50}} variant="contained" size="medium" color="primary" marginBottom=" 20" onClick={this.submit.bind(this)}>
               SUBMIT
                <i></i>
              </Button>
          
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}>
          <Grid container justify='center' style={{marginTop:10}}>
           <Fade
            in={this.state.loading}
        
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
           </Grid>
          <DialogTitle>{this.state.message}</DialogTitle>
          <DialogActions>
            
            <Button onClick={this.handleClose.bind(this)} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </CardActions>
   <CardContent>
  
         </CardContent>
      </Card>
</Grid>
 </td>
 </tr>
 </table>
 </Grid>
 </div>
);
 
}}