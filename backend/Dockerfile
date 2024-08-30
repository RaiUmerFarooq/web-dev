FROM node:18
WORKDIR /app
# Install MongoDB
# RUN apt-get update && \
#     apt-get install -y wget gnupg curl && \
#     curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
#     gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg && \
#     echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
#     tee /etc/apt/sources.list.d/mongodb-org-7.0.list && \
#     apt-get update && \
#     apt-get install -y mongodb-org && \
#     echo "mongodb-org hold" | dpkg --set-selections && \
#     echo "mongodb-org-database hold" | dpkg --set-selections && \
#     echo "mongodb-org-server hold" | dpkg --set-selections && \
#     echo "mongodb-mongosh hold" | dpkg --set-selections && \
#     echo "mongodb-org-mongos hold" | dpkg --set-selections && \
#     echo "mongodb-org-tools hold" | dpkg --set-selections
#  #   systemctl start mongod
# RUN mkdir -p /data/db
# RUN mongod

COPY package*.json ./
RUN npm install -g nodemon
RUN npm install 
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]
