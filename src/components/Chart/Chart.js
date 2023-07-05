import React from 'react';
import ChartBar from "./ChartBar";
import './Chart.css';
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);//new array for values
    const totalMax = Math.max(...dataPointValues);//max accepts comma seperated numbers so we have to use spread operator on the dataPointValues array 
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label} />))}
        </div>
    );
};
export default Chart;