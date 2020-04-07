import React, { Component } from 'react'
import Chart from "chart.js";
import "./Chart.scss";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["April 2", "April 4", "April 6"],
                datasets: [
                    {
                        label: "Monthly Savings",
                        data: [4, 12, 22],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div className="graphContainer">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}