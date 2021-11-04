import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import TourPackCard from './TourPackCard';

const TourPackageSection = () => {
    const [toursPack, setToursPack] = useState([]);

    useEffect(() => {
        fetch('https://sm-travel-solo.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setToursPack(data))
    }, [])



    return (
        <section className="max-w-screen-xl mx-auto px-6 relative -top-36">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        toursPack?.map(item => {
                            return (
                                <Fade key={item._id} left>
                                    <TourPackCard {...item} />
                                </Fade>
                            )
                        })
                    }
                </div>
        </section>
    )
}

export default TourPackageSection
