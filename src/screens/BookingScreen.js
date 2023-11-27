import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingCard from '../components/Booking/BookingCard';
import BookingForm from '../components/Booking/BookingForm';

const BookingScreen = () => {
    const [data, setData] = useState({})
    const { id } = useParams();

    //bookings details
    useEffect(() => {
        fetch(`https://travel-solo-server-moa6.vercel.app/tours/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])
    console.log(data)

    return (
        <main className="my-12">
            <section className="my-24 max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* bookings */}
                    <div className="col-span-2 bg-white rounded-xl shadow-xl p-4 box-border flex flex-col justify-between">
                        <BookingCard {...data} />
                    </div>
                    {/* details  */}
                    <div className="col-span-2 bg-white  rounded-xl shadow-xl p-4 box-border">
                        {/* heading  */}
                        <div className="flex flex-col space-y-2">
                            <h1 className="font-primary text-2xl text-gray-700 font-semibold text-center">Booking Details</h1>
                            <div className="h-1 w-36 mx-auto bg-red-400 rounded-full"></div>
                        </div>
                        {/* form  */}
                        <BookingForm bookings={data} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BookingScreen
