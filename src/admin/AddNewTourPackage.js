import React from 'react'
import AddNewForm from './AddNewForm'

const AddNewTourPackage = () => {
    return (
        <section className="bg-white rounded-lg shadow-xl p-6 box-border m-12">
            {/* heading  */}
            <div className="flex flex-col space-y-3 mb-4">
                <h1 className="font-primary text-xl text-gray-700">Add New Tour Package</h1>
                <div className="w-36 h-1 rounded-full bg-red-400"></div>
            </div>

            {/* form  */}
            <AddNewForm />
        </section>
    )
}

export default AddNewTourPackage
