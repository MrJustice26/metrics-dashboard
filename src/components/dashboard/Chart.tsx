import React, { FunctionComponent } from 'react'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types';

const Chart: FunctionComponent = (props) => {
    console.log(props)
    const data: any = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    }
    return (
        <div>
            <Line type="line" data={data} />
        </div>
    )
}

Chart.propTypes = {
    props: PropTypes.array
}

export default Chart;
