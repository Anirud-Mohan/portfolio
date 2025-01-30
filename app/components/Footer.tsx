const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/anirud-mohan/" className="hover:text-gray-300 transition duration-300">
              LinkedIn
            </a>
            <a href="https://github.com/Anirud-Mohan" className="hover:text-gray-300 transition duration-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

