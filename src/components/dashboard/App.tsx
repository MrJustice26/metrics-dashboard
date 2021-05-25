import React from 'react'
import DropDownMenu from './DropDownMenu'

const DashboardApp: React.FC = () => {
    return (
        <div>
            <DropDownMenu></DropDownMenu>
            <canvas id="dashboardChart" width="400" height="400"/>
        </div>
    )
}
export default DashboardApp;