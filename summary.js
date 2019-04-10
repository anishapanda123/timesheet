import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import './style.css';
import{
 BrowserRouter as Router,Route,Link,Redirect
} from"react-router-dom";
import { func } from 'prop-types';

export default class Timesheet extends Component {
 constructor(props){
 super(props);
 this.state={
 value2:this.props.location.state.value2,
 value1:this.props.location.state.value1,
 emp:[],
 employee:'',
 projects:[],
 data:[],
 empid:'',
 empname:'',
 empdet:[],
 month:'',
 week:'',
 weeks:["week1","week2","week3",'week4'],
 months:[
 {name:'january',id:0},
 {name:'february',id:1},
 {name:'march',id:2},
 {name:'april',id:3},
 {name:'may',id:4},
 {name:'june',id:5},
 {name:'july',id:6},
 {name:'august',id:7},
 {name:'september',id:8},
 {name:'october',id:9},
 {name:'november',id:10},
 {name:'december',id:11}
 ],
 pro:[],
 week1:[],
 week2:[],
 week3:[],
 week4:[],
 display1:'block',
 // display2:'none',
 display:[],
 total:{
 monday:0,
 tuesday:0,
 wednesday:0,
 thursday:0,
 friday:0,
 saturday:0
 }
 }
 }
componentDidMount(){ 
 fetch('http://localhost:8000/fetchsummary',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 }),
 
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 // console.log(responseJson);
 this.setState({
 projects:responseJson.employees,
 pro:responseJson.pro,
 emp:responseJson.emp,
 },()=>{
 }) 
 
 })
 .catch((error) =>{
 this.setState(error)
 })
 
 }
projects(event){
 this.setState({
 projectName:event.target.value
 })
 
}
empname(event){
 this.setState({
 empname:event.target.value,
 display1:'block'

 })
 console.log(this.state.empname)
}
month(event){
 this.setState({
 month:event.target.value
 })
}
week(event){
 this.setState({
 week:event.target.value
 })
}
employee(event){
 this.setState({
 employee:event.target.value,
 empid:event.target.value.id,
})
console.log(this.state.employee, this.state.empid)
}
getemp(){
 console.log("fetching....")
 this.setState({
 display1:'none'
 })
 fetch('http://localhost:8000/displayemployees',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 empname:this.state.empname
 }),
 
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 // console.log(responseJson);
 this.setState({
 empdet:responseJson.ress
 },()=>{
 console.log(this.state.empdet)
 }) 
 
 })
 .catch((error) =>{
 this.setState(error)
 })
 
 console.log(this.state.empdet)
}
submit(){

 fetch('http://localhost:8000/summary',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 empid:this.state.empid,
 week:this.state.week, 
 month:this.state.month,
 }),
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 this.setState({
 data:responseJson.data
 }) 
 })
 .catch((error) =>{
 this.setState(error)
 }).then(()=>{
 this.setState({
 week1:this.state.data.week1,
 week2:this.state.data.week2,
 week3:this.state.data.week3,
 week4:this.state.data.week4
 },
 ()=>{if(this.state.week=="week1"){
 this.setState({
 display:this.state.data.Week1[0]
 },()=>{
 console.log(this.state.display,this.state.pro)
 })
 
 }
 else if(this.state.week=="week2"){
 this.setState({
 display:this.state.data.Week2[0]
 })
 }
 else if(this.state.week=="week3"){
 this.setState({
 display:this.state.data.Week3[0]
 })
 }
 else if(this.state.week=="week4"){
 this.setState({
 display:this.state.data.Week4[0]
 })
 }})
 var i; 
 for(i=0;i<this.state.projects.length;i++){

 if(this.state.projects[i]==this.state.display.Monday[0].project1){
 this.state.pro[i].week.Monday = parseInt(this.state.display.Monday[0].data1)
 this.state.total.monday = this.state.display.Monday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })
 }else if(this.state.projects[i]==this.state.display.Monday[0].project2){
 this.state.pro[i].week.Monday = parseInt(this.state.display.Monday[0].data2)
 this.state.total.monday = this.state.display.Monday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })
 }
 else if(this.state.projects[i]==this.state.display.Monday[0].project3){
    this.state.pro[i].week.Monday = parseInt(this.state.display.Monday[0].data3)
    this.state.total.monday = this.state.display.Monday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
    }
    else if(this.state.projects[i]==this.state.display.Monday[0].project4){
        this.state.pro[i].week.Monday = parseInt(this.state.display.Monday[0].data4)
        this.state.total.monday = this.state.display.Monday[0].total
        this.setState({
        pro:this.state.pro,
        total:this.state.total
        })
        }
 else if(this.state.projects[i]!=this.state.display.Monday[0].project2 && this.state.projects[i]!=this.state.display.Monday[0].project1 &&this.state.projects[i]!=this.state.display.Monday[0].project3 && this.state.projects[i]!=this.state.display.Monday[0].project4 ){
 this.state.pro[i].week.Monday = 0
 this.state.total.monday = this.state.display.Monday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })
 }
 if(this.state.projects[i]==this.state.display.Tuesday[0].project1){
 this.state.pro[i].week.Tuesday = parseInt(this.state.display.Tuesday[0].data1)
 this.state.total.tuesday = parseInt(this.state.display.Tuesday[0].total)
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })

 }else if(this.state.projects[i]==this.state.display.Tuesday[0].project2){
 this.state.pro[i].week.Tuesday = parseInt(this.state.display.Tuesday[0].data2)
 this.state.total.tuesday = this.state.display.Tuesday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })

} 
else if(this.state.projects[i]==this.state.display.Tuesday[0].project3){
    this.state.pro[i].week.Tuesday = parseInt(this.state.display.Tuesday[0].data3)
    this.state.total.tuesday = this.state.display.Tuesday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
}
else if(this.state.projects[i]==this.state.display.Tuesday[0].project4){
    this.state.pro[i].week.Tuesday = parseInt(this.state.display.Tuesday[0].data4)
    this.state.total.tuesday = this.state.display.Tuesday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
}
else if(this.state.projects[i]!=this.state.display.Tuesday[0].project2 && this.state.projects[i]!=this.state.display.Tuesday[0].project1 && this.state.projects[i]!=this.state.display.Tuesday[0].project3 && this.state.projects[i]!=this.state.display.Tuesday[0].project4){
 this.state.pro[i].week.Tuesday = 0
 this.state.total.tuesday = this.state.display.Tuesday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })
}

if(this.state.projects[i]==this.state.display.Wednesday[0].project1){
 this.state.pro[i].week.Wednesday = parseInt(this.state.display.Wednesday[0].data1)
 this.state.total.wednesday =this.state.display.Wednesday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })

}else if(this.state.projects[i]==this.state.display.Wednesday[0].project2){
 this.state.pro[i].week.Wednesday = parseInt(this.state.display.Wednesday[0].data2)
 this.state.total.wednesday = this.state.display.Wednesday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })

}
else if(this.state.projects[i]==this.state.display.Wednesday[0].project3){
    this.state.pro[i].week.Wednesday = parseInt(this.state.display.Wednesday[0].data3)
    this.state.total.wednesday = this.state.display.Wednesday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
   
   }
   else if(this.state.projects[i]==this.state.display.Wednesday[0].project4){
    this.state.pro[i].week.Wednesday = parseInt(this.state.display.Wednesday[0].data4)
    this.state.total.wednesday = this.state.display.Wednesday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
   
   }
else if(this.state.projects[i]!=this.state.display.Wednesday[0].project2 && this.state.projects[i]!=this.state.display.Wednesday[0].project1 && this.state.projects[i]!=this.state.display.Wednesday[0].project3 && this.state.projects[i]!=this.state.display.Wednesday[0].project4){
 this.state.pro[i].week.Wednesday = 0
 this.state.total.wednesday = this.state.display.Wednesday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })
}

if(this.state.projects[i]==this.state.display.Thursday[0].project1){
 this.state.pro[i].week.Thursday = parseInt(this.state.display.Thursday[0].data1)
 this.state.total.thursday = this.state.display.Thursday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })

}else if(this.state.projects[i]==this.state.display.Thursday[0].project2){
 this.state.pro[i].week.Thursday = parseInt(this.state.display.Thursday[0].data2)
 this.state.total.thursday =this.state.display.Thursday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })
}
else if(this.state.projects[i]==this.state.display.Thursday[0].project3){
    this.state.pro[i].week.Thursday = parseInt(this.state.display.Thursday[0].data3)
    this.state.total.thursday =this.state.display.Thursday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
   }
   else if(this.state.projects[i]==this.state.display.Thursday[0].project4){
    this.state.pro[i].week.Thursday = parseInt(this.state.display.Thursday[0].data4)
    this.state.total.thursday =this.state.display.Thursday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
   }
else if(this.state.projects[i]!=this.state.display.Thursday[0].project2 && this.state.projects[i]!=this.state.display.Thursday[0].project1 && this.state.projects[i]!=this.state.display.Thursday[0].project3 && this.state.projects[i]!=this.state.display.Thursday[0].project4){
 this.state.pro[i].week.Thursday = 0
 this.state.total.thursday = this.state.display.Thursday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })
}

if(this.state.projects[i]==this.state.display.Friday[0].project1){
 this.state.pro[i].week.Friday = parseInt(this.state.display.Friday[0].data1)
 this.state.total.friday = this.state.display.Friday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })

}else if(this.state.projects[i]==this.state.display.Friday[0].project2){
 this.state.pro[i].week.Friday = parseInt(this.state.display.Friday[0].data2)
 this.state.total.friday = this.state.display.Friday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })

}
else if(this.state.projects[i]==this.state.display.Friday[0].project3){
    this.state.pro[i].week.Friday = parseInt(this.state.display.Friday[0].data3)
    this.state.total.friday = this.state.display.Friday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
   
   }
   else if(this.state.projects[i]==this.state.display.Friday[0].project4){
    this.state.pro[i].week.Friday = parseInt(this.state.display.Friday[0].data4)
    this.state.total.friday = this.state.display.Friday[0].total
    this.setState({
    pro:this.state.pro,
    total:this.state.total
    })
   
   }
else if(this.state.projects[i]!=this.state.display.Friday[0].project2 && this.state.projects[i]!=this.state.display.Friday[0].project1 && this.state.projects[i]!=this.state.display.Friday[0].project3 && this.state.projects[i]!=this.state.display.Friday[0].project4){
 this.state.pro[i].week.Friday = 0
 this.state.total.friday = this.state.display.Friday[0].total
 this.setState({
 pro:this.state.pro,
 total:this.state.total
 })
}

// if(this.state.projects[i]==this.state.display.Saturday[0].project1){
// this.state.pro[i].week.Saturday = parseInt(this.state.display.Saturday[0].data1)
// this.state.total.saturday= parseInt(this.state.display.Saturday[0].data1) + this.state.pro[i].week.total
// this.setState({
// pro:this.state.pro,
// total:this.state.total
// })
// }else if(this.state.projects[i]==this.state.display.Saturday[0].project2){
 // this.state.pro[i].week.total = parseInt(this.state.display.Saturday[0].data2) + this.state.pro[i].week.total
// this.state.total.saturday = parseInt(this.state.display.Saturday[0].data2)
// this.setState({
// pro:this.state.pro,
// total:this.state.total
// })
// }
// else if(this.state.projects[i]==this.state.display.Saturday[0].project3){
    // this.state.pro[i].week.total = parseInt(this.state.display.Saturday[0].data3) + this.state.pro[i].week.total
   // this.state.total.saturday = parseInt(this.state.display.Saturday[0].data2)
   // this.setState({
   // pro:this.state.pro,
   // total:this.state.total
   // })
   // }
//    else if(this.state.projects[i]==this.state.display.Saturday[0].project4){
    // this.state.pro[i].week.total = parseInt(this.state.display.Saturday[0].data4) + this.state.pro[i].week.total
   // this.state.total.saturday = parseInt(this.state.display.Saturday[0].data2)
   // this.setState({
   // pro:this.state.pro,
   // total:this.state.total
   // })
   // }
// else if(this.state.projects[i]!=this.state.display.Saturday[0].project2 && this.state.projects[i]!=this.state.display.Saturday[0].project1 && this.state.projects[i]!=this.state.display.Saturday[0].project3 && this.state.projects[i]!=this.state.display.Saturday[0].project4){
// this.state.pro[i].week.Saturday = 0
// this.state.total.saturday = this.state.display.Saturday[0].total
// this.setState({
// pro:this.state.pro,
// total:this.state.total
// })
// }

}

})
 // console.log(this.state.pro)
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
 <Button className="b1" style={{marginLeft:"900px"}}>LOGOUT</Button></Link>
 <Link to={{
 pathname:'/add_admin',
 state:{
 
 value1:this.state.value1
 }
 }}>
 <Button className="b2" style={{marginLeft:"10px"}}>ADD ADMIN</Button></Link>
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
 <li><a href="/summary">Summary</a></li>
 <li></li>
 </ul>
 </td> 
 <div padding="5em" margin="70em">
 <Grid container padding="4em" style={{margin:"1em"}}>
 <Grid container justify="left" style={{margin:"3em"}}>
 {/* <Grid container justify="left">
 <TextField
 id="projectName"
 select
 placeholder="Select"
 value={this.state.projectName}
 onChange={this.projects.bind(this)}
 style={{marginLeft:50, width:175}}
 >
 {this.state.projects.map(option => (
 <MenuItem key={option} value={option}>
 {option}
 </MenuItem>
 ))}
 </TextField>
 </Grid> */}
 <Grid container><TextField id="empname"
 label="Enter Name"
 value={this.state.empname}
 onChange={this.empname.bind(this)}
 style={{marginLeft:50, width:175}}
 >
 ))}
 </TextField>
 <Button style={{display:this.state.display1}} onClick={this.getemp.bind(this)}>Submit</Button>
 <Grid container>
 <TextField
 select
 label="Choose employee"
 value={this.state.employee}
 onChange={this.employee.bind(this)}
 style={{marginLeft:50, width:175}}
 display={this.state.display2}
 >
 {this.state.empdet.map(option => (
 <MenuItem key={option.name} value={option}>
 {option.name+" ID:"+option.id}
 </MenuItem>
 ))}
 </TextField>
 </Grid>
 
 </Grid>
 <Grid container><TextField
 id="month"
 select
 label="Enter Month"
 value={this.state.month}
 onChange={this.month.bind(this)}
 style={{marginLeft:50, width:175}}
 >
 {this.state.months.map(option => (
 <MenuItem key={option.name} value={option}>
 {option.name}
 </MenuItem>
 ))}
 </TextField>
 <TextField
 id="week"
 select
 label="Enter Week"
 value={this.state.week}
 onChange={this.week.bind(this)}
 style={{marginLeft:50, width:175}}
 >
 {this.state.weeks.map(option => (
 <MenuItem key={option} value={option}>
 {option}
 </MenuItem>
 ))}
 </TextField>
 <Button onClick={this.submit.bind(this)}>submit</Button>
 </Grid>
 </Grid>
 </Grid>
 <Grid container style={{marginTop:"2em"}} justify="center">
 <Grid container justify="center" textAlign='center' xs={3}>
Project
 </Grid>
 <Grid justify="center" textAlign='center' container xs={1}>
Monday 
 </Grid>
 <Grid justify="center" textAlign='center' container xs={1}>
 Tuesday
 </Grid>
 <Grid justify="center" textAlign='center' container xs={1}>
 Wednesday
 </Grid>
 <Grid justify="center" textAlign='center' container xs={1}>
 Thursday
 </Grid>
 <Grid justify="center" textAlign='center' container xs={1}>
 Friday
 </Grid>
 <Grid justify="center" textAlign='center' container xs={1}>
 Saturday 
 </Grid>
 </Grid>
 
{this.state.pro.map(option => (
 <Grid container style={{marginTop:"1.4% "}} justify="center">
 <Grid container justify="center" textAlign='center' style={{border:"1px solid black", textAlign:'center'}} xs={3}>
 {option.ProjectName}
 </Grid>
 <Grid container justify="center" textAlign='center' style={{textAlign:'center',border:"1px solid black"}} xs={1}>
 {option.week.Monday} 
 </Grid>
 <Grid container justify="center" textAlign='center' style={{textAlign:'center',border:"1px solid black"}} xs={1}>
 {option.week.Tuesday}
 </Grid>
 <Grid container justify="center" textAlign='center' style={{textAlign:'center',border:"1px solid black"}} xs={1}>
 {option.week.Wednesday}
 </Grid>
 <Grid container justify="center" textAlign='center' style={{textAlign:'center', border:"1px solid black"}} xs={1}>
 {option.week.Thursday}
 </Grid>
 <Grid container justify="center" textAlign='center' style={{textAlign:'center',border:"1px solid black"}} xs={1}>
 {option.week.Friday}
 </Grid>
 <Grid container justify="center" textAlign='center' style={{textAlign:'center',border:"1px solid black"}} xs={1}>
 {option.week.Saturday}
 </Grid>
 
 </Grid>
 ))}
 <Grid container padding="4em" style={{marginLeft:"12.45%", marginTop:'0.5%'}}> 
 <Grid container textAlign= 'center'style= {{textAlign: 'center'}} justify="center"e={{textAlign:'center', justify:'center'}} xs={3}>
 
 </Grid> 
 <Grid container textAlign= 'center'style= {{textAlign: 'center',border:"1px solid red"}} justify="center" xs={1}>
 {this.state.total.monday} 
 </Grid>
 <Grid container textAlign= 'center'style= {{textAlign: 'center',border:"1px solid red"}} justify="center" xs={1}>
 {this.state.total.tuesday} 
 </Grid>
 <Grid container textAlign= 'center'style= {{textAlign: 'center',border:"1px solid red"}} justify="center" xs={1}>
 {this.state.total.wednesday} 
 </Grid>
 <Grid container textAlign= 'center'style= {{textAlign: 'center', border:"1px solid red"}} justify="center" xs={1}>
 {this.state.total.thursday} 
 </Grid>
 <Grid container textAlign= 'center'style= {{textAlign: 'center', border:"1px solid red"}} justify="center" xs={1}>
 {this.state.total.friday} 
 </Grid>
 <Grid container textAlign= 'center'style= {{textAlign: 'center', border:"1px solid red"}} justify="center" xs={1}>
 {this.state.total.saturday} 
 </Grid>
 <Grid container textAlign= 'center'style= {{textAlign: 'center'}} justify="center" xs={1}>
 
 </Grid> 
 
 </Grid>

 </div>
 </tr>
 </table>
 </div>
 ); 
}
}