import { Typography,Box,makeStyles,CircularProgress ,Grid } from "@material-ui/core";
import Card from './Card'
//makestyle for css part of material ui
//makeStyle ek object use krta h jisme css ke object daal sakte h
//yaha in functrional component use makeStyle for css
const useStyle = makeStyles({
    component:{
        margin:'50px 0',//top bootom se margin ,left-r se
        flexDirection:'column',
        alignItems:'center',
        display:'flex'
    },
    container:{
        color:'#BACA78',
        marginBottom: 40,

    }
})

//ptag deta h typography
const Cards =({data:{confirmed,recovered,deaths,lastUpdate}}) =>{
    const classes = useStyle();
    if(!confirmed){
        return <CircularProgress />
    }
    return (
        <Box className ={classes.component}>
        <Typography className ={classes.container} variant='h4' gutterBottom>Coronavirus cases globally</Typography>
        <Grid container spacing ={3} justify="center">

        <Card
            cardTitle="Infected"//confrmed me value nkalni h
            value={confirmed.value}
            desc="Number of Infected cases"
            lastUpdate={lastUpdate}

        />
        <Card
            
            cardTitle="Recovered"
            value={recovered.value}
            
            desc="Number of recovered cases"
            
            lastUpdate={lastUpdate}
        />
        <Card
            
            cardTitle="Deaths"
            value={deaths.value}
            
            desc="Number of deaths caused cases"
            
            lastUpdate={lastUpdate}//yeh sabhi props h inside vale 
            // teeno ka data diferent so data yahi pass krte h taki card me jake direct use ho sake
       
        />
         </Grid>       
        </Box>
    )
}

export default Cards;