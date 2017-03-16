FROM node:6

WORKDIR /home/user/sna-api

COPY src src/
COPY yarn.lock .babelrc package.json ./

RUN adduser --disabled-password --gecos "" user
RUN chown -R user /home/user
RUN chown -R user /usr/local

USER user

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn
RUN yarn run build

EXPOSE 8000

CMD yarn start
