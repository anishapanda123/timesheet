import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './style.css';
import { blue } from '@material-ui/core/colors';
export default class View_Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: this.props.location.state.value1,
      value2: this.props.location.state.value2,
      name1: "",
      email1: "",
      number1: "",
      dept1: "",
      shown: true,
      message1: "",
      empname: '',
      employee: '',
      empdet: [],
      show: 'none',
      show1: 'inline',
      loading: false,
      open: false,


    }
  }
  toggle() {
    this.setState({
      loading: true,
      open: true
    })
    fetch('http://localhost:8000/view',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          empid: this.state.empid,
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          name1: responseJson.result1,
          email1: responseJson.result2,
          number1: responseJson.result3,
          dept1: responseJson.result4,
          message1: responseJson.result5,
          loading: responseJson.loading,

        }, () => {
          this.setState({
            open: false
          })
        })
      })
      .catch((error) => {
        console.error(error);
      });

    this.setState({
      shown: !this.state.shown,
    });
    console.log(this.state.empid)
  }
  empname(event) {
    this.setState({
      empname: event.target.value
    })
    console.log(this.state.empname)
  }

  employee(event) {
    this.setState({
      employee: event.target.value,
      empid: event.target.value.id
    })
    console.log(this.state.employee, this.state.empid)
  }
  show() {
    this.setState({
      show1: 'inline',
      show: 'none',
      empname: '',
      employee: '',
      shown: !this.state.shown,
    })
  }

  getemp() {
    this.setState({
      show1: 'none',
      show: 'inline'
    })
    fetch('http://localhost:8000/displayemployees',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          empname: this.state.empname
        }),

      })

      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          empdet: responseJson.ress
        }, () => {
          console.log(this.state.empdet)
        })

      })
      .catch((error) => {
        this.setState(error)
      })

  }
  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    var hidden = {
      display: this.state.shown ? "none" : "block"
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
                    value2:this.state.value2,
                    value1: this.state.value1
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
                    value2:this.state.value2,
                    value1: this.state.value1
                  }
                }}>Add Employee</Link></li>
                <li><Link to={{
                  pathname: "/ve",
                  state: {
                    value2:this.state.value2,
                    value1: this.state.value1
                  }
                }}>View Employee</Link></li>
                <li><Link to={{
                  pathname: "/add_project",
                  state: {
                    value2:this.state.value2,
                    value1: this.state.value1
                  }
                }}>Add project</Link></li>
                <li><Link to={{
                  pathname: "/view_projects",
                  state: {
                    value2:this.state.value2,
                    value1: this.state.value1
                  }
                }}>View projects</Link></li>

                <li><Link to={{
                  pathname: "/cp",
                  state: {
                    value2:this.state.value2,
                    value1: this.state.value1
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
                  <Card style={{ width: "100vh", height: "70vh" }}>
                    <CardContent style={shown}>
                      <Grid container justify="center"><h2>Enter Employee name</h2></Grid>
                      <Grid container justify='center'>
                        <TextField value={this.state.empname} onChange={this.empname.bind(this)}
                          id="outlined-email-input"
                          label="Employee Name"
                          type="text"
                          name=""
                          autoComplete="Employee ID"
                          margin="Employee ID"
                          variant="outlined"
                          style={{ height: 55, width: 250, marginTop: 30, marginLeft: 26.5, display: this.state.show1 }}
                        />
                        <Button
                          style={{ height: 40, marginLeft: 30, marginTop: 33, display: this.state.show1 }}
                          variant="contained"
                          size="large"
                          color="primary"
                          marginBottom=" 12"
                          onClick={this.getemp.bind(this)}>
                          Submit
                        </Button>
                        <Grid container justfiy="center">
                          <TextField
                            type="search"
                            margin="normal"
                            select
                            onChange={this.employee.bind(this)}
                            value={this.state.employee}
                            style={{
                              height: 55, width: 210, marginTop: 24, marginLeft: 50,
                              display: this.state.show
                            }}
                          >

                            {this.state.empdet.map(option => (
                              <MenuItem key={option.name} value={option}>
                                {option.name + " ID:" + option.id}
                              </MenuItem>
                            ))}
                          </TextField>
                          <Button
                            style={{
                              height: 40, marginLeft: 58, marginTop: 22,
                              display: this.state.show
                            }}
                            variant="contained"
                            size="large"
                            color="primary"
                            marginBottom=" 12"
                            onClick={this.toggle.bind(this)}>
                            VIEW
                        </Button>
                          <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}>
                            <Grid container justify='center' style={{ marginTop: 10 , width:20, height:20}}>
                              <Fade
                                in={this.state.loading}

                                unmountOnExit
                              >
                                <Grid container justify='center'>
                                
                                </Grid>
                              </Fade>
                            </Grid>
                            <DialogTitle>Loading...</DialogTitle>
                            <DialogActions>
                            </DialogActions>
                          </Dialog>
                          <Button
                            style={{
                              height: 40, marginLeft: 20, marginTop: 22,
                              display: this.state.show
                            }}
                            variant="contained"
                            size="large"
                            color="primary"
                            marginBottom=" 12"
                            onClick={this.show.bind(this)}>
                            VIEW ANOTHER EMPLOYEE
                        </Button>
                        </Grid>
                        <br></br>
                        <br></br>
                        <CardActions>
                        </CardActions>
                      </Grid>
                    </CardContent>
                    <div style={{ fontSize: 17 }}>
                      <CardContent style={hidden} id="1" justify='center'>
                        <label style={{ marginLeft: 250, marginTop: 90 }}>{this.state.message1}<br>
                        </br><br></br></label>
                        <div style={{ marginLeft: 100, marginTop: 30 }}>
                          <label>Employee ID:   {this.state.empid}<br></br><br></br></label>
                          <label>Employee Name:   {this.state.name1}<br></br><br></br></label>
                          <label>Employee Email:   {this.state.email1}<br></br><br></br></label>
                          <label>Phone Number:   {this.state.number1}<br></br><br></br></label>
                          <label>Department:   {this.state.dept1}<br></br></label>
                        </div>
                        <Grid container justify="center">
                          <Button
                            style={{
                              height: 40, marginLeft: 20, marginTop: 22,
                              display: this.state.show
                            }}
                            variant="contained"
                            size="large"
                            color="primary"
                            marginBottom=" 12"
                            onClick={this.show.bind(this)}>
                            VIEW ANOTHER EMPLOYEE
                        </Button>
                        </Grid>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>
              </div>
            </td>
          </tr>
        </table>
      </div >
    );
  };
}
