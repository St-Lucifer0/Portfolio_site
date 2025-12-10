import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: <Globe className="w-6 h-6" />,
    technologies: ['Python', 'JavaScript', 'SQL', 'R', 'TypeScript']
  },
  {
    category: 'Machine Learning',
    icon: <Database className="w-6 h-6" />,
    technologies: ['Predictive Modeling', 'Federated Learning', 'Data Mining', 'TensorFlow', 'Scikit-learn']
  },
  {
    category: 'Frameworks & Tools',
    icon: <Code className="w-6 h-6" />,
    technologies: ['React', 'Node.js', 'Django', 'Git', 'Docker']
  },
  {
    category: 'Data Analysis',
    icon: <Smartphone className="w-6 h-6" />,
    technologies: ['Statistical Analysis', 'Data Visualization', 'Business Intelligence', 'AWS', 'PostgreSQL']
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-600 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate software engineer with a strong focus on machine learning and data-driven solutions. My expertise lies in transforming complex challenges into innovative software, from predictive healthcare systems to robust enterprise applications.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With hands-on experience at leading companies like Total Energies and MTN Ghana, I bring a unique blend of technical depth and practical industry knowledge to every project. I am committed to building scalable, efficient, and impactful digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium">
                Healthcare Innovation
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm font-medium">
                Enterprise Experience
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 rounded-full text-sm font-medium">
                Entrepreneurial Leadership
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded-full text-sm font-medium">
                Technical Versatility
              </span>
              <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-full text-sm font-medium">
                Problem Solver
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-600 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}