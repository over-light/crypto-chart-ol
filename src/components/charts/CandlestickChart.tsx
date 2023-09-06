import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

interface CandlestickChartProps {
  data: {
    x: number;
    y: number[];
  }[];
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const options = {
      series: [
        {
          data: data,
        },
      ],
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#54f542",
            downward: "#EF403C",
          },
          wick: {
            useFillColor: true,
          },
        },
      },
      chart: {
        id: "candles",
        type: "candlestick",
        height: 320,
        foreColor: "#F9FAFB",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: true,
        },
        labels: {
          minWidth: 40,
          maxWidth: 40,
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
          theme: false,
        },
        labels: {
          minWidth: 40,
          maxWidth: 40,
          formatter: (val: number) => {
            return val.toFixed(0);
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "6px",
          fontFamily: undefined,
        },
      },
    };
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);
  return <div ref={chartRef}></div>;
};
export default CandlestickChart;
