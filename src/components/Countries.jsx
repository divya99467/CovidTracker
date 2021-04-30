// import { fetchCountries } from "../service/api";
// //import {fetchCountries} from "../service/api"
// import{useEffect, useState} from 'react';
// import { Typography,NativeSelect } from "@material-ui/core"


// const Countries = ({handleCountrychange}) =>{
//     //api call karna h hume
//     //array store padega jo ki map se aayega so make state
//     const [countries,setCountries]=useState([]);//array ki initial value li jo ki empty array h
//     useEffect(()=>{
//         //call ho yeh ek baar jb component mount ho
//         const fetchApi = async() =>{        
//          setCountries(await fetchCountries());}//setCountries apis se jo data return hoga vo Countries me jaega
//          //call bhi krna hoga 
//          fetchApi();
//          //async useeffect ke saath ni laga sakte bcoz  react ka hook h yeh so make another fun.
//     },[]//empty array pass kiya)
//     )
//     return(
//         <>
//         <Typography style={{marginBottom:20}} variant="h5" color="textSecondary">Reported Cases or deaths by country</Typography>
//         <NativeSelect onChange = {(e)=>handleCountrychange(e.target.value)}>
//             <option value="">United States</option>
//             {/* //countries variable se baki countries */}
//             {countries.map((country, i)=>{
//                 return(
//                 <option key={i} value={country}>{country}</option>)
//             })//value taki pata pade konsi country chuni
//             //ekm ek karke countries nikalenge
//             }
//             {/* //ab country change pe value change ho so use graph and cart    react-chartjs-2*/}
//         </NativeSelect>
//         </>
//     )
//     //dropdown ny native select


//     }


// export default Countries;



import { Typography, NativeSelect } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchCountries } from "../service/api";



const Countries = ({ handleCountryChange }) => {

    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchApi = async() => {
            setCountries(await fetchCountries());
        }
        fetchApi();
    }, [])

    return (
        <>
            <Typography style={{marginBottom: 20}} variant="h5" color="textSecondary">Reported Cases or Deaths by Country or Territory</Typography>
            <NativeSelect onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value = "">United States</option>
                { countries.map((country, i) => {
                    return (
                        <option key={i} value={country}>{country}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
}

export default Countries;
