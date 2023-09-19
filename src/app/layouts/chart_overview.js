import {Grid } from "@mui/material";
import ChartLine from "@/app/layouts/chart_line";


function ChartOverview(props) {

    return (
        <Grid container
              direction={'row'}
              xs={12}
              p={4}
              spacing={{xs:1, md:10}}
              height={500}
              >
            <Grid item xs={12} lg={4}>
                {/*<div>*/}
                    { (props.cpuState === null)?<div></div> : <ChartLine  data={props.cpuState} /> }
                {/*</div>*/}
            </Grid>
            <Grid item xs={12} lg={4}>
                {/*<div>*/}
                    { (props.ramState === null)?<div></div> : <ChartLine  data={props.ramState} /> }
                {/*</div>*/}
            </Grid>
            <Grid item xs={12} lg={4}>
                {/*<div>*/}
                    { (props.diskState === null)?<div></div> : <ChartLine  data={props.diskState} /> }
                {/*</div>*/}
            </Grid>
        </Grid>
    )
}

export default ChartOverview;