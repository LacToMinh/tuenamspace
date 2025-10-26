import React, { useState } from 'react';

const FilterBar = ({ onFilterChange, amenities, locations }) => {
  const [filters, setFilters] = useState({
    search: '',
    priceRange: [0, 100000],
    airConditioners: '',
    location: '',
    amenities: [],
    available: true
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAmenityToggle = (amenity) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    
    handleFilterChange('amenities', newAmenities);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      priceRange: [0, 100000],
      airConditioners: '',
      location: '',
      amenities: [],
      available: true
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Tìm kiếm phòng học</h2>
        <button
          onClick={clearFilters}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Xóa bộ lọc
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tìm kiếm
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Tên phòng học..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Giá (VNĐ/giờ): {filters.priceRange[0].toLocaleString()} - {filters.priceRange[1].toLocaleString()}
          </label>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={filters.priceRange[0]}
              onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            {/* <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider absolute top-0"
            /> */}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0 VNĐ</span>
            <span>100.000 VNĐ</span>
          </div>
        </div>

        {/* Air Conditioners */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Số máy lạnh
          </label>
          <select
            value={filters.airConditioners}
            onChange={(e) => handleFilterChange('airConditioners', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Tất cả</option>
            <option value="1">1 máy lạnh (70k/h)</option>
            <option value="2">2 máy lạnh (90k/h)</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cơ sở
          </label>
          <div className="flex space-x-2">
            <button
              onClick={() => handleFilterChange('location', '')}
              className={`px-2 py-1 rounded-md font-medium transition-colors ${
                filters.location === '' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tất cả
            </button>
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => handleFilterChange('location', location)}
                className={`px-4 my-0 py-2 rounded-xl font-medium transition-colors ${
                  filters.location === location 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {location.replace('Cơ sở ', '')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Tiện nghi
        </label>
        <div className="flex flex-wrap gap-2">
          {amenities.map((amenity) => (
            <button
              key={amenity}
              onClick={() => handleAmenityToggle(amenity)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filters.amenities.includes(amenity)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {amenity}
            </button>
          ))}
        </div>
      </div>

      {/* Availability Toggle */}
      <div className="mt-6 flex items-center space-x-3">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.available}
            onChange={(e) => handleFilterChange('available', e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm font-medium text-gray-700">
            Chỉ hiển thị phòng có sẵn
          </span>
        </label>
      </div>
    </div>
  );
};

export default FilterBar;
