import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rooms } from '../data/rooms';

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const room = rooms.find(r => r.id === parseInt(id));
  
  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy phòng học</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative">
              <img
                src={room.images[currentImageIndex]}
                alt={room.name}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Image Navigation */}
              {room.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {room.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {room.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {room.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageChange(index)}
                    className={`relative overflow-hidden rounded-lg transition-all ${
                      index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${room.name} ${index + 1}`}
                      className="w-full h-20 object-cover hover:scale-105 transition-transform"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">{formatPrice(room.price)}</div>
                  <div className="text-sm text-gray-500">/giờ</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  room.location.includes('Sở Sao') 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {room.location}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {room.capacity} người
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  room.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {room.available ? 'Có sẵn' : 'Đã thuê'}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(room.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700">{room.rating}</span>
                <span className="text-gray-600">({room.reviews} đánh giá)</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mô tả</h3>
              <p className="text-gray-600 leading-relaxed">{room.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tiện nghi</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Button */}
            <div className="pt-6 border-t border-gray-200">
              <a 
                href={`https://zalo.me/0123456789?text=Tôi muốn đặt phòng: ${room.name} - ${room.location} - Giá: ${formatPrice(room.price)}/giờ`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-lg transition-colors font-semibold text-lg ${
                  room.available 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={!room.available ? (e) => e.preventDefault() : undefined}
              >
                {room.available ? 'Đặt phòng qua Zalo' : 'Phòng đã được thuê'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
