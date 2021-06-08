import React from 'react'
import { Line } from 'react-chartjs-2'
import { convertDateToMonth, convertDate } from '../utils';

export default function Chart({...data}) {
    const maxDate: Date = new Date();
    const minDate: Date = new Date(new Date().setDate(new Date().getDate() - 30));
    let chartData = {...data}['data']
    
    for (let i = 0; i < 30; i++){
        
        let existObj = chartData.find((day: { [x: string]: string | number | Date; }) => {
            console.log(day['date'], new Date(day['date']))
            return convertDate(new Date(day['date'])) === convertDate(new Date(minDate.setDate(minDate.getDate() + i)))
        })
        if (!existObj) {
            chartData.push({
                'date': new Date(minDate.setDate(minDate.getDate() + i)).toISOString(),
                'open': null
            })
        } else {
            console.log(true)
        }
    }
    console.log(chartData)
    chartData = chartData.sort((a: any,b: any) => {
        return new Date(a['date']).getTime() - new Date(b['date']).getTime()
    })
    console.log(chartData)
    

    console.log(maxDate, minDate)

    let openData = [];
    let datesData = []
    
    for (let i = 0; i < chartData.length; i++){
        openData.push(chartData[chartData.length - i - 1]['open'])
    }

    for (let i = 0; i < chartData.length; i++){
        datesData.push(convertDateToMonth(new Date(chartData[chartData.length - i - 1]['date'])))
    }
    const readyChartData: any = {
        labels: datesData,
        datasets: [
            {
                label: "First dataset",
                data: openData,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    }

    
    return (
        <div>
            <Line type="line" data={readyChartData}  />
        </div>
    )
}
