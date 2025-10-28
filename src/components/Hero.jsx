import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tìm phòng học
                <span className="text-[#fac000] block">hoàn hảo</span>
                cho bạn
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Không gian học tập hiện đại, tiện nghi với đầy đủ trang thiết
                bị. Phù hợp cho mọi nhu cầu học tập từ cá nhân đến nhóm lớn.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#ffdd53] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  WiFi tốc độ cao
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#ffdd53] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Máy chiếu</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#ffdd53] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Máy lạnh</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#ffdd53] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Ghế êm</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#rooms"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-[#FBCD02] hover:text-black  transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-center"
              >
                <span className="!p-0 !m-0">Xem phòng học</span>
              </a>
              <a
                href="https://zalo.me/0369984849?text=Tôi muốn tư vấn về dịch vụ cho thuê phòng học"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#fbc102] text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-800 hover:border-blue-800 hover:text-white transition-colors font-semibold text-lg text-center"
              >
                Liên hệ tư vấn
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="banner_thinh_gia_2.jpg"
                alt="Modern classroom"
                className="rounded-2xl shadow-2xl w-full h-100 object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Mở cửa 8h00 - 21h00
                  </div>
                  <div className="text-sm text-gray-600">Học tập mọi lúc</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Vị trí thuận tiện
                  </div>
                  <div className="text-sm text-gray-600">Dễ dàng di chuyển</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-20 lg:gap-28 px-4 pt-8 border-t border-gray-200">
        <div className="text-center min-w-[100px]">
          <div className="text-3xl font-bold text-[#001F5D]">
            <span>50</span>
            <span className="text-green-500">+</span>
          </div>
          <div className="text-gray-600">Phòng học</div>
        </div>
        <div className="text-center min-w-[100px]">
          <div className="text-3xl font-bold text-[#001F5D]">
            <span>1000</span>
            <span className="text-red-500">+</span>
          </div>
          <div className="text-gray-600">Học viên</div>
        </div>
        <div className="text-center min-w-[100px]">
          <div className="text-3xl font-bold text-[#001F5D]">
            <span>4.8</span>
            <span className="text-[#fcac01]">★</span>
          </div>
          <div className="text-gray-600">Đánh giá</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
