import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import{
  BrowserRouter as Router,Route,Link,Redirect
} from"react-router-dom";

export default class Forgotpwd extends Component {
  constructor(props){
    super(props);
    this.state={
    email:'',
    message:''
    }
   }
  check(){
    fetch('http://localhost:8000/pdchange',
    {
       method:'POST',
       headers:{
         Accept:'application/json',
         'Content-Type':'application/json'
       },
       
       body:JSON.stringify({
        email:this.state.email
          }),
       })
     
    .then((response) => response.json())
    .then((responseJson) => {
    
  
    console.log(responseJson);
     this.setState({
      end:responseJson.status ,
      message:responseJson.message    
    })
 })
    
    .catch((error) =>{
      this.setState(error)
      
    }); 
   }
   changestate(event)
   {
    this.setState({
      email:event.target.value
    })
   }
render(){
  return (
    <div>
      <Grid container justify="center" style={{ 
        background: 'url(https://cdn.hipwallpaper.com/i/42/12/m1hxFd.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height:1000}}>
        {/* add box shadow */}
      <Card style={{height:220,width:220,padding:60, marginTop:190}}>
      <Grid container justify="center">
      <h3>FORGOT PASSWORD?</h3>
     
    <TextField value={this.state.email} onChange={this.changestate.bind(this)}
          id="outlined-email-input"
          label="Email ID"
          placeholder="Enter email id"
          type="email"
          name="email"
          margin="password"
          variant="outlined"
        />
        <p style={{backgroundColor:"#f7b794", color:"#000"}}>{this.state.message}</p>
        </Grid>
   <CardActions>
          <Grid container justify="center">
            <Button variant="contained" size="small" color="primary" marginBottom=" 12" onClick={this.check.bind(this)}> 
              Submit
            </Button>
           
            </Grid>   
          </CardActions>
          <CardContent>    
         </CardContent>
        
      </Card>
      
    </Grid>
    </div>
  );
}}