import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import HeroBanner from '../components/Hero Section/HeroBanner'
import Testimonials from '../components/Testimonial/Testimonials'
import TourPackageSection from '../components/Tour Package/TourPackageSection'

const HomeScreen = () => {
    return (
        <main className="bg-gray-200">
            <HeroBanner />
            <TourPackageSection />
            <About />
            <Testimonials />
            <Footer/>
        </main>
    )
}

export default HomeScreen
