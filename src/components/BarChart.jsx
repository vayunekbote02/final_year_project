import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = ({ expression }) => {
  const labels = Object.keys(expression);
  let percentages = Object.values(expression).map((value) =>
    (value * 100).toFixed(2)
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Expression Percentage",
        data: percentages,
        backgroundColor: "rgba(58, 116, 206, 0.5)",
        borderColor: "rgba(58, 116, 206, 1)",
        color: "rgba(255,255,255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
  };

  return (
    <div className="w-full h-full bg-yellow-600 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
      <h2 className="font-bold text-center text-white font-quicksand">
        Realtime expression prediction chart
      </h2>
      <Bar className="w-full " data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
