# EduSpace - Trang Web Cho Thuê Phòng Học

Một ứng dụng web hiện đại được xây dựng với React và Tailwind CSS để quản lý và cho thuê phòng học.

## 🚀 Tính năng chính

### ✨ Giao diện người dùng
- **Thiết kế hiện đại**: Giao diện đẹp mắt với Tailwind CSS
- **Responsive**: Tương thích với mọi thiết bị (desktop, tablet, mobile)
- **Trải nghiệm mượt mà**: Animations và transitions chuyên nghiệp

### 🏢 Quản lý phòng học
- **Danh sách phòng đa dạng**: 6 loại phòng học khác nhau
- **Thông tin chi tiết**: Giá cả, sức chứa, tiện nghi, đánh giá
- **Hình ảnh chất lượng**: Gallery hình ảnh cho mỗi phòng

### 🔍 Tìm kiếm và lọc
- **Tìm kiếm thông minh**: Theo tên phòng và mô tả
- **Bộ lọc đa dạng**: Giá cả, sức chứa, vị trí, tiện nghi
- **Sắp xếp linh hoạt**: Theo tên, giá, đánh giá
- **Chế độ xem**: Grid và List view

### 📅 Đặt phòng
- **Modal đặt phòng**: Form đặt phòng chi tiết
- **Tính toán giá**: Tự động tính giá theo thời gian
- **Thông tin liên hệ**: Thu thập thông tin khách hàng
- **Xác nhận**: Thông báo xác nhận đặt phòng

### 📞 Liên hệ
- **Form liên hệ**: Gửi tin nhắn trực tiếp
- **Thông tin liên hệ**: Địa chỉ, điện thoại, email
- **Bản đồ**: Vị trí trung tâm

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash API

## 📁 Cấu trúc dự án

```
src/
├── components/          # Các component React
│   ├── Header.jsx       # Header với navigation
│   ├── Hero.jsx         # Hero section
│   ├── RoomList.jsx     # Danh sách phòng học
│   ├── RoomCard.jsx     # Card phòng học
│   ├── FilterBar.jsx    # Thanh lọc và tìm kiếm
│   ├── BookingModal.jsx # Modal đặt phòng
│   ├── About.jsx        # Giới thiệu về dịch vụ
│   ├── Contact.jsx      # Form liên hệ
│   └── Footer.jsx       # Footer
├── data/
│   └── rooms.js         # Dữ liệu phòng học
├── pages/               # Các trang (nếu có)
├── utils/               # Utilities (nếu có)
├── App.jsx             # Component chính
├── App.css             # CSS chính
└── index.css           # CSS global
```

## 🚀 Cách chạy dự án

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Cài đặt và chạy

1. **Clone repository**
```bash
git clone <repository-url>
cd rent-room
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
npm run dev
```

4. **Mở trình duyệt**
Truy cập `http://localhost:5173`

### Build cho production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## 📱 Responsive Design

Ứng dụng được thiết kế responsive với các breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.js` để thay đổi color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

### Thêm phòng học mới
Chỉnh sửa file `src/data/rooms.js` để thêm phòng học mới:

```javascript
{
  id: 7,
  name: "Tên phòng mới",
  description: "Mô tả phòng",
  price: 250000,
  capacity: 10,
  amenities: ["Tiện nghi 1", "Tiện nghi 2"],
  images: ["url-hình-ảnh"],
  location: "Tầng X",
  available: true,
  rating: 4.5,
  reviews: 15
}
```

## 🔧 Tính năng nâng cao có thể thêm

- [ ] **Backend API**: Kết nối với server thực
- [ ] **Authentication**: Đăng nhập/đăng ký
- [ ] **Payment**: Tích hợp thanh toán online
- [ ] **Calendar**: Lịch đặt phòng trực quan
- [ ] **Reviews**: Hệ thống đánh giá phòng
- [ ] **Notifications**: Thông báo real-time
- [ ] **Admin Panel**: Quản lý phòng học
- [ ] **Multi-language**: Đa ngôn ngữ

## 📄 License

Dự án này được phát hành dưới MIT License.

## 👥 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

---

**EduSpace** - Không gian học tập hiện đại cho mọi người! 🎓✨

