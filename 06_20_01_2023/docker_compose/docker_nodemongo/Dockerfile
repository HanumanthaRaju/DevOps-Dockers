FROM node:8
# Create app directory
WORKDIR app
# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm install ejs
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 8082
CMD [ "npm", "start" ]