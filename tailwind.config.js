module.exports = {
  content: [
    "./index.html",           // Đảm bảo rằng TailwindCSS sẽ áp dụng cho tệp index.html
    "./src/**/*.{js,jsx,ts,tsx}",  // Áp dụng cho tất cả các tệp trong thư mục src, bao gồm các tệp JS, JSX, TS, TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
