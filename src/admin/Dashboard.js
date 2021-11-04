import React, { useState } from 'react';
import AddNewTourPackage from './AddNewTourPackage';
import ManageBookingsScreen from './ManageBookingsScreen';
import SideMenu from './SideMenu';

const Dashboard = () => {
    const [control, setControl] = useState("manageBooking");

    return (
        <main className="w-full h-screen grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6">
            <div className="col-span-1 bg-gray-300">
                <SideMenu setControl={setControl} control={control} />
            </div>
            <div className="col-span-5 pt-24 bg-gray-300">
                {control === "addTour" && <AddNewTourPackage /> }
                {control === "manageBooking" && <ManageBookingsScreen/>}
            </div>
        </main>
    )
}

export default Dashboard
