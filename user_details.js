import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';

import{
  BrowserRouter as Router,Route,Link,Redirect
} from"react-router-dom";
export default class UserDetails extends Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    id2:'',
    empid:'',
    message1:'',
    name2:'',
    name1:'',
    number2:'',
    number1:'',
    email2:'',
    mail1:'',
    dept2:'',
    dept1:'',
    open:false,
    value1:this.props.location.state.value1,
    value2:this.props.location.state.value2,
    loading:false,
    query: 'idle',
    }
  
    this.handleChange3=this.handleChange3.bind(this);

    this.handleChange5=this.handleChange5.bind(this);
   }
   componentDidMount(){
    fetch('http://localhost:8000/userdetails',
    {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
         empid:this.state.value2,
      }),
     })
      .then((response) => response.json())
      .then((responseJson)=>{
        this.setState({
          mail1:responseJson.mail1
        })
      })
      .catch((error)=>{
        console.error(error);
      });
      console.log(this.state.mail1)
   }
   submit()
   {
     this.setState({
      loading:true

     })
     fetch('http://localhost:8000/details',
     {
       method:'POST',
       headers:{
         Accept:'application/json',
         'Content-Type':'application/json'
       },
       body:JSON.stringify({
          id2:this.state.value2,
          name2:this.state.value1,
          number2:this.state.number1,
          mail2:this.state.mail1,
          dept2:this.state.dept1
       }),
      })
       .then((response) => response.json())
       .then((responseJson)=>{
         console.log(responseJson);
         this.setState({
            loading:responseJson.loading,
            message1:responseJson.result,
         })
       })
       .catch((error)=>{
         console.error(error);
       });console.log(this.state.message1);
       this.setState({ open: true })
      }
  
  
  handleChange3(event){
    this.setState({
      number1:event.target.value
    })
  }

  handleChange5(event){
    this.setState({
      dept1:event.target.value
    })
  }
  handleClose (){
    this.setState({
      open:false,
     
    })
  }
render(){
  return (
    <div style={{height:"100vh"}}>
    <table className="body" style={{width:"100%",backgroundColor:'white',height:"100%"}}>
    <tr>
        <AppBar style={{backgroundColor:"#000080",height:55}}>
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
<td style={{height:"85vh", width:"25vh"}}>
      
      <ul style={{backgroundColor:"#4d4d4d", height:"97%"}}>
              <li style={{marginTop:25}}><Link to={{
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
               <li ><Link to={{
                 pathname:"/cpu" , 
                 state:{
                  value2:this.state.value2,
                  value1:this.state.value1}}}>Change Password</Link></li>
              
               <li></li>
        </ul>
        </td> 
<td className="picture">

<Card style={{height:522,width:220,marginLeft:400,padding:60}}>
<Grid container justify="center"><h3 style={{marginTop:0}}>Add Details</h3></Grid>
   <label >Employee ID:<br></br> </label>
    <TextField value={this.state.value2} 
          id="outlined-email-input"
          placeholder="Employee ID"
          type="text"
          name="Employee ID"
          autoComplete="Employee ID"
          margin="right"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
    <br></br>
    <br></br>
    <label> Employee Name:<br></br></label>
    <TextField  value={this.state.value1}
          id="outlined-email-input"
          placeholder="Employee Name"
          type="text"
          name="Employee Name"         
          autoComplete="Employee Name"
          margin="Employee Name"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br>
        <br></br>
        <label>Phone Number:<br></br></label>
    <TextField value={this.state.number1} onChange={this.handleChange3}
          id="outlined-email-input"
          placeholder="Phone Number"
          type="text"
          name="Phone Number"
          autoComplete="Phone Number"
          margin="Phone Number"
          variant="outlined"
        />
        <br></br>
        <br></br>
        <label>Email:<br></br></label>
    <TextField  value={this.state.mail1} 
          id="outlined-email-input"
          placeholder="Email"
          type="text"
          name="Email"
          autoComplete="Email"
          margin="Email"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br>
        <br></br>
        <label>Department:<br></br></label>
    <TextField  value={this.state.dept1} onChange={this.handleChange5}
          id="outlined-email-input"
          placeholder="Department"
          type="text"
          name="Department"
          autoComplete="Department"
          margin="Department"
          variant="outlined"
        />
        <br></br>
        <br></br>
   <CardActions>
   <Button style={{marginLeft:50}} variant="contained" size="small" color="primary" marginBottom="40" onClick={this.submit.bind(this)}>
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
          <DialogTitle>{this.state.message1}</DialogTitle>
          <DialogActions>
            
            <Button onClick={this.handleClose.bind(this)} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <br></br>
        <br></br>
       
      
        
      </CardActions>
   <CardContent>
  
         </CardContent>
      </Card>
 </td>
 </tr>
 </table>
 </div>
  );
}}
  