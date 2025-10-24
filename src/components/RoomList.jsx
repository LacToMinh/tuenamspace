import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard';
import FilterBar from './FilterBar';
import { rooms, amenities, locations } from '../data/rooms';

const RoomList = () => {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price', 'rating'

  const applyFilters = (filters) => {
    let filtered = rooms;

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(room =>
        room.name.toLowerCase().includes(searchTerm) ||
        room.description.toLowerCase().includes(searchTerm) ||
        room.location.toLowerCase().includes(searchTerm) ||
        room.amenities.some(amenity => amenity.toLowerCase().includes(searchTerm))
      );
    }

    // Price range filter
    filtered = filtered.filter(room =>
      room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1]
    );

    // Air Conditioners filter
    if (filters.airConditioners) {
      filtered = filtered.filter(room => room.airConditioners === parseInt(filters.airConditioners));
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(room => room.location === filters.location);
    }

    // Amenities filter
    if (filters.amenities.length > 0) {
      filtered = filtered.filter(room =>
        filters.amenities.every(amenity => room.amenities.includes(amenity))
      );
    }

    // Availability filter
    if (filters.available) {
      filtered = filtered.filter(room => room.available);
    }

    setFilteredRooms(filtered);
  };

  const sortRooms = (sortBy) => {
    const sorted = [...filteredRooms].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    setFilteredRooms(sorted);
  };

  useEffect(() => {
    sortRooms(sortBy);
  }, [sortBy]);

  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Phòng học của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các phòng học hiện đại với đầy đủ tiện nghi, 
            phù hợp cho mọi nhu cầu học tập của bạn
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar 
          onFilterChange={applyFilters}
          amenities={amenities}
          locations={locations}
        />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="text-gray-600 mb-4 sm:mb-0">
            <div className="text-lg">
              Tìm thấy <span className="font-semibold text-blue-600">{filteredRooms.length}</span> phòng học
            </div>
            <div className="flex space-x-4 text-sm mt-2">
              {locations.map((location) => {
                const count = filteredRooms.filter(room => room.location === location).length;
                const isSoSao = location.includes('Sở Sao');
                return (
                  <span key={location} className={`px-3 py-1 rounded-full ${
                    isSoSao 
                      ? 'bg-orange-100 text-orange-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {location.replace('Cơ sở ', '')}: {count} phòng
                  </span>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Sort */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Sắp xếp:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Tên A-Z</option>
                <option value="price">Giá thấp đến cao</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Rooms by Location */}
        {filteredRooms.length > 0 ? (
          <div className="space-y-12">
            {locations.map((location) => {
              const roomsInLocation = filteredRooms.filter(room => room.location === location);
              if (roomsInLocation.length === 0) return null;
              
              const isSoSao = location.includes('Sở Sao');
              
              return (
                <div key={location} className={`space-y-6 p-8 rounded-2xl ${
                  isSoSao 
                    ? 'bg-gradient-to-br from-orange-50 to-orange-100' 
                    : 'bg-gradient-to-br from-green-50 to-green-100'
                }`}>
                  {/* Location Header */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        isSoSao ? 'bg-orange-500' : 'bg-green-500'
                      }`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{location}</h3>
                    </div>
                    <div className={`w-24 h-1 mx-auto rounded-full ${
                      isSoSao ? 'bg-orange-500' : 'bg-green-500'
                    }`}></div>
                    <p className="text-gray-600 mt-4">
                      {roomsInLocation.length} phòng học có sẵn
                    </p>
                  </div>
                  
                  {/* Rooms Grid */}
                  <div className={`${
                    viewMode === 'grid' 
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                      : 'space-y-6'
                  }`}>
                    {roomsInLocation.map((room) => (
                      <RoomCard key={room.id} room={room} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Không tìm thấy phòng học phù hợp
            </h3>
            <p className="text-gray-600 mb-6">
              Hãy thử điều chỉnh bộ lọc để tìm thêm kết quả
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Xem tất cả phòng học
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomList;
