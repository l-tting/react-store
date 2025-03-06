# Use latest Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all project files
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start Vite
CMD ["npm", "run", "dev"]
