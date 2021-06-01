import React from "react";
import { StocksContext } from "./StocksContext";


const DropDownMenu: React.FC = () => {

    const [stocks,] = React.useContext(StocksContext);
    
    React.useEffect(() => {
        console.log(stocks.splice(0, 9))
    }, [stocks])

    return (
        <div>
            
        </div>
        
    )
    
}
export default DropDownMenu;
