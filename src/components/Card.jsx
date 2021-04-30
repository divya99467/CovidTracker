//teeno cards ke liye
import{Grid,CardContent, Typography,Box,Card,makeStyles} from '@material-ui/core';
import CountUp from 'react-countup';
//countu bahut props leta h like starting point ,time to calculate

const useStyle = makeStyles({
    header:{
        background:'#F5F5F5',
        padding:10
    }
})


const CardComponent = ({cardTitle,value,desc,lastUpdate}) =>{//destructuring ni karo to use this ,this.props.value
    const classes=useStyle();
    return (
        <Grid component={Card} style={{margin:20,borderBottom:'10px solid yellow'}}>
        <Box className={classes.header}>
            <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
        </Box>
            <CardContent>
               <Typography variant="h5">
                <CountUp start={0} end={value} duration={3} separator=","/>
                   {/* use countup */}

               </Typography>
               <Typography color="textSecondary">{desc}</Typography>
               <Typography>{new Date(lastUpdate).toDateString()}</Typography>
               
            </CardContent>
        </Grid>    
    );
}
export default CardComponent;
//Card me card ,card content,card action hota h