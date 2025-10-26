export const rooms = [
  {
    id: 1,
    name: "Phòng học VIP - 2 máy lạnh",
    description:
      "Phòng học cao cấp với 2 máy lạnh, đầy đủ tiện nghi hiện đại, phù hợp cho các khóa học chất lượng cao",
    price: 90000,
    capacity: 20,
    airConditioners: 2,
    amenities: [
      "2 máy lạnh",
      "Máy chiếu",
      "Bảng thông minh",
      "WiFi",
      "Ghế êm",
      "Bàn học cá nhân",
    ],
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    location: "Cơ sở Sở Sao",
    available: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: "Phòng học tiêu chuẩn - 1 máy lạnh",
    description:
      "Phòng học với 1 máy lạnh và không gian thoải mái, phù hợp cho các lớp học thường",
    price: 70000,
    capacity: 15,
    airConditioners: 1,
    amenities: ["1 máy lạnh", "Máy chiếu", "Bảng trắng", "WiFi", "Ghế học"],
    images: [
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    location: "Cơ sở Thịnh Gia",
    available: true,
    rating: 4.5,
    reviews: 18,
  },
  {
    id: 3,
    name: "Phòng học nhóm nhỏ - 1 máy lạnh",
    description:
      "Phòng học ấm cúng với 1 máy lạnh cho nhóm nhỏ, tạo không gian học tập thân thiện",
    price: 70000,
    capacity: 8,
    airConditioners: 1,
    amenities: ["1 máy lạnh", "Bảng trắng", "WiFi", "Ghế êm", "Bàn tròn"],
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    location: "Cơ sở Sở Sao",
    available: true,
    rating: 4.6,
    reviews: 12,
  },
  {
    id: 4,
    name: "Phòng học công nghệ - 2 máy lạnh",
    description:
      "Phòng học được trang bị công nghệ hiện đại với 2 máy lạnh, phù hợp cho các khóa học IT",
    price: 90000,
    capacity: 12,
    airConditioners: 2,
    amenities: [
      "2 máy lạnh",
      "Máy tính",
      "Máy chiếu 4K",
      "Bảng thông minh",
      "WiFi tốc độ cao",
      "Ghế gaming",
    ],
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    location: "Cơ sở Thịnh Gia",
    available: false,
    rating: 4.9,
    reviews: 31,
  },
  {
    id: 5,
    name: "Phòng học thư viện - 1 máy lạnh",
    description:
      "Không gian yên tĩnh với 1 máy lạnh và ánh sáng tự nhiên, lý tưởng cho việc tự học",
    price: 70000,
    capacity: 6,
    airConditioners: 1,
    amenities: [
      "1 máy lạnh",
      "Ánh sáng tự nhiên",
      "WiFi",
      "Ghế đọc sách",
      "Kệ sách",
    ],
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    location: "Cơ sở Sở Sao",
    available: true,
    rating: 4.7,
    reviews: 15,
  },
  {
    id: 6,
    name: "Phòng học hội nghị - 2 máy lạnh",
    description:
      "Phòng học lớn với 2 máy lạnh, phù hợp cho thuyết trình và hội nghị",
    price: 90000,
    capacity: 50,
    airConditioners: 2,
    amenities: ["2 máy lạnh", "Máy chiếu HD", "WiFi", "Ghế VIP"],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    location: "Cơ sở Thịnh Gia",
    available: true,
    rating: 4.8,
    reviews: 28,
  },
];

export const amenities = [
  "1 máy lạnh",
  "2 máy lạnh",
  "Máy chiếu",
  "Bảng thông minh",
  "WiFi",
  "Ghế êm",
  "Bàn học cá nhân",
  "Máy tính",
  "Ánh sáng tự nhiên",
];

export const locations = ["Cơ sở Sở Sao", "Cơ sở Thịnh Gia"];
