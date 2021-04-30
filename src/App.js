// import {Component} from 'react';
// import {Box,Typography,withStyles} from '@material-ui/core'
// import logo from './images/cotracker.jpg';
// import Cards from './components/Cards';
// import { fetchData } from './service/api';
// import Countries from './components/Countries';
// import Chart from './components/Chart';

// //cs  dena h to class component me use withStyle
// const style = {
//   container:{
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center',
//     flexDirection:'column',
//   },
//     header:{
//         background:'#f5f5f5',
//         width:400,
//         textAlign:'center',
//         fontSize:20,//or '20px'
//         padding:10,
//         color:'#777'

//     },
//     lastUpdated:{
//       color:'#777',
//       fontSize:12
//     }

//   }

// //to import this style in Box use withstyle ,import

// //Box as div work
// class App extends Component{
//   state ={
//     data:{},
//     country:''
//   }
//   //display global data
//   async componentDidMount(){
//     const fetchedData=await fetchData();//called written in api.js

//     //data ko bahar bhi use krna h so state banani padegi data update karne ke liye
//     //setstate to update the data
//     this.setState({data:fetchedData})
//     console.log(fetchedData);
//   }


//   handleCountrychange=async(country)=>{
//       const fetchedData=await fetchData(country);//called written in api.js
  
//       this.setState({data:fetchedData, country: country})
//       console.log(fetchedData);
//     }
  

  
//   render(){
//     const {data}= this.state;
//     return (
//       <Box className={this.props.classes.container}>
//       <Box className={this.props.classes.header}>COVID-19 PROCEDURE CASE CALCI</Box>
//       <Typography className={this.props.classes.lastUpdated}>Last Updated:{data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
//       <img  style={{width:350}}src={logo} alt='cotracker'/>
      
//       <Cards data={data}/>
//       <Countries handleCountrychange = {this.handleCountrychange}/>
//       {/* //countries ki api bhi fectch */}
//       <Chart data={data}/>
//       </Box>
//       //pass data as a prop to Cards
//       //data.lastUpdate && boolean return karega means date aaegi tabhi new date ke pass jaega
    
//     )
//   }
// }
// export default withStyles(style)( App);






import  { Component } from 'react'
import  { Box, Typography, withStyles } from '@material-ui/core';
import logo from './images/cotracker.jpg';
import Cards from './components/Cards';
import Countries from './components/Countries';
import Chart from './components/Chart';
import { fetchData } from './service/api';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    background: '#F5F5F5',
    width: 400,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#777'
  },
  lastUpdated: {
    color: '#777',
    fontSize: 12
  }
}

class App extends Component{

  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
    console.log(fetchedData);
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
    console.log(fetchedData);
  }


  render(){
    const { data } = this.state;
    return (
      <Box className={this.props.classes.container}> 
        <Box className={this.props.classes.header}>COVID-19 CORONAVIRUS PANDEMIC</Box>
        <Typography className={this.props.classes.lastUpdated}>Last Updated: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
        <img style={{width:350}} src={logo} alt="covid"/>
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} />
      </Box>
    )
  }
}

export default withStyles(style)(App);
