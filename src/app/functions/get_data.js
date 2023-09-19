import axios from "axios";

export const GetData = async () =>{
    try {
        // const getAxios = axios.defaults;
        axios.defaults.baseURL = 'http://localhost:80';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const res = await axios.get('/api/resource/how?much=less');
        console.log("res : ", res.data);
        const cpuPercentages = res.data.map(item => item.CPU_PERCENTAGE).reverse();
        const ramPercentages = res.data.map(item => item.RAM_PERCENTAGE).reverse();
        const diskPercentages = res.data.map(item => item.DISK_PERCENTAGE).reverse();
        const isAnomalies = res.data.map(item => item.IS_ANOMALY).reverse();
        const timeStamp = res.data.map(item => item.TIMESTAMP).reverse();
        const pointCPUBg = []
        const pointRAMBg = []
        const pointDiskBg  =  [];
        const pointRadius=[];


        for (let i = 0; i < isAnomalies.length; i++) {
            if (isAnomalies[i] === 1) {
                pointCPUBg.push("red");
                pointRAMBg.push("red");
                pointDiskBg.push("red");
                pointRadius.push(5)
            } else {
                pointCPUBg.push("blue");
                pointRAMBg.push("green");
                pointDiskBg.push("orange");
                pointRadius.push(2)
            }
        }

        const cpuData = {
            labels: timeStamp,
            datasets: [
                {
                    label: 'CPU Utilisation',
                    data: cpuPercentages,
                    borderColor: 'blue',
                    backgroundColor: pointCPUBg,
                    pointRadius: pointRadius
                }
            ],
        }

        const ramData = {
            labels: timeStamp,
            datasets: [
                {
                    label: 'RAM Utilisation',
                    data: ramPercentages,
                    borderColor: 'green',
                    backgroundColor: pointRAMBg,
                    pointRadius: pointRadius
                }
            ],
        }

        const diskData = {
            labels: timeStamp,
            datasets: [
                {
                    label: 'Disk Utilisation',
                    data: diskPercentages,
                    borderColor: 'orange',
                    backgroundColor: pointDiskBg,
                    pointRadius: pointRadius
                }
            ],
        }

        return {
            cpuData,
            ramData,
            diskData,
            timeStamp,
            isAnomalies
        }
    } catch (e) {
        console.log("error is : ", e);
        throw "Error"
    }
}