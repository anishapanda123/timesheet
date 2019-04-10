import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import{
  BrowserRouter as Router,Route,Link,Redirect
} from"react-router-dom";

export default class AddProject extends Component {
  constructor(props){
    super(props);
    this.state={
    name:'',
    message:'',
    value1:this.props.location.state.value1,
    value2:this.props.location.state.value2,
    loading:false,
    open:false
    }
   }
  submit(){
    this.setState({
      loading:true,
      open:true,
      name:''
     })
    fetch('http://localhost:8000/add_project',
    {
       method:'POST',
       headers:{
         Accept:'application/json',
         'Content-Type':'application/json'
       },
       
       body:JSON.stringify({
        name:this.state.name
          }),
       
   })
     
    .then((response) => response.json())
    .then((responseJson) => {
    
  
    console.log(responseJson);
     this.setState({
      message:responseJson.message,
      loading:responseJson.loading
    })
 })
    
    .catch((error) =>{
      this.setState(error)
    }); console.log(this.state.value2);
   }
   changestate(event)
   {
    this.setState({
      name:event.target.value
    })
   }
   handleClose(event){
  
      this.setState({
        message:'',
        open:false
      })

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
      value2:this.state.value2,
       value1:this.state.value1
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
      value2:this.state.value2,
         value1:this.state.value1
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
                  value2:this.state.value2,
                  value1:this.state.value1
                }}}>Add project</Link></li>
              <li><Link to={{
                 pathname:"/view_projects" , 
                 state:{
                  value2:this.state.value2,
                  value1:this.state.value1
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
                
                          value1:this.state.value1,
                      value2:this.state.value2
                        }}}>Summary</Link></li>
        <li></li>
 </ul>
 </td> 
<td className="picture">
<div>
<Grid container justify="center">
<Card style={{height:220,width:220,padding:60, marginTop:30}}>
      <Grid container justify="center">
      <h3>Add Project</h3>
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
    <TextField value={this.state.name} onChange={this.changestate.bind(this)}
          id="outlined-email-input"
          label="Project Name"
          placeholder="Enter Project Name"
          type="text"
          name="name"
          margin="password"
          variant="outlined"
        />
      
        </Grid>
   <CardActions>
          <Grid container justify="center">
            <Button style={{marginTop:10}} variant="contained" size="large" color="primary" onClick={this.submit.bind(this)}> 
              Submit
            </Button>
            </Grid>   
          </CardActions>
          <CardContent>    
         </CardContent>
        
      </Card>
     
   
</Grid>
   </div>
 </td>
 </tr>
 </table>
 </div>


  );
}}