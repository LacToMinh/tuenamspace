import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled 
    ? 'bg-transparent backdrop-blur-md shadow-md border-b border-white/20'
    : 'bg-[#FCC901]'
}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#001F5D]">
                <span className="text-white bg-[#001F5D] px-[4px] rounded-sm">
                  Tuenam
                </span>
                Space
              </h1>
              <p className="text-[13px] text-black">Cho thuê phòng học</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 uppercase">
            <a
              href="#home"
              className="text-gray-900 text-[18px] hover:text-blue-600 font-bold transition-colors"
            >
              Trang chủ
            </a>
            <a
              href="#rooms"
              className="text-gray-900 text-[18px] hover:text-blue-600 font-bold transition-colors"
            >
              Phòng học
            </a>
            <a
              href="#about"
              className="text-gray-900 text-[18px] hover:text-blue-600 font-bold transition-colors"
            >
              Về chúng tôi
            </a>
            <a
              href="#contact"
              className="text-gray-900 text-[18px] hover:text-blue-600 font-bold transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 ">
            <a
              href="https://zalo.me/0369984849?text=Tôi muốn tư vấn về dịch vụ cho thuê phòng học"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#001F5D] text-[18px] text-white px-4 py-[7px] pb-[10px] rounded-lg hover:bg-blue-900 transition-colors font-medium"
            >
              Đặt phòng ngay
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Trang chủ
              </a>
              <a
                href="#rooms"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Phòng học
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Về chúng tôi
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Liên hệ
              </a>
              <a
                href="https://zalo.me/0369984849?text=Tôi muốn tư vấn về dịch vụ cho thuê phòng học"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-2 bg-[#FCC901] text-black rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Đặt phòng ngay
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
