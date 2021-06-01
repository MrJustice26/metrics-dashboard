import React from 'react'

export const StocksContext = React.createContext();

export const StocksProvider = (props) => {
    const [stocks, setStocks] = React.useState([
        {"id_akcji": 7034, "nazwa_akcji": "Tesla Inc. Common Stock", "symbol_akcji": "TSLA"},
        {"id_akcji": 18, "nazwa_akcji": "Apple Inc. Common Stock", "symbol_akcji": "AAPL"},
        {"id_akcji": 439, "nazwa_akcji": "Amazon.com Inc. Common Stock", "symbol_akcji": "AMZN"}
    ]);
    
    
    
    return (
        <StocksContext.Provider value={[stocks, setStocks]}>
            {props.children}
        </StocksContext.Provider>
    )

}
