import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useFirebase from '../hooks/useFirebase';

const RegisterScreen = () => {
    const { handleGoogleSignIn} = useFirebase();

    return (
        <section className="register-screen h-screen">
            <div className=" flex flex-col items-center justify-center h-screen">
                <div className="register-container flex flex-col justify-center items-center space-y-4 p-6 box-border rounded-lg w-96 h-48">
                    <h1 className="text-2xl font-primary text-center">Login with</h1>

                    {/* google button  */}
                    <div className="bg-white px-6 py-3 border border-gray-200 flex items-center space-x-4 justify-center rounded-full cursor-pointer select-none hover:scale-105 transform transition duration-300" onClick={handleGoogleSignIn}>
                        <FcGoogle className="text-2xl" />
                        <span className="text-gray-700 font-primary">Continue with Google</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterScreen
