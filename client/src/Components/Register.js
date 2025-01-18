import React, { useState } from "react";
import axios from "axios";
import { User, Mail, Lock, BookOpen, Loader2 } from 'lucide-react';
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subjects, setSubjects] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const post = async (e) => {
    e.preventDefault();
    setLoading(true);
    const subjectsArray = subjects.split(",").map((subject) => subject.trim());
    const url = `http://localhost:3002/user/register`;
    
    try {
      await axios.post(url, {
        username,
        email,
        password,
        subjects: subjectsArray,
      });
      setSuccess(true);
      setUsername("");
      setEmail("");
      setPassword("");
      setSubjects("");
    } catch (e) {
      setMessage(e.response.data);
      setErr(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
        setErr(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container min-h-screen px-6 py-12 mx-auto">
        <div className="max-w-md mx-auto">
          {/* Logo/Brand Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">Create an Account</h2>
            <p className="mt-1 text-sm text-gray-500">Enter your details to get started</p>
          </div>

          {/* Notification Messages */}
          {success && (
            <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">Successfully Registered</p>
                </div>
              </div>
            </div>
          )}

          {err && (
            <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">{message}</p>
                </div>
              </div>
            </div>
          )}

          {/* Registration Form */}
          <div className="overflow-hidden bg-white rounded-xl shadow">
            <div className="p-6">
              <form onSubmit={post} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700">Username</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-sm"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-sm"
                      placeholder="Create a password"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Subjects</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpen className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={subjects}
                      onChange={(e) => setSubjects(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-sm"
                      placeholder="Math, Science, History"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Separate subjects with commas</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    'Create Account'
                  )}
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/login"
                    className="w-full flex justify-center items-center px-6 py-3 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    Sign in to your account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;