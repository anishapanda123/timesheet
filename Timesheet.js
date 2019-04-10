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

export default class Timesheet extends Component {
 constructor(props){
 super(props);
 this.state={
 week:'',
 month:'',
 weeks:["week1","week2","week3","week4","week5"],
 months:["january","february","march","april","may","june","july","august","september","october","november","december"],
 projects:[],
 project1:{
 id:1,
 name:'',
 monday:0,
 tuesday:0,
 wednesday:0,
 thursday:0,
 friday:0,
 saturday:0 
 },
 project2:{
 id:2,
 name:'',
 monday:0,
 tuesday:0,
 wednesday:0,
 thursday:0,
 friday:0,
 saturday:0 
 },
 project3:{
 id:3,
 name:'',
 monday:0,
 tuesday:0,
 wednesday:0,
 thursday:0,
 friday:0,
 saturday:0 
 },
 project4:{
 id:4,
 name:'',
 monday:0,
 tuesday:0,
 wednesday:0,
 thursday:0,
 friday:0,
 saturday:0 
 },
 total:{
 monday:0,
 tuesday:0,
 wednesday:0,
 thursday:0,
 friday:0,
 saturday:0
 },
 value2:this.props.location.state.value2,
 value1:this.props.location.state.value1,
 }
 
 }
componentDidMount(){ 
 fetch('http://localhost:8000/view_projects',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 projects:this.state.employees
 }),
 
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 
 
 console.log(responseJson);
 this.setState({
 projects:responseJson.employees
 
 })
 console.log(this.state.projects)
 
 })
 
 .catch((error) =>{
 this.setState(error)
 })
 
 }
week(event){
 this.setState({
 week:event.target.value
 })
 console.log(this.state.projects)
}
month(event){
 this.setState({
 month:event.target.value
 })
 
}
project1(event){
 this.state.project1.name=event.target.value
 this.setState({
 project1:this.state.project1
 })
}
project2(event){
 this.state.project2.name=event.target.value
 this.setState({
 project2:this.state.project2
 })
}
project3(event){
 this.state.project3.name=event.target.value
 this.setState({
 project3:this.state.project3
 })
}
project4(event){
 this.state.project4.name=event.target.value
 this.setState({
 project4:this.state.project4
 })
}
monday(event,project){
if(event.id==1){
 this.state.project1.monday=parseInt(project.target.value)
 this.state.total.monday = this.state.project1.monday + this.state.project2.monday+this.state.project3.monday +this.state.project4.monday 
 this.setState({
 project1:this.state.project1,
 total:this.state.total
 })
}
else if(event.id==2){
 this.state.project2.monday=parseInt(project.target.value)
 this.state.total.monday = this.state.project1.monday + this.state.project2.monday +this.state.project3.monday +this.state.project4.monday 
 this.setState({
 project2:this.state.project2,
 total:this.state.total
 })
}
else if(event.id==3){
 this.state.project3.monday=parseInt(project.target.value)
 this.state.total.monday = this.state.project1.monday + this.state.project2.monday + this.state.project3.monday +this.state.project4.monday 
 this.setState({
 project3:this.state.project3,
 total:this.state.total
 })
}
else if(event.id==4){
 this.state.project4.monday=parseInt(project.target.value)
 this.state.total.monday = this.state.project1.monday + this.state.project2.monday + this.state.project3.monday +this.state.project4.monday 
 this.setState({
 project4:this.state.project4,
 total:this.state.total
 })
}

}
tuesday(event,project){
 if(event.id==1){
 this.state.project1.tuesday=parseInt(project.target.value)
 this.state.total.tuesday = this.state.project1.tuesday + this.state.project2.tuesday +this.state.project3.tuesday +this.state.project4.tuesday 
 this.setState({
 project1:this.state.project1,
 total:this.state.total
 })
 }
 else if(event.id==2){
 this.state.project2.tuesday=parseInt(project.target.value)
 this.state.total.tuesday = this.state.project1.tuesday + this.state.project2.tuesday +this.state.project3.tuesday +this.state.project4.tuesday 
 this.setState({
 project2:this.state.project2,
 total:this.state.total
 })
 }
 else if(event.id==3){
 this.state.project3.tuesday=parseInt(project.target.value)
 this.state.total.tuesday = this.state.project1.tuesday + this.state.project2.tuesday+this.state.project4.tuesday +this.state.project4.tuesday 
 this.setState({
 project3:this.state.project3,
 total:this.state.total
 })
 }
 else if(event.id==4){
 this.state.project4.tuesday=parseInt(project.target.value)
 this.state.total.tuesday = this.state.project1.tuesday + this.state.project2.tuesday +this.state.project3.tuesday +this.state.project4.tuesday 
 this.setState({
 project4:this.state.project4,
 total:this.state.total
 })
 }
 
}
wednesday(event,project){
 if(event.id==1){
 this.state.project1.wednesday=parseInt(project.target.value)
 this.state.total.wednesday = this.state.project1.wednesday + this.state.project2.wednesday +this.state.project3.wednesday+this.state.project4.wednesday
 this.setState({
 project1:this.state.project1,
 total:this.state.total
 })
 }
 else if(event.id==2){
 this.state.project2.wednesday=parseInt(project.target.value)
 this.state.total.wednesday = this.state.project1.wednesday + this.state.project2.wednesday+this.state.project3.wednesday+this.state.project4.wednesday 
 this.setState({
 project2:this.state.project2,
 total:this.state.total
 })
 }
 else if(event.id==3){
 this.state.project3.wednesday=parseInt(project.target.value)
 this.state.total.wednesday = this.state.project1.wednesday + this.state.project2.wednesday+this.state.project3.wednesday+this.state.project4.wednesday 
 this.setState({
 project3:this.state.project3,
 total:this.state.total
 })
 }
 else if(event.id==4){
 this.state.project4.wednesday=parseInt(project.target.value)
 this.state.total.wednesday = this.state.project1.wednesday + this.state.project2.wednesday +this.state.project3.wednesday+this.state.project4.wednesday 
 this.setState({
 project4:this.state.project4,
 total:this.state.total
 })
 }
}
thursday(event,project){
 if(event.id==1){
 this.state.project1.thursday=parseInt(project.target.value)
 this.state.total.thursday = this.state.project1.thursday + this.state.project2.thursday +this.state.project3.thursday +this.state.project4.thursday 
 this.setState({
 project1:this.state.project1,
 total:this.state.total
 })
 }
 else if(event.id==2){
 this.state.project2.thursday=parseInt(project.target.value)
 this.state.total.thursday = this.state.project1.thursday + this.state.project2.thursday +this.state.project3.thursday +this.state.project4.thursday 
 this.setState({
 project2:this.state.project2,
 total:this.state.total
 })
 }
 else if(event.id==3){
 this.state.project3.thursday=parseInt(project.target.value)
 this.state.total.thursday = this.state.project1.thursday + this.state.project2.thursday +this.state.project3.thursday +this.state.project4.thursday 
 this.setState({
 project3:this.state.project3,
 total:this.state.total
 })
 }
 else if(event.id==4){
 this.state.project4.thursday=parseInt(project.target.value)
 this.state.total.thursday = this.state.project1.thursday + this.state.project2.thursday +this.state.project3.thursday +this.state.project4.thursday 
 this.setState({
 project4:this.state.project4,
 total:this.state.total
 })
 }
 
}
friday(event,project){
 if(event.id==1){
 this.state.project1.friday=parseInt(project.target.value)
 this.state.total.friday = this.state.project1.friday + this.state.project2.friday + this.state.project3.friday + this.state.project4.friday 
 this.setState({
 project1:this.state.project1,
 total:this.state.total
 })
 }
 else if(event.id==2){
 this.state.project2.friday=parseInt(project.target.value)
 this.state.total.friday = this.state.project1.friday + this.state.project2.friday+ this.state.project3.friday + this.state.project4.friday 
 this.setState({
 project2:this.state.project2,
 total:this.state.total
 })
 }
 else if(event.id==3){
 this.state.project3.friday=parseInt(project.target.value)
 this.state.total.friday = this.state.project1.friday + this.state.project2.friday+ this.state.project3.friday + this.state.project4.friday 
 this.setState({
 project3:this.state.project3,
 total:this.state.total
 })
 }
 else if(event.id==4){
 this.state.project4.friday=parseInt(project.target.value)
 this.state.total.friday = this.state.project1.friday + this.state.project2.friday + this.state.project3.friday + this.state.project4.friday 
 this.setState({
 project4:this.state.project4,
 total:this.state.total
 })
 }
 
}
saturday(event,project){
 if(event.id==1){
 this.state.project1.saturday=parseInt(project.target.value)
 this.state.total.saturday = this.state.project1.saturday + this.state.project2.saturday 
 this.setState({
 project1:this.state.project1,
 total:this.state.total
 })
 }
 else if(event.id==2){
 this.state.project2.saturday=parseInt(project.target.value)
 this.state.total.saturday = this.state.project1.saturday + this.state.project2.saturday 
 this.setState({
 project2:this.state.project2,
 total:this.state.total
 })
 }
 else if(event.id==3){
 this.state.project3.saturday=parseInt(project.target.value)
 this.state.total.saturday = this.state.project1.saturday + this.state.project2.saturday + this.state.project3.saturday + this.state.project4.saturday 
 this.setState({
 project3:this.state.project3,
 total:this.state.total
 })
 }
 else if(event.id==4){
 this.state.project4.saturday=parseInt(project.target.value)
 this.state.total.saturday = this.state.project1.saturday + this.state.project2.saturday + this.state.project3.saturday + this.state.project4.saturday 
 this.setState({
 project4:this.state.project4,
 total:this.state.total
 })
 }
 
}
mondaysave(){
 fetch('http://localhost:8000/monday',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 month:this.state.month,
 week:this.state.week,
 project1:this.state.project1.name,
 project2:this.state.project2.name,
 project3:this.state.project3.name,
 project4:this.state.project4.name,
 textbox1:this.state.project1.monday,
 textbox2:this.state.project2.monday,
 textbox3:this.state.project3.monday,
 textbox4:this.state.project4.monday,
 total:this.state.total.monday,
 value2:this.state.value2,
 }),
 
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 

 console.log(responseJson);
 this.setState({
 
 })
 
 
 
})
 
 .catch((error) =>{
 console.error(error);
 }); console.log(this.state.usrname);
 
 
}
tuesdaysave(){
 fetch('http://localhost:8000/tuesday',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 month:this.state.month,
 week:this.state.week,
 project1:this.state.project1.name,
 project2:this.state.project2.name,
 project3:this.state.project3.name,
 project4:this.state.project4.name,
 textbox1:this.state.project1.tuesday,
 textbox2:this.state.project2.tuesday,
 textbox3:this.state.project3.tuesday,
 textbox4:this.state.project4.tuesday,
 total:this.state.total.tuesday,
 value2:this.state.value2,
 }),
 
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 

 console.log(responseJson);
 this.setState({
 
 })
 
 
 
})
 
 .catch((error) =>{
 console.error(error);
 }); console.log(this.state.usrname);
 
 
}
wednesdaysave(){
 fetch('http://localhost:8000/wednesday',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 month:this.state.month,
 week:this.state.week,
 project1:this.state.project1.name,
 project2:this.state.project2.name,
 project3:this.state.project3.name,
 project4:this.state.project4.name,
 textbox1:this.state.project1.wednesday,
 textbox2:this.state.project2.wednesday,
 textbox3:this.state.project3.wednesday,
 textbox4:this.state.project4.wednesday,
 total:this.state.total.wednesday,
 value2:this.state.value2,
 }),
 
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 

 console.log(responseJson);
 this.setState({
 
 })
 
 
 
})
 
 .catch((error) =>{
 console.error(error);
 }); 
 
 
}
thursdaysave(){
 fetch('http://localhost:8000/thursday',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 month:this.state.month,
 week:this.state.week,
 project1:this.state.project1.name,
 project2:this.state.project2.name,
 project3:this.state.project3.name,
 project4:this.state.project4.name,
 textbox1:this.state.project1.thursday,
 textbox2:this.state.project2.thursday,
 textbox3:this.state.project3.thursday,
 textbox4:this.state.project4.thursday,
 total:this.state.total.thursday,
 value2:this.state.value2,
 }),
 
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 

 console.log(responseJson);
 this.setState({
 
 })
 
 
 
})
 
 .catch((error) =>{
 console.error(error);
 }); 
 
 
}
fridaysave(){
 fetch('http://localhost:8000/friday',
 {
 method:'POST',
 headers:{
 Accept:'application/json',
 'Content-Type':'application/json'
 },
 
 body:JSON.stringify({
 month:this.state.month,
 week:this.state.week,
 project1:this.state.project1.name,
 project2:this.state.project2.name,
 project3:this.state.project3.name,
 project4:this.state.project4.name,
 textbox1:this.state.project1.friday,
 textbox2:this.state.project2.friday,
 textbox3:this.state.project3.friday,
 textbox4:this.state.project4.friday,
 total:this.state.total.friday,
 value2:this.state.value2,
 }),
 
 })
 
 .then((response) => response.json())
 .then((responseJson) => {
 

 console.log(responseJson);
 this.setState({
 
 })
 
 
 
})
 
 .catch((error) =>{
 console.error(error);
 }); console.log(this.state.usrname);
 
 
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
 <Button className="b1" color="inherit" style={{marginLeft:"1000px"}}>LOGOUT</Button></Link>
 
 </Toolbar>
 </AppBar>
 </tr>
 <tr>
 <td style={{height:"92vh", width:"25vh"}}>
 
 <ul style={{backgroundColor:"#4d4d4d", height:"100%"}}>
 <li style={{marginTop:20}}><Link to={{
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
<div class="container" style={{padding:30,fontSize:14, paddingLeft:90,height:400, margin:80, backgroundColor:"rgba(0,0,0,0.1)",borderRadius:6}} >
<Grid container justify="center"></Grid>
 <Grid container justify="center" spacing={24}>
 <Grid item xs={12}>
 <TextField
 id="month"
 label="month"
 select
 placeholder=""
 value={this.state.month}
 onChange={this.month.bind(this)}
 style={{marginLeft:50, width:175}}
 >
 
 {this.state.months.map(option => (
 <MenuItem key={option} value={option}>
 {option}
 </MenuItem>
 ))}
 </TextField>
 <TextField
 id="week"
 label="week"
 select
 placeholder="Select"
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
 
 </Grid>
 </Grid>
<hr></hr>
 <Grid container spacing={12}>
 <Grid container justify="center" textAlign="center" xs={3}>
 Project
 </Grid>
 <Grid container justify="center" textAlign="center" xs={1}>
 Mon
 </Grid>
 <Grid container justify="center" textAlign="center" xs={1}>
 Tues
 </Grid>
 <Grid container justify="center"textAlign="center" xs={1}>
 Wed
 </Grid>
 <Grid container justify="center" textAlign="center" xs={1}>
 Thurs
 </Grid>
 <Grid container justify="center" textAlign="center" xs={1}>
 Fri
 </Grid>
 <Grid container justify="center" textAlign="center" xs={1}>
 Sat
 </Grid>
 <Grid container justify="center" textAlign="center" xs={2}>
 Total
 </Grid>
 
 </Grid>
 
<hr></hr>
 <Grid container spacing={12}>
 <Grid container textAlign= 'center' justify="center" xs={3} >
 <TextField
 id="week"
 select
 label="Select"
 value={this.state.project1.name}
 onChange={this.project1.bind(this)}
 style={{width:200}} >
 {this.state.projects.map(option => (
 <MenuItem key={option.ProjectName} value={option.ProjectName}>
 {option.ProjectName}
 </MenuItem>
 ))}
 </TextField>
 
 </Grid>
 <Grid container justify="center" xs={1} >
 <input type="number" value={this.state.project1.monday} style={{marginTop:23,width:100,textAlign: 'center',height:20}}onChange={this.monday.bind(this,this.state.project1)}></input>
 </Grid>
 <Grid container textAlign='center' justify="center" xs={1} >
 <input type="number" value={this.state.project1.tuesday} style={{marginTop:23, width:100,textAlign:'center',height:20}}onChange={this.tuesday.bind(this,this.state.project1)}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project1.wednesday} style={{marginTop:23,width:100,textAlign: 'center',height:20}} onChange={this.wednesday.bind(this,this.state.project1)}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project1.thursday} style={{marginTop:23,width:100,textAlign: 'center',height:20}} onChange={this.thursday.bind(this,this.state.project1)}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project1.friday} style={{marginTop:23,width:100,textAlign: 'center',height:20}}onChange={this.friday.bind(this,this.state.project1)}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project1.saturday} style={{marginTop:23,width:100,textAlign: 'center',height:20}}onChange={this.saturday.bind(this,this.state.project1)}></input>
 </Grid>
 <Grid container justify="center" xs={2} style={{marginTop:23,textAlign: 'center'}}>
 {this.state.project1.monday+this.state.project1.tuesday+this.state.project1.wednesday+this.state.project1.thursday+this.state.project1.friday+this.state.project1.saturday}
 </Grid>
 </Grid>
 <Grid container spacing={12}>
 <Grid container textAlign= 'center' justify="center" xs={3} >
 <TextField
 id="week"
 select
 label="Select"
 value={this.state.project2.name}
 onChange={this.project2.bind(this)}
 style={{width:200}}
 >
 {this.state.projects.map(option => (
 <MenuItem key={option.ProjectName} value={option.ProjectName}>
 {option.ProjectName}
 </MenuItem>
 ))}
 </TextField>
 
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project2.monday} onChange={this.monday.bind(this,this.state.project2)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number"value={this.state.project2.tuesday} onChange={this.tuesday.bind(this,this.state.project2)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number"value={this.state.project2.wednesday} onChange={this.wednesday.bind(this,this.state.project2)}style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project2.thursday} onChange={this.thursday.bind(this,this.state.project2)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project2.friday} onChange={this.friday.bind(this,this.state.project2)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project2.saturday}onChange={this.saturday.bind(this,this.state.project2)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={2} style={{marginTop:23,textAlign: 'center'}}>
 {this.state.project2.monday+this.state.project2.tuesday+this.state.project2.wednesday+this.state.project2.thursday+this.state.project2.friday+this.state.project2.saturday}
 </Grid>
 </Grid>
 <Grid container spacing={12}>
 <Grid container textAlign= 'center' justify="center" xs={3} >
 <TextField
 id="week"
 select
 label="Select"
 value={this.state.project3.name}
 onChange={this.project3.bind(this)}
 style={{width:200}}
 >
 {this.state.projects.map(option => (
 <MenuItem key={option.ProjectName} value={option.ProjectName}>
 {option.ProjectName}
 </MenuItem>
 ))}
 </TextField>
 
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project3.monday} onChange={this.monday.bind(this,this.state.project3)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number"value={this.state.project3.tuesday} onChange={this.tuesday.bind(this,this.state.project3)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number"value={this.state.project3.wednesday} onChange={this.wednesday.bind(this,this.state.project3)}style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project3.thursday} onChange={this.thursday.bind(this,this.state.project3)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project3.friday} onChange={this.friday.bind(this,this.state.project3)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project3.saturday}onChange={this.saturday.bind(this,this.state.project3)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={2} style={{marginTop:23,textAlign: 'center'}}>
 {this.state.project3.monday+this.state.project3.tuesday+this.state.project3.wednesday+this.state.project3.thursday+this.state.project3.friday+this.state.project3.saturday}
 </Grid>
 </Grid>
 <Grid container spacing={12}>
 <Grid container textAlign= 'center' justify="center" xs={3} >
 <TextField
 id="week"
 select
 label="Select"
 value={this.state.project4.name}
 onChange={this.project4.bind(this)}
 style={{width:200}}
 >
 {this.state.projects.map(option => (
 <MenuItem key={option.ProjectName} value={option.ProjectName}>
 {option.ProjectName}
 </MenuItem>
 ))}
 </TextField>
 
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project4.monday} onChange={this.monday.bind(this,this.state.project4)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number"value={this.state.project4.tuesday} onChange={this.tuesday.bind(this,this.state.project4)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number"value={this.state.project4.wednesday} onChange={this.wednesday.bind(this,this.state.project4)}style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project4.thursday} onChange={this.thursday.bind(this,this.state.project4)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project4.friday} onChange={this.friday.bind(this,this.state.project4)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={1} >
 <input type="number" value={this.state.project4.saturday}onChange={this.saturday.bind(this,this.state.project4)} style={{textAlign: 'center',marginTop:23,width:100,height:20}}></input>
 </Grid>
 <Grid container textAlign= 'center' justify="center" xs={2} style={{marginTop:23,textAlign: 'center'}}>
 {this.state.project2.monday+this.state.project4.tuesday+this.state.project4.wednesday+this.state.project4.thursday+this.state.project4.friday+this.state.project4.saturday}
 </Grid>
 </Grid>
 <Grid container style={{marginTop:27,textAlign: 'center'}}spacing={12}>
 <Grid container textAlign= 'center' justify="center" xs={3} >
 Total
 </Grid>
 <Grid container textAlign= 'center' style= {{textAlign: 'center'}} justify="center" xs={1} >
 {this.state.total.monday}
 </Grid>
 <Grid container textAlign= 'center' style= {{textAlign: 'center'}} justify="center" xs={1} >
 {this.state.total.tuesday}
 </Grid>
 <Grid container textAlign= 'center' style= {{textAlign: 'center'}} justify="center" xs={1} >
 {this.state.total.wednesday}
 </Grid>
 <Grid container textAlign= 'center' style= {{textAlign: 'center'}} justify="center" xs={1} >
 {this.state.total.thursday}
 </Grid>
 <Grid container textAlign= 'center' style= {{textAlign: 'center'}} justify="center" xs={1} >
 {this.state.total.friday}
 </Grid>
 <Grid container textAlign= 'center'style= {{textAlign: 'center'}} justify="center" xs={1} >
 {this.state.total.saturday}
 </Grid>
 <Grid container textAlign= 'center'style= {{textAlign: 'center'}} justify="center" xs={2} >
 {this.state.project1.monday+this.state.project1.tuesday+this.state.project1.wednesday+this.state.project1.thursday+this.state.project1.friday+this.state.project1.saturday+
this.state.project2.monday+this.state.project2.tuesday+this.state.project2.wednesday+this.state.project2.thursday+this.state.project2.friday+this.state.project2.saturday+this.state.project3.monday+this.state.project3.tuesday+this.state.project3.wednesday+this.state.project3.thursday+this.state.project3.friday+this.state.project3.saturday+
this.state.project4.monday+this.state.project4.tuesday+this.state.project4.wednesday+this.state.project4.thursday+this.state.project4.friday+this.state.project4.saturday}
 </Grid> 
 
 
 <Grid containerjustify='center' xs={3}></Grid>
 
 <Grid container justify='center'xs={1}><Button style={{marginTop:10, fontSize:12}} onClick={this.mondaysave.bind(this)}>Monday</Button></Grid>
 <Grid container justify='center'xs={1}><Button style={{marginTop:10, fontSize:12}} onClick={this.tuesdaysave.bind(this)}>Tuesday</Button></Grid>
 <Grid container justify='center'xs={1}><Button style={{marginTop:10 , fontSize:12}} onClick={this.wednesdaysave.bind(this)}>Wednesday</Button></Grid>
 <Grid container justify='center'xs={1}><Button style={{marginTop:10, fontSize:12}} onClick={this.thursdaysave.bind(this)}>Thursday</Button></Grid>
 <Grid container justify='center'xs={1}><Button style={{marginTop:10, fontSize:12}} onClick={this.fridaysave.bind(this)}>Friday</Button></Grid>
 <Grid container justify='center'xs={1}></Grid>
 <Grid container justify='center'xs={2}><Button style={{marginTop:10, fontSize:12}} >Submit</Button></Grid>
 </Grid>
 </div>
 </td>
 </tr>
 </table>
 </div>
 );
}}