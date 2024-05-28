# Sử dụng im gốc có Node.js đã cài đặt
FROM node:16.14.0-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (hoặc yarn.lock) vào thư mục /app trong container
COPY package*.json ./

# Cài đặt các dependencies
run npm install

# Sao chép tất cả các file trong thư mục gốc của dự án vào thư mục /app trong container
COPY . .

# Xây dựng ứng dụng Next.js
RUN npm run build

# Mở port mà ứng dụng Next.js sẽ chạy trên container
EXPOSE 4000

# Đặt môi trường production
ENV NODE_ENV=production

# Khởi chạy ứng dụng Next.js
CMD ["npm", "start"]