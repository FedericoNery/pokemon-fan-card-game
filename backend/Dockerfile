# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
# Copy app files
COPY package*.json ./
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
USER node

RUN npm ci

COPY --chown=node:node . .
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 5000
# Start the app
CMD [ "node", "server.js" ]