import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Chart from './Chart';
import './StocksInspector.scss'
import url from './url';

const StocksInspector: React.FC = () => {
    const [stockData, setStockData] = React.useState<Object>([])
    const [stockName, setStockName] = React.useState<String>('')
    const data = [
        {
            "open": 126.17,
            "high": 126.31,
            "low": 124.8321,
            "close": 125.9,
            "volume": 68205494.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 125.9,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-06-07T00:00:00+0000"
        },
        {
            "open": 124.07,
            "high": 126.16,
            "low": 123.85,
            "close": 125.89,
            "volume": 75087300.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 125.89,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-06-04T00:00:00+0000"
        },
        {
            "open": 124.68,
            "high": 124.85,
            "low": 123.13,
            "close": 123.54,
            "volume": 75732834.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 123.54,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-06-03T00:00:00+0000"
        },
        {
            "open": 124.28,
            "high": 125.24,
            "low": 124.05,
            "close": 125.06,
            "volume": 58418100.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 125.06,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-06-02T00:00:00+0000"
        },
        {
            "open": 125.08,
            "high": 125.35,
            "low": 123.945,
            "close": 124.28,
            "volume": 63460425.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 124.28,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-06-01T00:00:00+0000"
        },
        {
            "open": 125.57,
            "high": 125.8,
            "low": 124.55,
            "close": 124.61,
            "volume": 71232700.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 124.61,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-28T00:00:00+0000"
        },
        {
            "open": 126.44,
            "high": 127.64,
            "low": 125.28,
            "close": 125.28,
            "volume": 86473226.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 125.28,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-27T00:00:00+0000"
        },
        {
            "open": 126.955,
            "high": 127.39,
            "low": 126.42,
            "close": 126.85,
            "volume": 53175620.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 126.85,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-26T00:00:00+0000"
        },
        {
            "open": 127.82,
            "high": 128.3168,
            "low": 126.32,
            "close": 126.9,
            "volume": 70119179.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 126.9,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-25T00:00:00+0000"
        },
        {
            "open": 126.01,
            "high": 127.935,
            "low": 125.94,
            "close": 127.1,
            "volume": 61144792.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 127.1,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-24T00:00:00+0000"
        },
        {
            "open": 127.82,
            "high": 128.0,
            "low": 125.21,
            "close": 125.43,
            "volume": 79209300.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 125.43,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-21T00:00:00+0000"
        },
        {
            "open": 125.23,
            "high": 127.7156,
            "low": 125.1,
            "close": 127.31,
            "volume": 72824171.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 127.31,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-20T00:00:00+0000"
        },
        {
            "open": 123.16,
            "high": 124.915,
            "low": 122.88,
            "close": 124.69,
            "volume": 85649375.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 124.69,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-19T00:00:00+0000"
        },
        {
            "open": 126.56,
            "high": 126.9878,
            "low": 124.78,
            "close": 124.85,
            "volume": 59794196.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 124.85,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-18T00:00:00+0000"
        },
        {
            "open": 126.82,
            "high": 126.92,
            "low": 125.17,
            "close": 126.27,
            "volume": 67867172.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 126.27,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-17T00:00:00+0000"
        },
        {
            "open": 126.25,
            "high": 127.88,
            "low": 125.85,
            "close": 127.45,
            "volume": 77970942.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 127.45,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-14T00:00:00+0000"
        },
        {
            "open": 124.58,
            "high": 126.15,
            "low": 124.26,
            "close": 124.97,
            "volume": 102137673.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 124.97,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-13T00:00:00+0000"
        },
        {
            "open": 123.4,
            "high": 124.64,
            "low": 122.25,
            "close": 122.77,
            "volume": 107046695.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 122.77,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-12T00:00:00+0000"
        },
        {
            "open": 123.5,
            "high": 126.27,
            "low": 122.78,
            "close": 125.91,
            "volume": 124362743.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 125.91,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-11T00:00:00+0000"
        },
        {
            "open": 129.41,
            "high": 129.54,
            "low": 126.81,
            "close": 126.85,
            "volume": 85152395.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 126.85,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-05-10T00:00:00+0000"
        }
    ]


    const params: Params = useParams()

    interface Params {
        stock?: {}
    }

    React.useEffect(() => {
        const today: Date = new Date()
        const thirtyDaysBefore: Date = new Date(new Date().setDate(today.getDate() - 30))

        function convertDate(date: Date): string {
            return `${date.getFullYear()}-${date.getMonth().toString().length === 2 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)}-${date.getDate().toString().length === 2 ? date.getDate() : "0" + date.getDate()}`
        }

        for (let stock of data){
            console.log(stock.open, stock.date, new Date(stock.date).getDate(), new Date(stock.date).getMonth() + 1)
        }

        const fetchNameStock = async () => {
            let dataStock = (await axios.get(`${url}/api/stock/${params['stock']}`))['data'].filter((stock: any) =>{
                return stock['symbol_akcji'] === params['stock']
            });
            if (dataStock.length){
                setStockName(dataStock[0]['nazwa_akcji'])
            }
            console.log(dataStock)

        }

        fetchNameStock()


        // async function fetchStock(){
        //     const response = await axios.get(`http://api.marketstack.com/v1/eod?access_key=bc03ed92680cc5cf0f68216267bb6661&symbols=${params['stock']}&date_from=${convertDate(thirtyDaysBefore)}&date_to=${convertDate(today)}`)



        // console.log(today, thirtyDaysBefore)
        //     setStockData(response.data.data);
        //     console.log(response.data.data)
        // }

        // fetchStock()

    }, [params['stock']])

    console.log(params['stock'])
    return (
        <div>
            {stockName ? (
                <div className="stock__container">
                    <Chart data={...data} />
                </div>
            ) : (
                <div className="error__container">
                    <Alert className="error__alert" severity="error">Jest podana zły symbol akcji</Alert>
                    <Link to="/" className="error__link">Wrócić do poszukiwania akcji</Link>
                </div>
            )}
        </div>
    )
}

export default StocksInspector;
