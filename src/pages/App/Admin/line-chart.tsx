import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { WeeklyStats } from '../../../utils/interfaces';

export default function ApexChart(props: WeeklyStats) {
  const { days, data } = props;
  const state = {
    series: [
      {
        name: 'Keywords assigned this week',
        data: data.keywordsAssigned,
      },
      {
        name: 'Keywords categorized this week',
        data: data.keywordsCategorized,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: days,
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  };
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="area"
      height={350}
    />
  );
}
