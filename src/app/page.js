"use client";
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import ChartOverview from "@/app/layouts/chart_overview";
import {useEffect, useState} from "react";
import {GetData} from "@/app/functions/get_data";
import CustomAppBar from "@/app/layouts/custom_app_bar";


export default function Home() {
    const [cpuState, setCPUState] = useState(null);
    const [ramState, setRAMState] = useState(null);
    const [diskState, setDISKState] = useState(null);
    const [timestampState, setTimestampState] = useState(null);


    useEffect(() => {

        GetData().then(data => {

            setCPUState(data.cpuData);

            setTimestampState(data.timeStamp);

            setRAMState(data.ramData);

            setDISKState(data.diskData);

        }).catch(err => {
            console.log("error is : ", err);
        })

    }, [timestampState]);



  return (
      <main>
        <Paper sx={{ flexGrow: 1, height:"100%" , background:"transparent" }} elevation={0} >
            <CustomAppBar/>
              <Box>
                  <ChartOverview cpuState={cpuState} ramState={ramState} diskState={diskState}/>
              </Box>

        </Paper>
      </main>
  );
}
