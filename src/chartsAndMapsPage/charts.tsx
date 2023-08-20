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
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import zoomPlugin from 'chartjs-plugin-zoom';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin,
);

const LineChart = () => {
    const covidCasesQuery = useQuery({
        queryKey: ['covidCases'],
        queryFn: async () => {
            const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
            return response.data;
        },
    })

    if (covidCasesQuery.isLoading) {
        return (<div className="border-16 border-solid border-lightGray border-t-16 border-blue-500 rounded-full w-120 h-120 animate-spin"></div>);
    }
    if (covidCasesQuery.isError) return (<h1>Error loading data!!!</h1>)

    const datesfromCaseData = Object.keys(covidCasesQuery.data.cases);
    const casesData = Object.values(covidCasesQuery.data.cases);
    const deathData = Object.values(covidCasesQuery.data.deaths);
    const recoveredData = Object.values(covidCasesQuery.data.recovered);
    const data = {
        labels: datesfromCaseData,
        datasets: [
            {
                id: 1,
                label: 'Cases',
                data: casesData, // Using case values
                borderColor: 'blue',
                backgroundColor: 'blue',
                fill: false,
                tension: 0.1,
                borderWidth: 1
            },
            {
                id: 2,
                label: 'Deaths',
                data: deathData, // Using death values
                borderColor: 'red',
                backgroundColor: 'red',
                fill: false,
                tension: 0.1,
                borderWidth: 1
            },
            {
                id: 3,
                label: 'Recovered',
                data: recoveredData, // Using recovered values
                borderColor: 'green',
                backgroundColor: 'green',
                fill: false,
                tension: 0.1,
                borderWidth: 1
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                },
                title: {
                    display: true,
                    text: 'Date',
                },
                grid: {
                    display: false // this will hide grid lines on the x-axis
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
                grid: {
                    display: false // this will hide grid lines on the x-axis
                }
            },
        },
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Covid Cases Line Chart',
            },
            zoom: {
                pan: {
                    enabled: true,
                },
                wheel: {
                    enabled: true,
                    mode:'x',
                },
                mode: 'xy',
            },

        },
        element: {
            line: {
                borderWidth: 1, // Adjust line thickness
            },
        }
    };


    return (
        <div style={{ overflow: "auto" }}>
            <Line datasetIdKey='id' data={data} options={options} />
        </div>
    );
};

export default LineChart;
