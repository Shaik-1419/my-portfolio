import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Palette,
  Monitor,
  Smartphone,
  ArrowUp,
  Send
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Creative Developer'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= currentRole.length) {
        setTypedText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (index > 0) {
              setTypedText(currentRole.slice(0, index));
              index--;
            } else {
              clearInterval(deleteInterval);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 100);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern React-based shopping platform with real-time inventory',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#',
      github: '#'
    },
    {
      title: 'Weather app dashboard',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/8890451/pexels-photo-8890451.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#',
      github: '#'
    },
    {
      title: 'Quiz Management System',
      description: 'Analytics dashboard with machine learning insights',
      tech: ['Java', 'React', 'D3.js', 'TensorFlow'],
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#',
      github: '#'
    }
  ];

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'MongoDB', level: 82 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/50 via-transparent to-cyan-900/50 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section ? 'text-purple-400 border-b-2 border-purple-400' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-slideDown">
              {['home', 'about', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-shimmer">
              Shafeena Banu
            </h1>
            <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
              <span className="text-gray-300">I'm a </span>
              <span className="ml-2 text-purple-400 font-semibold min-w-80 text-left">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </div>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, functional, and user-friendly digital experiences with passion and precision.
            </p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m a passionate and ambitious Information Technology student with a strong interest in web development, AI integration, and creative problem-solving. As a fresher, I bring a learner’s mindset, adaptability, and a drive to build innovative, user-friendly, and impactful digital experiences.

I have hands-on knowledge of HTML, CSS, JavaScript, React.js, and Tailwind CSS, along with experience in Python and Java from academic and personal projects. My journey includes building projects like e-commerce platforms, clones of popular apps, and interactive web applications.

I am eager to contribute to meaningful projects, collaborate with diverse teams, and continue expanding my skills to stay ahead in the ever-evolving tech landscape. My goal is to turn ideas into functional, visually appealing solutions that make a difference.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open source projects, or capturing moments through photography.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Code className="mx-auto mb-2 text-purple-400" size={32} />
                  <h3 className="font-semibold">Development</h3>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Palette className="mx-auto mb-2 text-pink-400" size={32} />
                  <h3 className="font-semibold">Design</h3>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Monitor className="mx-auto mb-2 text-cyan-400" size={32} />
                  <h3 className="font-semibold">Web Apps</h3>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Smartphone className="mx-auto mb-2 text-green-400" size={32} />
                  <h3 className="font-semibold">Mobile</h3>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fadeInRight">
              <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-skillBar"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      <a
                        href={project.demo}
                        className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.github}
                        className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fadeInLeft">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's work together!</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to take on new challenges and create amazing projects.
                  Whether you have a project in mind or just want to chat about technology,
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Mail className="text-purple-400" size={24} />
                  <span className="text-lg">skshafeenabanu@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Phone className="text-pink-400" size={24} />
                  <span className="text-lg">+91 7386571419</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <MapPin className="text-cyan-400" size={24} />
                  <span className="text-lg">Guntur, Andhra Pradesh</span>
                </div>
              </div>

              <div className="flex space-x-6 pt-6">
                <a
                  href="#"
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <form className="space-y-6 animate-fadeInRight">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Shafeena Banu. Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;