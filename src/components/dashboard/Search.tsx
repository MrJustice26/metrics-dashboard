import axios from 'axios'
import React from 'react'
import "./Search.scss";
import { Button, TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import { StocksContext } from './StocksContext';
import { BrowserRouter, Link, useHistory } from 'react-router-dom';

const url = 'http://localhost:4000'

const Search: React.FC = () => {
    const [stocks, setStocks] = React.useContext(StocksContext)
    
    const [text, setText] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const history = useHistory()
    
    React.useEffect(() => {}, [text])

    const fetchData = async (e:any, arg: string): Promise<void> => {
        console.log("FETCHING DATA")
        e.preventDefault()
        if (text.length){
            setText('')
            setIsLoading(true)
            try{
                const response: any = await axios.get(`${url}/api/stock/${arg}`)
                
                setStocks(response.data)
                setIsLoading(false)
            }
            catch(e){
                console.error(`Error: ${e}`)
                setIsLoading(false)
            }
        }
    }

    const fetchTextData = (event: any): void => {
        setText(event.target.value)
        setTimeout(() => {
            fetchData(event, text)
        }, 2000)
        
    }

    const changeUrl = (event: React.ChangeEvent<{}>, value: any): void => {
        console.log(value)
        history.push(`/stock/${value['symbol_akcji']}`)
    }
    return (
        <BrowserRouter>
            <div className="search__inner">
                <form onSubmit={(e) => fetchData(e, text)} className="search__form">
                    <Autocomplete 
                    noOptionsText="Pobieranie danych..."
                    id="combo-box-demo" options={stocks.length > 10 ? stocks.splice(0, 10) : stocks} 
                    getOptionLabel={(option: any) => `${option['symbol_akcji']} | ${option['nazwa_akcji']}`}
                    style={{ width: 500}}
                    onChange={(event, value) => changeUrl(event, value)}
                    renderInput={(params) => <TextField {...params} value={text} label="Nazwa/symbol akjcji" variant="outlined" onChange={(e) => fetchTextData(e)} />}
                />
                   
                </form>
            </div>
        </BrowserRouter>
        
    )
    
}
export default Search;
