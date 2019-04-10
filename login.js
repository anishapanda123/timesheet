import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Admin_dashboard from './admin_dashboard';
import{
  BrowserRouter as Router,Route,Link,Redirect
} from"react-router-dom";
export default class Login2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name1: '',
      value3: '',
      pass1: '',
      value2: '',
      value1: '',
      redirect1: false,
      redirect2: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
   }
   submit(){
    fetch('http://localhost:8000/m',
                 {
                    method:'POST',
                    headers:{
                      Accept:'application/json',
                      'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        name1:this.state.value2,
                        pass1:this.state.value3,
                       redirect1:this.state.redirect1,
                       redirect2:this.state.redirect2
                         }),
                    })
                  .then((response) => response.json())
                 .then((responseJson) => {
                 console.log(responseJson);
                  this.setState({
                    redirect1:responseJson.result1,
                    redirect2:responseJson.result2,
                    value1:responseJson.name
                   
                  
                     
                 })
                
                 
           
              })
                 
                 .catch((error) =>{
                   console.error(error);
                 }); 
                 console.log(this.state.value1);
                 console.log(this.state.name1);
  }
  
  handleChange(event) {
    this.setState({
      value2: event.target.value
    })
    console.log(this.state.value1);
     }
    handleChange1(event) {
      this.setState({
        value3: event.target.value
      })}
  render(){
    if (this.state.redirect1 == true) {
      return <Redirect to={{
        pathname: '/admin_dashboard',
        state: {
         value2:this.state.value2,
          value1: this.state.value1
        }
      }} />
    }
    else if (this.state.redirect2 == true) {
      return <Redirect to={{
        pathname: '/user_dashboard',
        state: {

          value1: this.state.value1,
          value2: this.state.value2
        }
      }} />
    }
    
  return (
    <div>
      <Grid container justify="center" style={{ background: 'url(https://cdn.hipwallpaper.com/i/42/12/m1hxFd.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height:845 }}>
      <Card style={{height:300,width:220,margin:130,padding:60}}>
   <label style={{marginBottom:10}}> Employee ID:<br></br> </label>
    <TextField value={this.state.value2} onChange={this.handleChange}
           style={{marginTop:10}}
          id="name3"
          label="ID"
          placeholder='ID'
          type="text"
          name="email"
          autoComplete="email"
          margin="right"
          variant="outlined"
        />
    <br></br>
    <br></br>
    <label style={{marginBottom:10}}> Password:<br></br></label>
    <TextField value={this.state.value3} onChange={this.handleChange1}
          style={{marginTop:10}}
          id="pass3"
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="password"
          margin="password"
          variant="outlined"/>
        <br></br>
        <br></br>
       <CardActions>
     <Grid container justify="center">
       <Button variant="contained" size="large" color="primary" marginBottom=" 12" onClick={this.submit.bind(this)}>
          Login
        <i class="fa fa-sign-in" style={{marginLeft:10}}></i>  
        </Button>
        </Grid>
        </CardActions>
        <CardActions>
        <Grid container justify="center">
        <Link to={{
                pathname:'/fp',}}style={{color:"white"}}>
        <p style={{color:"gray"}}>
          Forgot Password?
        </p>
        </Link>
        </Grid>
      </CardActions>
   <CardContent>
   </CardContent>
      </Card>
    </Grid>
    </div>
  );
}}
  