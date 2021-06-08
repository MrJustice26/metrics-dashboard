import axios from 'axios'
import React from 'react'
import "./Search.scss";
import {TextField} from '@material-ui/core';
import {Alert, Autocomplete} from '@material-ui/lab';
import { StocksContext } from './StocksContext';
import { BrowserRouter, useHistory } from 'react-router-dom';
import _ from 'lodash';
import url from './url';

/*
interface IStocksData {
    id_akcji: number, symbol_akcji: string, nazwa_akcji: string
}

type IStocksDataType = [IStocksData]
*/


const Search: React.FC = () => {
    

    const [stocks, setStocks] = React.useContext<any[]>(StocksContext)
    const [isError, setIsError] = React.useState<boolean>(false);
    const [text, setText] = React.useState<string>('')


    const history = useHistory()
    
    React.useEffect(() => {
        const timeOut = setTimeout(() => fetchData(text), 500)
        setIsError(false)
        return () => clearTimeout(timeOut)

    }, [text])

    const fetchData = async (arg: string) => {
        console.log("FETCHING DATA")
        if (text.length){
            setText('')
            try{
                const response: any = await axios.get(`${url}/api/stock/${arg}`)
                setStocks(response.data)

            }
            catch(e){
                setIsError(true)
                console.error(`Error: ${e}`)
            }
        }
    }

    const fetchTextData = (event: any): any => {
        setText(event.target.value)  
    }

    const changeUrl = (event: React.ChangeEvent<{}>, value: any): void => {
        history.push(`/stock/${value['symbol_akcji']}`)
    }
    return (
        <BrowserRouter>
            <div className="search__inner">
                <form onSubmit={(e) => e.preventDefault()} className="search__form">
                    <Autocomplete 
                    noOptionsText="Pobieranie danych..."
                    id="combo-box-demo" options={stocks}
                    getOptionLabel={(option: any) => `${option['symbol_akcji']} | ${option['nazwa_akcji']}`}
                    style={{ width: 500}}
                    onChange={(event, value) => changeUrl(event, value)}
                    renderInput={(params) => <TextField {...params} value={text} label="Nazwa/symbol akjcji" variant="outlined" onChange={(e) => fetchTextData(e)} />}
                />
                
                </form>
                {isError && <Alert className="search__alert" severity="error" onClick={() => setIsError(false)}>Pojawił się błąd przy otrzymaniu danych!</Alert>}
            </div>
        </BrowserRouter>
        
    )
    
}
export default Search;
