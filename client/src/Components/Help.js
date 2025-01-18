import React from "react";
import { Shield, Users, Mail, Phone, MessageCircle, HelpCircle } from 'lucide-react';

const Help = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Use Our Attendance System</h1>
          <p className="text-lg text-gray-600">Follow these simple steps to get started</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline Section */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed text-gray-600">Create your account by signing up with your email</p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed text-gray-600">Login to your account using your credentials</p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed text-gray-600">Navigate to the Attendance section in the navbar</p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed text-gray-600">Click on Add to record your attendance for the day</p>
                </div>
              </div>

              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Checking Your Attendance
                  </h2>
                  <p className="leading-relaxed text-gray-600">
                    Visit the Attendance Check section and search using your username to view your records
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="lg:w-2/5">
            <div className="space-y-6">
              {/* Need Help Card */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-4">Need Additional Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">support@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Quick Tips Card */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <span className="text-blue-600 text-sm">1</span>
                    </div>
                    <span className="text-gray-600">Mark attendance daily to maintain accurate records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <span className="text-blue-600 text-sm">2</span>
                    </div>
                    <span className="text-gray-600">Update your profile information regularly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <span className="text-blue-600 text-sm">3</span>
                    </div>
                    <span className="text-gray-600">Contact support if you notice any discrepancies</span>
                  </li>
                </ul>
              </div>

              {/* Resources Card */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-sm p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-blue-100">
                      <HelpCircle className="w-5 h-5" />
                      <span>User Guide</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-blue-100">
                      <MessageCircle className="w-5 h-5" />
                      <span>FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-blue-100">
                      <Users className="w-5 h-5" />
                      <span>Community Forum</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;