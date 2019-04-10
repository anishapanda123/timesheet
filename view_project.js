import React, { Component } from 'react'
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
import './style.css';
import {
  BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";

export default class ViewProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      finished: '',
      value1: this.props.location.state.value1,
      value2: this.props.location.state.value2,
      open: true,
      initial:'',
      show: false,
      currentProject: []
    }
  }

  remove(event, single) {
    this.setState({
      currentProject: event,
      show: true
    })
  }
  yes(event) {
    fetch('http://localhost:8000/add_finished_project',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          finished: this.state.currentProject
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          employees: responseJson.employee, 
        })
      })
      .catch((error) => {
        this.setState(error)
      })
      this.setState({
        show: false
      })
  }
  no() {
    this.setState({
      show: false
    })
  }
  componentDidMount() {
    fetch('http://localhost:8000/view_projects',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          employees: this.state.employees
        }),

      })

      .then((response) => response.json())
      .then((responseJson) => {


        console.log(responseJson);
        this.setState({
          employees: responseJson.employees, 
          open: responseJson.open,
          initial:responseJson.initial
        })

      })

      .catch((error) => {
        this.setState(error)
      })
  }

  render() {
    if(this.state.initial=="No Projects added yet"){
      var hidden = 'block';
    }
    else{
      var hidden = 'none';
    }
    return (
      <div style={{ height: "100vh" }}>
        <table className="body" style={{ width: "100%", backgroundColor: 'white', height: "100%" }}>
          <tr>
            <AppBar style={{ backgroundColor: "#000080" }}>
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Daily Work Report
                  </Typography>
                <Link to={{
                  pathname: '/'
                }}>
                  <Button className="b1" color="inherit" style={{ marginLeft: "900px" }}>LOGOUT</Button></Link>
                <Link to={{
                  pathname: '/add_admin',
                  state: {

                    value1: this.state.value1,
                    value2: this.state.value2
                  }
                }}>
                  <Button className="b2" color="inherit" style={{ marginLeft: "10px" }}>ADD ADMIN</Button></Link>
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
                    value1: this.state.value1
                  }
                }}>Home</Link></li>
                <li><Link to={{
                  pathname: '/add_emp',
                  state: {

                    value1: this.state.value1,
                    value2: this.state.value2
                  }
                }}>Add Employee</Link></li>
                <li><Link to={{
                  pathname: "/ve",
                  state: {

                    value1: this.state.value1,
                    value2: this.state.value2
                  }
                }}>View Employee</Link></li>
                <li><Link to={{
                  pathname: "/add_project",
                  state: {

                    value1: this.state.value1,
                    value2: this.state.value2
                  }
                }}>Add project</Link></li>
                <li><Link to={{
                  pathname: "/view_projects",
                  state: {

                    value1: this.state.value1,
                    value2: this.state.value2
                  }
                }}>View projects</Link></li>
                <li><Link to={{
                  pathname: "/cp",
                  state: {

                    value1: this.state.value1,
                    value2: this.state.value2
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
              <div>
                <Grid container justify="center">
                  <Card style={{ width: "80vh", height: "40vh" }}>
                    <CardContent>
                      {this.state.employees.map((single) => (
                        <li class="disp">{single.ProjectName}
                          <i style={{ float: "right", marginTop: "5px" }} onClick={this.remove.bind(this, single)} class="fa fa-minus"></i>
                        </li>

                      ))}
                      <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}>
                        <Grid container justify='center' style={{ marginTop: 10 }}>
                        </Grid>
                        <DialogTitle>Loading....</DialogTitle>
                        <DialogActions>

                        </DialogActions>
                      </Dialog>
                      <Dialog
                        open={this.state.show}
                        onClose={this.handleClose}>
                        <Grid container justify='center' style={{ marginTop: 10 }}>
                        </Grid>
                        <DialogTitle>Are you sure about removing the project?</DialogTitle>
                        <DialogActions>
                        <Button style={{backgroundColor:"rgb(220,20,60)", color:"white"}} onClick={this.yes.bind(this)}>YES</Button>
                        <Button style={{backgroundColor:"rgb(34,139,34)" ,color:'white'}} onClick={this.no.bind(this)}>NO</Button>
                        </DialogActions>
                      </Dialog>
                     
                     <Card style={{display:hidden}}>
                       <Grid container justify='center'><CardContent style={{textAlign:'center'}}>{this.state.initial}</CardContent></Grid> 
                      </Card>
                     
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}