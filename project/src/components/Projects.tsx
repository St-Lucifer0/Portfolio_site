import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Colorectal Cancer Risk Assessment System',
    description: 'Developed an advanced machine learning model to predict colorectal cancer risk, potentially helping in early detection and prevention strategies. Utilized comprehensive data analysis and predictive algorithms to achieve high accuracy rates.',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'Machine Learning', 'Healthcare Data Analysis', 'Predictive Modeling'],
    github: 'https://github.com/St-Lucifer0',
    demo: 'https://example.com'
  },
  {
    title: 'Retail Profit Optimization with Federated Learning',
    description: 'Built an innovative system to identify high-utility itemsets in retail environments using federated learning, enabling stores to maximize profit while maintaining data privacy across multiple locations.',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'Federated Learning', 'Data Mining', 'Retail Analytics'],
    github: 'https://github.com/St-Lucifer0',
    demo: 'https://example.com'
  },
  {
    title: 'Church Finance Management System',
    description: 'Designed and developed a comprehensive financial management platform for religious organizations, streamlining donation tracking, expense management, and financial reporting with user-friendly interfaces.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Full-Stack Development', 'Database Management', 'Financial Systems', 'React'],
    github: 'https://github.com/St-Lucifer0',
    demo: 'https://example.com'
  },
  {
    title: 'Synergy-Collaborative Development Platform',
    description: 'Built platform connecting developers and engineers with clients for project consultation and collaboration. Serves as admin while managing a network of technical experts across multiple domains.',
    image: '/logo/synergy-logo.png',
    tech: ['Platform Development', 'User Management', 'Collaboration Tools', 'Full-Stack'],
    github: 'https://github.com/St-Lucifer0',
    demo: 'https://synergy-consult.vercel.app?/v=1'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-600 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-600 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/St-Lucifer0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium transition-all duration-200"
          >
            <Github size={20} className="mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}