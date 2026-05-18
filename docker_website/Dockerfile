# Step 1: Use an existing web server image as a base
FROM nginx:alpine

# Step 2: Copy your local index.html into the web server's directory inside the image
COPY index.html /usr/share/nginx/html/index.html

# Step 3: Tell Docker that the container listens on port 80
EXPOSE 80