import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import useBooking from '../../hooks/useBooking';

const TourPackCard = (props) => {
    const { _id,title, description, image, duration, groupMembers, price, country} = props
    const { handleBookings } = useBooking();
    const history = useHistory();
    
    //handing booking 
    const handleBooking = () => {
         handleBookings(props);
        history.push(`/booking/${_id}`);
    }

    return (
        <div className="bg-white rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between">
            {/* country badge  */}
            <div className="absolute top-10 text-sm left-0 z-50 bg-yellow-400 font-primary px-4 py-1 rounded-lg">{country}</div>
            {/* image  */}
            <div className="overflow-hidden rounded-xl h-52">
                <img className="transform hover:scale-125 transition duration-700 w-full h-full object-cover" src={image} alt={title} />
            </div>

            <div className="flex flex-col flex-grow">
                {/* title and description */}
                <div className="flex flex-col space-y-1 my-4">
                    <h2 className="text-gray-700 font-primary text-lg">{title}</h2>
                    <p className="text-gray-500 text-sm">{description.slice(0, 250)}</p>                    

                </div>

                {/* others info  */}
                <div className="flex items-center justify-between border-t border-gray-200 border-b  py-4">
                    {/* duration  */}
                    <div className="flex items-center space-x-3">
                        <BsCalendar3 className="text-red-500 text-xl" />
                        <div className="flex flex-col">
                            <p className="text-sm font-primary text-gray-700">Duration</p>
                            <span className="text-sm text-gray-500">{duration}</span>
                        </div>
                    </div>
                    {/* group  */}
                    <div className="flex items-center space-x-3">
                        <MdGroups className="text-red-500 text-2xl" />
                        <div className="flex flex-col">
                            <p className="text-sm font-primary text-gray-700">Group Size</p>
                            <span className="text-sm text-gray-500">{groupMembers} peoples</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* card footer  */}
            <div className="flex items-center justify-between pt-3">
                <h1 className="font-primary font-semibold text-gray-900 text-2xl">${price}</h1>
                <button className="btn-primary px-6" onClick={handleBooking}>Book Now</button>
            </div>
        </div>
    )
}

export default TourPackCard
