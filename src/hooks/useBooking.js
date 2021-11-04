import { useContext } from 'react'
import { BookingContext } from '../contexts/BookingProvider'

const useBooking = () => {
    return useContext(BookingContext)
}

export default useBooking
