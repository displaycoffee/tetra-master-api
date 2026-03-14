# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
# Only install production dependencies (no devDependencies)
RUN npm install --omit=dev
# Copy only the compiled JS from the builder stage
COPY --from=builder /app/dist ./dist
# If you are importing swagger.json, ensure it's copied over
COPY --from=builder /app/src/swagger.json ./dist/swagger.json

EXPOSE 3000
CMD ["node", "dist/index.js"]