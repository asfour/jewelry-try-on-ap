# 1) Base image
FROM node:18-alpine

WORKDIR /app

# 2) Install root/server deps
COPY package.json package-lock.json ./
RUN npm ci

# 3) Copy everything
COPY . .

# 4) Build the frontend
WORKDIR /app/web/frontend
RUN npm ci
RUN SHOPIFY_API_KEY="e1194be615353cf6599361b22135e3d0" npm run build

# 5) Return to root for runtime
WORKDIR /app
EXPOSE 3000

# 6) Start your server (adjust if you have a production start script)
CMD ["npm", "run", "start"]
