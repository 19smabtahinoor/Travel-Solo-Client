import React from 'react'
import { BsCalendar3 } from 'react-icons/bs'
import { MdGroups } from 'react-icons/md'

const BookingCard = (props) => {
    const { title, description, image, duration, groupMembers, price, country } = props
    return (
        <>
            <div className="py-4 box-border overflow-hidden relative flex flex-col space-y-3">
                <div>
                    {/* country badge  */}
                    <div className="absolute top-10 text-sm left-0 z-50 bg-yellow-400 font-primary px-4 py-1 rounded-lg">{country}</div>
                    {/* image  */}
                    <div className="overflow-hidden rounded-xl h-full w-full">
                        <img className="transform hover:scale-125 transition duration-700 w-full h-full object-cover" src={image} alt={title} />
                    </div>
                </div>

                <div className="flex flex-col flex-grow">
                    {/* title and description */}
                    <div className="flex flex-col space-y-1 my-4">
                        <h2 className="text-gray-700 font-primary text-base">{title}</h2>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>

                    {/* others info  */}
                    <div className="flex items-center justify-between py-4">
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
                    {/* card footer  */}
                    <div className="flex items-center justify-between pt-3">
                        <h1 className="font-primary font-semibold text-gray-900 text-2xl">${price}</h1>
                    </div>
                </div>


            </div>
        </>
    )
}

export default BookingCard
