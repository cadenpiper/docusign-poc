"use client";

import React, { useState } from 'react';

const CollectSigners = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        console.log('Participant Details:', { name, email });
        // Later: Send data to backend
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{ color: '#39FF14' }}>
            <p className="mb-4" style={{ color: '#39FF14' }}>Email Collection</p>
            <h1 className="text-2xl font-bold mb-6" style={{ color: '#39FF14' }}>Enter Participant Details</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block mb-2" style={{ color: '#39FF14' }}>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent"
                            style={{ color: '#39FF14' }}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block mb-2" style={{ color: '#39FF14' }}>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent"
                            style={{ color: '#39FF14' }}
                        />
                    </label>
                </div>
                <div className="mt-8">
                    <hr className="border-gray-300 mb-8 w-1/2 mx-auto" />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-transparent border border-gray-300 p-2 rounded hover:bg-gray-100"
                    style={{ color: '#39FF14' }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CollectSigners;
