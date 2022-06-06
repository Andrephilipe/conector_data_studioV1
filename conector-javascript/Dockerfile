FROM node

WORKDIR /AdsSample 
RUN cd /AdsSample

RUN npm install --save facebook-nodejs-business-sdk

#WORKDIR /usr/src/app
COPY SAMPLE_CODE.js /AdsSample

COPY package*.json ./
#COPY SAMPLE_CODE.js /usr/src/app/

CMD [ "npm", "start" ]

#CMD ["SAMPLE_CODE.js"]
#ENTRYPOINT ["SAMPLE_CODE.js"]