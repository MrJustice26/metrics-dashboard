import axios from 'axios'
import React from 'react'
import "./Search.scss";

const url = 'http://localhost:4000'

const Search: React.FC = () => {

    const [text, setText] = React.useState('')
    const [isDisabled, setIsDisabled] = React.useState(false)

    const fetchData = async (arg: string) => {
        setText('')
        setIsDisabled(true)
        try{
            const response = await axios.get(`${url}/api/stock/${arg}`)
            setIsDisabled(false)
            console.log(response);
            
        }
        catch(e){
            setIsDisabled(false)
        }
        
        
    }

    return (
        <div className="search__inner">
            <input className="search__input" type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Wyszukaj"></input>
            <button className="btn-primary search__btn" disabled={isDisabled} onClick={() => fetchData(text)}>Znajdź</button>
        </div>
    )
    
}
export default Search;
