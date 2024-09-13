import Swal from 'sweetalert2'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../database/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSignin(e) {
    setIsLoading(true)
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        const uid = response.user.uid
        localStorage.setItem("userId", uid)
        Swal.fire('Login Completed!')
        navigate('/home')
        setIsLoading(false)
      })
      .catch((error) => {
        Swal.fire({
          title: 'Something Went Wrong!',
          text: error.message,
          icon: 'error',

        })
        setIsLoading(false)
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md scale-150">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            {isLoading ?
              <div className="w-full flex justify-center py-2 px-4 rounded ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" className='h-6 w-6' />
              </ div>
              :
              <button
                onClick={handleSignin}
                className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-indigo-600"
                type="submit"
              >
                Sign In
              </button>
            }
          </div>
        </form>
        <div className="mt-6 text-center justify-between flex">
          <a
            className="text-sm text-indigo-900 hover:text-indigo-950"
            href="signup"
          >
            Signup?
          </a>
          <a
            className="text-sm text-indigo-500 hover:text-indigo-700"
            href="#"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
