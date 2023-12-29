import React, { Component } from 'react';
import Chart from 'chart.js/auto';

class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Sample Data',
          data: [10, 20, 15, 25, 30],
          borderColor: 'blue',
          borderWidth: 1,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // Additional chart options
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Chart Example</h2>
        <div style={{ width: '600px', height: '400px' }}>
          <canvas ref={this.chartRef}></canvas>
        </div>
      </div>
    );
  }
}

export default ChartComponent;
