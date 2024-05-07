FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/sataniceypz/Izumi-v2 /root/bot/
WORKDIR /root/bot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
