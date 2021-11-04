import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

const BookingProvider = ({children}) => {
    const [allBookings,setAllBookings] = useState([]);

    //add booking
   const handleBookings = (booking) => {
       setAllBookings((prev) => {
           return [
               ...prev,
               booking
           ]
       })
   }
   console.log(allBookings)

   //remove booking 
   const removeBooking = (id) => {
       setAllBookings((prev) => {
           return prev.filter(item => item._id !== id)
       })
   }

    const value ={
        handleBookings,
        allBookings,
        setAllBookings,
        removeBooking,
    }
    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider
