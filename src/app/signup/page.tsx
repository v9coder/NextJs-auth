"use client";
import Link from "next/link";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';



export default function SignUpPage() {
    const [user, setUser] = React.useStat e({
        username : "",
        email : "",
        password : ""
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    
    const onSignUp = async () => {
        
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Create Account</h1>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <button
          onClick={onSignUp}
          className="mt-6 w-full bg-white text-gray-900 font-semibold py-2 rounded-xl hover:bg-gray-300 transition duration-300"
        >
          {buttonDisabled ? "" : "SignUp"}
        </button>

        <p className="mt-4 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline">Login</Link>
        </p>
      </div>
    </div>
    );
}