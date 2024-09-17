/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Đảm bảo đường dẫn chính xác
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'background-chart': '#161616',
        'text-content': '#fff', 
        "mauxanh": "#25b770", // màu xanh
        "maudo" : "#e14040",
        "link": "#006CEC",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#EC8000", // Cam sáng
          "primary-content": "#130600", // Đen đậm, dùng cho nội dung trên nền primary
          "secondary": "#A7ADB2", // Xám sáng
          "secondary-content": "#0a0b0c", // Đen gần như tuyệt đối, dùng cho nội dung trên nền secondary
          "accent": "#A7ADB2", // Xám sáng, màu phụ
          "accent-content": "#0a0b0c", // Đen gần như tuyệt đối, dùng cho nội dung trên nền accent
          "neutral": "#25b770", // Xanh lá cây sáng
          "neutral-content": "#000c04", // Đen gần như tuyệt đối, dùng cho nội dung trên nền neutral
          "link": "#006CEC", // Xanh dương đậm, màu của liên kết
          "button": "#006CEC", // Xanh dương đậm, màu của nút bấm
          "background": "#0A0A0A", // Đen tối, màu nền chính
          "background-chart": "#161616" // Xám đen, màu nền cho biểu đồ
        },
      },
    ],
  },
}
