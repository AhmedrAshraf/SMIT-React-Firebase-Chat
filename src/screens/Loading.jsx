import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate()

    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        const userId = await localStorage.getItem('userId');
        if (userId !== null) navigate("/home")
        else navigate("/login")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
                <span className="text-indigo-500 text-lg font-semibold">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
