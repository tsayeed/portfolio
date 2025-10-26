export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-lg font-medium mb-2">
              Tahsin Al Sayeed
            </p>
            <p className="text-gray-400 text-sm mb-1">
              Fullstack Python Engineer
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="text-center text-sm text-gray-400 space-y-1">
              <p>📍 Dhaka, Bangladesh</p>
              <p>📧 tahsinalsayeed@gmail.com</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all font-medium hover:scale-110 transform duration-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all font-medium hover:scale-110 transform duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

