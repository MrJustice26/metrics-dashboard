import React from 'react'
import Search from './Search';
import { StocksProvider } from './StocksContext';
import StocksInspector from './StocksInspector';

const DashboardApp: React.FC = () => {

    return (
        <StocksProvider>
            <Search />
        </StocksProvider>
    )
}
export default DashboardApp;