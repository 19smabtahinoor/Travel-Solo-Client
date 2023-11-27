import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddNewForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://travel-solo-server-moa6.vercel.app/tours', data)
            .then((response) => {
                if (response.statusText === "OK") {
                    swal("Good job!", "New Tour Package Added", "success")
                        .then(() => reset())
                }
            })
            .catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error");
            });
    };

    return (
        <div className="py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <div className="flex flex-col space-y-4">
                    {/* title  */}
                    <input className="input-primary" placeholder="Package Title" {...register("title", { required: true })} />
                    {/* description  */}
                    <textarea cols="30" rows="9" className="input-primary resize-none" placeholder="Package Description" {...register("description", { required: true })}></textarea>
                </div>

                <div className="flex flex-col space-y-4">
                    {/* Image URL  */}
                    <input className="input-primary" placeholder="Image Link" {...register("image", { required: true })} />
                    {/* duration  */}
                    <input className="input-primary" placeholder="Tour Duration" {...register("duration", { required: true })} />
                    {/* group members  */}
                    <input type="number" className="input-primary" placeholder="Group members" {...register("groupMembers", { required: true })} />
                    {/* price  */}
                    <input type="number" className="input-primary" placeholder="Price" {...register("price", { required: true })} />
                    {/* country  */}
                    <input type="text" className="input-primary" placeholder="Country Name" {...register("country", { required: true })} />
                    <button className="btn-primary w-36 ml-auto">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewForm

