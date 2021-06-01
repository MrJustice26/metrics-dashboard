import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'

export default function StocksInspector() {
    const [stockData, setStockData] = React.useState([])
    
    const params: Params = useParams()
    
    interface Params {
        stock?: {}
    }

    React.useEffect(() => {
        const today: Date = new Date()
        const thirtyDaysBefore: Date = new Date(new Date().setDate(today.getDate() - 30))
        
        function convertDate(date: Date): string {
            return `${date.getFullYear()}-${date.getMonth().toString().length == 2 ? date.getMonth() + 1 : "0"+(date.getMonth() + 1)}-${date.getDate().toString().length == 2 ? date.getDate(): "0"+date.getDate()}`
        }

        // console.log(convertDate(today), convertDate(thirtyDaysBefore))
        // async function fetchStock(){
        //     const response = await axios.get(`http://api.marketstack.com/v1/eod?access_key=bc03ed92680cc5cf0f68216267bb6661&symbols=${params['stock']}&date_from=${convertDate(thirtyDaysBefore)}&date_to=${convertDate(today)}`)

        

        // console.log(today, thirtyDaysBefore)
        //     setStockData(response.data.data);
        // }

        // fetchStock()
        
    }, [params['stock']])

    console.log(params['stock'])
    return (
        <div>
            <h1>Is working</h1>
        </div>
    )
}
