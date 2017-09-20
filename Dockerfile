FROM node:6.11.3
MAINTAINER Scott Thorpe <sthorpe@gmail.com>
ADD . /src
WORKDIR /src
EXPOSE 8081
CMD ["npm", "install"]