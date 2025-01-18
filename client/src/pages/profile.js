import React from "react";
import { GlobalUserContetx } from "../Context/UserContext";
import { User, Mail, Phone, BookOpen } from 'lucide-react';

const Profile = () => {
  const { NameOfUser, subjects } = GlobalUserContetx();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Overview</h1>
          <p className="mt-2 text-gray-600">Manage your personal information and enrolled subjects</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Profile Header with Avatar */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
            <div className="flex items-center">
              <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-semibold">
                {NameOfUser?.charAt(0) || '?'}
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-semibold text-white">{NameOfUser || 'Not Available'}</h2>
                <p className="mt-1 text-blue-100">Student</p>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="divide-y divide-gray-100">
            {/* Personal Information */}
            <div className="px-6 py-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="mt-1 text-sm text-gray-900">{NameOfUser || 'Not available'}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {NameOfUser ? `${NameOfUser.toLowerCase()}@gmail.com` : 'Not available'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Phone Number</p>
                    <p className="mt-1 text-sm text-gray-900">••• ••• ••••</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolled Subjects */}
            <div className="px-6 py-5">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 text-gray-400" />
                <h3 className="ml-2 text-lg font-semibold text-gray-900">Enrolled Subjects</h3>
              </div>
              
              {subjects?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subjects.map((subject, index) => (
                    <div
                      key={`${subject}-${index}`}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span className="ml-3 text-sm font-medium text-gray-900">{subject}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic">No subjects available</p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            Edit Profile
          </button>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;