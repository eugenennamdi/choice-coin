import { Bar } from "react-chartjs-2";

const Chart = ({ scores, options }) => {
  const chartData = {
    labels: [...options],
    datasets: [
      {
        data: [...scores, 0],
        backgroundColor: [
          "#2958ff",
          "#ccf381",
          "#2958ff",
          "#ccf381",
          "#2958ff",
          "#ccf381",
          "#2958ff",
          "#ccf381",
          "#2958ff",
          "#ccf381",
          "#2958ff",
          "#ccf381",
          "#2958ff",
          "#ccf381",
        ],
      },
    ],
  };

  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  fontColor: "#f00",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Chart;
