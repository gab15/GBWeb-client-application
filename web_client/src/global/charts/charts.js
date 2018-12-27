import React from 'react';

import { Bar, Line, Scatter, Bubble, Polar, Doughnut, Pie, Radar } from 'react-chartjs-2';

export default class ChartFactory {
  static build(data) {
      switch (data.source) {
          case 'bar':
              return <Bar key='bar' data={data.chartData}/>;
          case 'line':
              return <Line key='line' data={data.chartData} />;
          case 'scatter':
              return <Scatter key='scatter' data={data.chartData} />;
          case 'bubble':
              return <Bubble key='bubble' data={data.chartData} />;
          case 'polar':
              return <Polar key='polar' data={data.chartData} />;
          case 'doughnut':
              return <Doughnut key='doughnut' data={data.chartData} />;
          case 'pie':
              return <Pie key='pie' data={data.chartData} />;
          case 'radar':
              return <Radar key='radar' data={data.chartData} />;
          default:
              return undefined;
      }
  }
}
