import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const colors = ["#855CF8", "#E289F2", "#7879F1", "#B085FF"];

  const strategyMap: Record<string, string> = {
    "Stategy 1": colors[0],
    "Stategy 2": colors[1],
    "Stategy 3": colors[2],
    "Stategy 4": colors[3],
  };

  return (
    <div className="h-440 w-420 rounded-md bg-white text-black shadow-md">
      <div className="flex justify-between p-4">
        <h1 className="text-lg"> Lending Allocations </h1>
        <p className="text-var(--custom-usdc-color) text-lg"> $5000 USDC </p>
      </div>
      <div className="px-24 pt-13px ">
        <Pie
          data={{
            labels: ["Stategy1", "Stategy2", "Stategy3", "Stategy4"],
            datasets: [
              {
                label: "Stategy breakdown",
                data: [500, 125, 125, 250],
                backgroundColor: [...colors],
                borderColor: "transparent",
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            rotation: 180,
          }}
        />
      </div>
      <div className="flex justify-center px-4 pb-16 pt-10">
        {Object.entries(strategyMap).map(([key, value], index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-6px"
          >
            <div
              style={{ backgroundColor: value }}
              className="mb-1 h-3 w-3 rounded-full"
            ></div>
            <p>{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
