import React from 'react';
import { ArrowRight, Check, ChevronDown, Users, Calendar, Book, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Track Your Attendance
              <br />
              <span className="text-blue-200">Effortlessly</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Simplify attendance management with our intuitive platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={"login"} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">24</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to manage attendance
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features to make attendance tracking simple and efficient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">User Management</h3>
              <p className="text-gray-600">
                Easily manage students, teachers, and staff members in one place
              </p>
            </div>
            {/* <div className="bg-white p-8 rounded-xl shadow-sm">
              <Calendar className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Scheduling</h3>
              <p className="text-gray-600">
                Create and manage class schedules with our intuitive calendar
              </p>
            </div> */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Book className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Reports</h3>
              <p className="text-gray-600">
                Generate detailed attendance reports and analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How does the attendance system work?",
                answer: "Our attendance system uses a simple check-in/check-out process. Teachers can mark attendance with just a few clicks, and students can view their attendance records in real-time."
              },
              {
                question: "Can I export attendance reports?",
                answer: "Yes! You can export attendance reports in multiple formats including PDF, Excel, and CSV. These reports can be customized based on date ranges and specific classes."
              },
              {
                question: "Is the platform mobile-friendly?",
                answer: "Absolutely! Our platform works seamlessly on all devices including smartphones, tablets, and desktop computers."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <button className="w-full flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to streamline your attendance management?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={'/login'} className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50'>
  Login
</Link>

          
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Company</a></li>
                <li><a href="#" className="hover:text-white">Team</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Copyright</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}