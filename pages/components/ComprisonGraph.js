import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function ComparisonGraph(percentile) {

  const data = {
    labels: [0, 25, 50, 75, 100],
    datasets: [
      {
        label: "Percentile Distribution",
        data: [0, 55, 75, 10, 50, 80, 60, 30, 20, 10, 5], // Replace this with actual data points
        fill: false,
        borderColor: "#6366F1", // Tailwind Indigo-500 color
        tension: 0.4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#6366F1",
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on the x-axis
        },
        title: {
          display: true,
          text: 'Percentile',
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines on the y-axis
        },
        title: {
          display: true,
          text: 'Engineers',
        },
      },
    },
  };

  return (
    <div className="bg-white border rounded-lg p-2 w-[890px]">
      <h2 className="text-lg font-semibold">Comparison Graph</h2>
      <div className="grid grid-cols-2 ">
        <div className="text-gray-600 mb-4">
          <strong>You scored {`${percentile.percentile}%`} percentile</strong> which is lower than the
          average percentile of 72% of all engineers who took this assessment.
        </div>
        <div className="justify-self-center rounded-3xl w-10 h-10">
          <Image
            src="/chart.png" // Replace with the path to the profile picture
            alt="Trophy"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="relative h-64 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
