import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import useAuth from "../hooks/useAuth";

const SideMenu = ({ setControl, control }) => {
    const { user } = useAuth();
    const [sidenav, setSidenav] = useState(true)

    //toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    }

    // auto hide 
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1098) {
            setSidenav(false)
        } else {
            setSidenav(true)
        }
    })

    return (
        <div>
            {sidenav && (
                <>
                    <nav className="flex fixed flex-col items-center w-72 bg-white h-screen px-2">
                        <div className="mt-24 flex flex-col items-center justify-center space-y-3">
                            {/* image  */}
                            <img
                                src="../../assets/profile.png"
                                className="w-28 h-28 rounded-full object-contain mx-auto"
                                alt={user.displayName}
                            />
                            {/* user info  */}
                            <div>
                                <h1 className="text-center font-primary text-gray-700">{user.displayName}</h1>
                                <p className="text-center font-primary text-gray-500 text-sm">{user.email}</p>
                            </div>
                        </div>
                        <div className="mt-10 mb-4">
                            <ul className="flex flex-col space-y-3">
                                <li className={`${control === "manageBooking" && "bg-red-500 text-white"} flex items-center rounded-md py-3 cursor-pointer px-2`}>
                                    <div className="flex items-center space-x-3" onClick={() => setControl('manageBooking')}>
                                        <span className="ml-2 font-primary">Manage Bookings</span>
                                    </div>
                                </li>
                                <li className={`${control === "addTour" && "bg-red-500 text-white"} flex items-center  rounded-md py-3 cursor-pointer px-2`}>
                                    <div className="flex items-center space-x-3" onClick={() => setControl('addTour')}>
                                        <span className="ml-2 font-primary">Add New Tour Pack</span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </>
            )}

            {/* //menu icons  */}
            <div className=" block fixed bottom-10 left-10 bg-white p-2 rounded-full cursor-pointer shadow-xl border border-primary" onClick={handlenav}>
                <MdOutlineArrowForwardIos className="text-2xl text-primary" />
            </div>
        </div>
    )
}

export default SideMenu