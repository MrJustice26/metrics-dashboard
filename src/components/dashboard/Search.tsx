import axios from 'axios'
import React from 'react'
import "../stylesheet/button.scss"

const url = 'http://localhost:4000'

const Search: React.FC = () => {

    const [text, setText] = React.useState('')
    const [isDisabled, setIsDisabled] = React.useState(false)

    const fetchData = async (arg: string) => {
        setText('')
        setIsDisabled(true)
        const response = await axios.get(`${url}/api/stock/${arg}`)
        setIsDisabled(false)
    }

    return (
        <>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}></input>
            <button disabled={isDisabled} className="button" onClick={() => fetchData(text)}>Znajdź</button>
        </>
        
    )
    
}
export default Search;
