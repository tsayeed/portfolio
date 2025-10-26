import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center max-w-5xl relative z-10">
          <div className="inline-block mb-6 px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate-bounce-slow">
            👋 Open to new opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4 leading-tight">
            Tahsin Al Sayeed
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
            Fullstack Python Engineer
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Building scalable systems and robust APIs with <span className="text-blue-600 font-semibold">3+ years</span> of hands-on experience in Python, Django, FastAPI, PostgreSQL, Docker, AWS, and ReactJS
          </p>
          <div className="flex gap-4 justify-center flex-wrap px-4">
            <Link
              href="#experience"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>View Experience</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-blue-300 hover:scale-105"
            >
              Read My Blog
            </Link>
          </div>

          {/* Floating Tech Icons */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 text-4xl sm:text-5xl opacity-40">
            <span className="animate-float">🐍</span>
            <span className="animate-float animation-delay-1000">⚛️</span>
            <span className="animate-float animation-delay-2000">🐳</span>
            <span className="animate-float animation-delay-3000">☁️</span>
            <span className="animate-float animation-delay-4000">⚡</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a <span className="font-semibold text-gray-900">Fullstack Engineer</span> with 3+ years of hands-on experience designing, 
                developing, and implementing solutions using a range of technologies and programming languages.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently working as a <span className="font-semibold text-gray-900">Full Stack Engineer at ReformedTech</span>, 
                I specialize in building modern, performant, and robust applications for diverse clients. 
                My expertise spans across Python, Django, FastAPI, PostgreSQL, Docker, TypeScript, ReactJS, and AWS.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm passionate about solving real-world problems through technology and continuously learning new tools and frameworks 
                to deliver high-quality solutions.
              </p>
              <div className="pt-4 flex gap-4">
                <Link 
                  href="mailto:tahsinalsayeed@gmail.com"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Get in touch →
                </Link>
                <a 
                  href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 font-semibold hover:text-gray-900 transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-10 rounded-2xl shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <span className="text-lg">Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💼</span>
                  <span className="text-lg">Full Stack Engineer at ReformedTech</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🎓</span>
                  <span className="text-lg">BSc in Computer Science & Engineering<br/>University of Dhaka (CGPA: 3.69)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🚀</span>
                  <span className="text-lg">Led teams and built scalable microservices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Work Experience</h2>
          <p className="text-center text-gray-600 mb-12 sm:mb-16 text-base sm:text-lg px-4">My professional journey in software development</p>
          
          <div className="space-y-6 sm:space-y-8">
            {/* ReformedTech */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Full Stack Engineer</h3>
                  <p className="text-lg sm:text-xl text-blue-600 font-semibold">ReformedTech</p>
                </div>
                <span className="text-sm sm:text-base text-gray-600 font-medium mt-2 md:mt-0">June 2021 - Present</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Write modern, performant, and robust code for a diverse array of client and internal projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Develop multiple applications for clients from scratch. Develop <strong>GraphQL</strong> and <strong>gRPC</strong> based APIs with documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Work with teams to ideate and improve existing projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Work with variety of languages, frameworks and libraries including <strong>Python, Django, FastAPI, PostgreSQL, Docker, TypeScript, ReactJS, AWS</strong></span>
                </li>
              </ul>
            </div>

            {/* Brick Line Technology */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-purple-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Software Engineer</h3>
                  <p className="text-lg sm:text-xl text-purple-600 font-semibold">Brick Line Technology</p>
                </div>
                <span className="text-sm sm:text-base text-gray-600 font-medium mt-2 md:mt-0">December 2018 - May 2021</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▹</span>
                  <span>Lead a team of 4 developers to build a SPA for a cloud based online learning management system using <strong>VueJs, S3 and Cloudfront</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▹</span>
                  <span>Implement a distributed and highly scalable event-driven microservice based web application using <strong>Python(Falcon), Amazon DynamoDB, MySQL, and Redis Stream</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▹</span>
                  <span>Introduce <strong>trunk based development</strong> strategy as well as build a fully automated <strong>CI/CD pipeline using Bitbucket Pipelines</strong> and custom scripts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▹</span>
                  <span>Liasing with the Editing, Quality assurance & Marketing team and other stakeholders on behalf of the team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▹</span>
                  <span>Key achievements: ABR video streaming using AWS MediaConvert and Fastly, Online store with Stripe and Bkash integration, Search engine for courses, Social Login(Google, Facebook)</span>
                </li>
              </ul>
            </div>

            {/* Freelance Projects */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-green-600 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Freelance Developer</h3>
                <p className="text-lg sm:text-xl text-green-600 font-semibold">Notable Projects</p>
              </div>
              
              <div className="space-y-6">
                {/* Donation Portal */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-800">MSc Registration Portal - University of Dhaka</h4>
                    <span className="text-gray-600 text-sm mt-1 md:mt-0">January 2020</span>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span>Designed and developed registration portal used by <strong>1000+ applicants</strong> for registration, payment, and seeing results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span>Built highly available RESTful web service using <strong>PHP(Laravel) and MySQL</strong> with SPA web client using VueJs</span>
                    </li>
                  </ul>
                </div>

                {/* CSE Donation Portal */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-800">Donation Portal - Department of CSE, University of Dhaka</h4>
                    <span className="text-gray-600 text-sm mt-1 md:mt-0">July 2019</span>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span>Designed and developed a client facing crowdfunding web application using <strong>MVLA(MySQL, VueJs, Laravel, Apache)</strong> stack</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span>Responsible for full life-cycle of the product, from design to deployment as well as testing and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Illustration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">💻</div>
          <div className="absolute bottom-10 right-10 text-9xl">☁️</div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              The tools and technologies I work with to build modern, scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Backend */}
            <div className="group bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-all border border-blue-100">
                <span className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">⚙️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Python</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Django</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">FastAPI</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Falcon</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Node.js</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">PHP/Laravel</span>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="group bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-green-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-all border border-green-100">
                <span className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">🗄️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors">Databases</h3>
              <div className="space-y-4">
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">PostgreSQL</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">MySQL</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Redis</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">MongoDB</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">DynamoDB</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Elasticsearch</span>
                </div>
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="group bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-orange-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-all border border-orange-100">
                <span className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">☁️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors">DevOps & Cloud</h3>
              <div className="space-y-4">
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">AWS</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Docker</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">CI/CD</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Git/GitHub</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">GraphQL</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">gRPC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          {/* Decorative Element */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 sm:mb-16">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Recent Posts</h2>
                <p className="text-gray-600 text-base sm:text-lg">Insights on backend development and system design</p>
              </div>
              <Link 
                href="/blog" 
                className="hidden md:inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors group"
              >
                View all posts 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="text-center mt-12 md:hidden">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                View all posts →
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
