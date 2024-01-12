import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
    let labels = [];
    let percentages = [];
    let chartData = {};
    let chartOptions = {};

    const sampleData = {
        neutral: 0.4,
        happy: 0.2,
        sad: 0.1,
        angry: 0.05,
        fearful: 0.1,
        disgusted: 0.08,
        surprised: 0.07,
    };

    labels = Object.keys(sampleData);
    percentages = Object.values(sampleData).map(value => (value * 100).toFixed(2));
    percentages = percentages.map(Number);

    chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Expression Percentage',
                data: percentages,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return (
        <div>
            <h2>Expression Percentage Chart</h2>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
}

export default Chart;
