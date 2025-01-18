import React, { useState } from 'react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const skills = {
    programming: ['JavaScript (ES6+)', 'Python', 'SQL', 'Java', 'C++', 'Scala'],
    webDev: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'HTML5', 'CSS3', 'Tailwind CSS'],
    databases: ['MongoDB', 'MySQL', 'Snowflake', 'PostgreSQL', 'RESTful APIs'],
    dataEngineering: ['AWS (S3, EC2, RDS)', 'Snowflake', 'Apache Spark', 'ETL Pipelines', 'Data Analysis'],
    aiMl: ['Scikit-learn', 'NLTK', 'TensorFlow', 'NLP', 'Document AI', 'Predictive Analytics']
  };

  const experiences = [
    {
      title: 'Data Engineer',
      company: 'LTIMindtree',
      period: 'August 2024 – Present',
      location: 'Navi Mumbai, India',
      achievements: [
        'Developed scalable data pipelines, improving efficiency by 25%',
        'Utilized AWS and Snowflake for data warehousing',
        'Optimized ETL processes, reducing processing times by 20%',
        'Implemented ML models for data-driven decision making'
      ]
    },
    {
      title: 'React Developer Intern',
      company: 'XZECT',
      period: 'June 2024 – September 2024',
      location: 'Remote – Navi Mumbai, India',
      achievements: [
        'Developed full-stack MERN applications',
        'Improved user engagement by 30%',
        'Optimized performance with 40% faster load times'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 opacity-100 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Armaan Khan
          </h1>
          <div className="flex justify-center gap-2 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
              Data Engineer
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
              Full Stack Developer
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
              Business Analyst
            </span>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <a href="mailto:karmankkhan@gmail.com" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="https://github.com/armaankhan8270" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/armaan-khan-434897226/" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-8 border-b">
          {['overview', 'skills', 'experience', 'projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Experienced Data Engineer specializing in building scalable data pipelines and ETL processes.
                Proficient in MERN stack development with expertise in cloud technologies like AWS and Snowflake.
                Passionate about leveraging data-driven approaches to solve complex business challenges and drive
                organizational efficiency.
              </p>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-300">{exp.period}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Carbon Emission Tracker</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  MERN stack application for tracking carbon emissions with D3.js visualizations
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'D3.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Streaming Platform Clones</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Netflix and Amazon Prime clones with dynamic content loading
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Firebase', 'CSS3', 'API Integration'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;