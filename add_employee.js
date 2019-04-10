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
export default class Employee extends Component {
    constructor(props){
        super(props);
        this.state={
            value1:this.props.location.state.value1,
            value2:this.props.location.state.value2,
            email:'',
            name:'',
            name1:'',
            mail:'',
            empid:'',
            message:"",
            loading:false,
            open:false
            
        }
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
       }
       submit()
       {
        this.setState({
          name:"",
          email:"",
          empid:"",
          loading:true,
          open:true
        })

          fetch('http://localhost:8000/add_emp',
         {
           method:'POST',
           headers:{
             Accept:'application/json',
             'Content-Type':'application/json'
           },
           body:JSON.stringify({
              name1:this.state.name,
              mail:this.state.email,
              empid:this.state.empid,
              
           }),
          })
           .then((response) => response.json())
           .then((responseJson)=>{
             console.log(responseJson);
             this.setState({
                message1:responseJson.result,
                message:responseJson.key,
                loading:responseJson.loading,

             })
           })
           .catch((error)=>{
             console.error(error);
           });          
          }
     
       handleChange1(event){
         this.setState({
           name:event.target.value
         })
       }
       handleChange2(event){
        this.setState({
            email:event.target.value
        })
      }
      handleChange3(event){
        this.setState({
            empid:event.target.value
        })
      }
      
      handleClose (){
        this.setState({
          open:false,
          message:''})
          
      }
    
       render(){
        return (
            <div style={{height:"90vh",marginTop:45}}>
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
       <Grid container justify="center">
        <Card style={{height:300,width:200, padding:60}}>
        <Grid container justify="center"><h2 style={{marginTop:0}}>Add Employee</h2></Grid>
          <TextField value={this.state.name} onChange={this.handleChange1}
                style={{marginTop:10}}
                id="Admin_name"
                label="Employee Name"
                placeholder="Employee Name"
                type="text"
                name="Admin Name"
                autoComplete="Admin Name"
                margin="right"
                variant="outlined"
              />
          <br></br>
          <br></br>
          {/*<label>Email ID:<br></br></label>*/}
         <TextField value={this.state.email} onChange={this.handleChange2}
                id="outlined-email-input"
                placeholder="Email ID"
                label="Email ID"
                type="email"
                name="Email ID"         
                autoComplete="Email ID"
                margin="Email ID"
                variant="outlined"
                style={{marginTop:10}}
              />
              <br></br>
              <br></br>
              <TextField value={this.state.empid} onChange={this.handleChange3}
                id="employee_id"
                label="Employee ID"
                placeholder="Employee ID"
                type="text"
                name="Employee ID"         
                autoComplete="Employee ID"
                margin="Employee ID"
                variant="outlined"
                style={{marginTop:10}}
              />
         <CardActions>
         <Grid container justify="center">
         <Button variant="contained" size="medium" color="primary" marginBottom=" 12" onClick={this.submit.bind(this)}>
               ADD EMPLOYEE
                <i class="fa fa-user-plus" style={{marginLeft:10}}></i>
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
         </Grid>     
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