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
import {
  BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './style.css';
export default class Add_Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: this.props.location.state.value1,
      value2:this.props.location.state.value2,
      loading:false,
      email: '',
      name: '',
      name1: '',
      mail: '',
      empid: '',
      open: false
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  submit() {
    this.setState({
      name:"",
      email:"",
      empid:"",
      loading:true,
      open:true
     })
    fetch('http://localhost:8000/mail',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name1: this.state.name,
          mail: this.state.email,
          empid: this.state.empid

        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          message1: responseJson.key,
          loading:responseJson.loading
        })
      })
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
   handleChange(event){
     this.setState({
         empid:event.target.value
     })
   }
      handleClose (){
        this.setState({
          open:false})
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
                  pathname: '/',


                }} style={{ marginLeft: 170 }}>
                  <Button className="b1" color="inherit" style={{ marginLeft: "850px" }}>LOGOUT</Button></Link>

              </Toolbar>
            </AppBar>
          </tr>
          <tr>
            <td style={{ height: "92vh", width: "25vh" }}>

              <ul style={{ backgroundColor: "#4d4d4d", height: "100%" }}>
                <li><Link to={{
                  pathname: "/admin_dashboard",
                  state: {

                    value2:this.state.value2,
                    value1:this.state.value1
                  }
                }}>Home</Link></li>
                <li><Link to={{
                  pathname: '/add_emp',
                  state: {

                    value2:this.state.value2,
                    value1:this.state.value1
                  }
                }}>Add Employee</Link></li>
                <li><Link to={{
                  pathname: "/ve",
                  state: {

                    value2:this.state.value2,
                  value1:this.state.value1
                  }
                }}>View Employee</Link></li>
                <li><Link to={{
                  pathname: "/add_project",
                  state: {

                    value2:this.state.value2,
                    value1:this.state.value1
                  }
                }}>Add project</Link></li>
                <li><Link to={{
                  pathname: "/view_projects",
                  state: {

                    value2:this.state.value2,
                  value1:this.state.value1
                  }
                }}>View projects</Link></li>

                <li><Link to={{
                  pathname: "/cp",
                  state: {

                    value2:this.state.value2,
                    value1:this.state.value1
                  }
                }}>change password</Link></li>
                <li><Link to={{
                  pathname: "/summary",
                  state: {

                    value1: this.state.value1,
                    value2: this.state.value2
                  }
                }}>Summary</Link></li>
                <li></li>
              </ul>
            </td>
            <td className="picture">

              <Card style={{ height: 250, width: 200, marginLeft: 400, padding: 60 }}>
                {/*} <label >Admin Name:<br></br> </label>*/}
                <TextField value={this.state.empid} onChange={this.handleChange}
                  id="Admin_id"
                  label="Admin ID"
                  type="text"
                  name="Admin ID"
                  autoComplete="Admin Name"
                  margin="right"
                  variant="outlined"
                />
                <br></br>
                <br></br>
                <TextField value={this.state.name} onChange={this.handleChange1}
                  id="Admin_name"
                  label="Admin Name"
                  type="text"
                  name="Admin Name"
                  autoComplete="Admin Name"
                  margin="right"
                  variant="outlined"
                />
                <br></br>
                <br></br>
                {/*} <label>Email ID:<br></br></label>*/}
                <TextField value={this.state.email} onChange={this.handleChange2}
                  id="outlined-email-input"
                  label="Email ID"
                  type="email"
                  name="Email ID"
                  autoComplete="Email ID"
                  margin="Email ID"
                  variant="outlined"
                />
                <br></br>
                <br></br>
                <CardActions>
                  <Grid container justify="center">
                    <Button variant="contained" size="medium" color="primary" marginBottom=" 12" onClick={this.submit.bind(this)}>
                      ADD ADMIN
                <i class="fa fa-user" style={{ marginLeft: 10 }}></i>
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
          </Grid>    
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
