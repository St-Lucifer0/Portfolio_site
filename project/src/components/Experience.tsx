import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'IT Support Specialist',
    company: 'Total Energies Marketing PLC',
    location: 'Accra, Ghana',
    period: '3 months',
    description: 'Managed and maintained corporate IT infrastructure for a leading energy company, providing technical support and implementing system improvements.',
    achievements: [
      'Managed corporate IT infrastructure for multinational energy company',
      'Provided technical support ensuring optimal system performance',
      'Implemented troubleshooting protocols reducing downtime'
    ]
  },
  {
    title: 'Software Developer & IT Support',
    company: 'MTN Ghana',
    location: 'Ghana',
    period: '2 months',
    description: 'Developed customer support solutions and provided comprehensive IT support to enhance internal operations and service efficiency.',
    achievements: [
      'Developed demo chatbot for customer technical support',
      'Improved service efficiency through automated solutions',
      'Collaborated on software solutions for internal operations'
    ]
  },
  {
    title: 'Founder & Admin',
    company: 'ProjectHub Development Platform',
    location: 'Remote',
    period: 'Ongoing',
    description: 'Founded and manage a platform connecting developers and engineers with clients for project consultation and collaboration.',
    achievements: [
      'Built platform connecting developers with clients',
      'Manage network of technical experts across multiple domains',
      'Facilitate successful project collaborations and consultations'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-600 dark:text-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 mt-6 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center mb-3">
                      <Calendar size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-slate-600 dark:text-white">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {exp.company}
                      </span>
                      <MapPin size={14} className="text-gray-400 mx-2" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}