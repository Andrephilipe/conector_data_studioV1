FROM node

WORKDIR /AdsSample 
RUN cd /AdsSample
RUN npm install --save facebook-nodejs-business-sdk

RUN npm install

# Copia todos os arquivos da raiz da nossa aplicação para a pasta deinida no WORKDIR
COPY . .

# Expõe a porta 3000 do container
EXPOSE 3000

CMD [ "npm", "start" ]

#CMD ["SAMPLE_CODE.js"]
#ENTRYPOINT ["SAMPLE_CODE.js"]