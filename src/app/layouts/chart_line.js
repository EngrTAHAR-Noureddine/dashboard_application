import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Box from "@mui/material/Box";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    // backgroundColor: "white",
    style:{
      background:"blue"
    },
    scales:{
        x:{
          display: false,
        },
        y:{
            display: true,
            grid:{
                borderColor:"rgba(255, 255, 255, 0.1)",
                color:"rgba(255, 255, 255, 0.1)"
            }
    }
    },
    plugins: {
        legend: {
            position: 'top',
        },

        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};


export default function ChartLine(props) {


    console.log("props : ", props)
    return (
        <Box >
            <Line options={options} data={props.data} redraw={false} />
        </Box>
    );
}


