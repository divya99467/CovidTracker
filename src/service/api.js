// //request method for calling apis got depricated
// //use fetch method or axios
// import axios from 'axios';


// const url="https://covid19.mathdro.id/api";
// // const urll="https://covid19.mathdro.id/api/countries";//no need to do as such use{}
// //function
// export const fetchData = async (country) => {
// //functional components we can use hooks here class component so can't use so react ke lifecycle methods 
// //return karani h value
// let  changedurl=url;
// if(country){
//     changedurl=`${url}/countries/${country}`;

// } 
// try{
//         const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changedurl);
// return {confirmed,recovered,deaths,lastUpdate};//destructured //getapi h so if put api then write put,post....
//     }catch(error){
//         return error;
//     }
// }


//   export const fetchCountries = async() =>{
//       try{
//            const {data:{countries}} = await axios.get(`${url}/countries`);//append the url template string bana rahe
//            //countries array of object h ,ek ek object uthaya and usme bhi sirf name lenge
//            //sirf name chahiye country ka so map karo
//            return countries.map(country => country.name);
//            //destr.
//       }catch(error){

//       }

//   }

import axios from 'axios';


const url = "https://covid19.mathdro.id/api";


export const fetchData = async (country) => {
    let changedUrl = url;
    if(country){
        changedUrl = `${url}/countries/${country}`;
    }
    try{
       const { data: { confirmed, recovered, deaths, lastUpdate } } =  await axios.get(changedUrl);
       return { confirmed, recovered, deaths, lastUpdate };
    }catch(error){
        return error;
    }
}

export const fetchCountries = async() => {
    try{
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map(country => country.name );
    }catch(error){
        return error;
    }
}
