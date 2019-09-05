## install docker on raspbian
`curl -fsSL get.docker.com | CHANNEL=nightly sh`
`sudo docker pull vaynetian/ndn-astri-docker-iot`
`sudo docker run -v /data/tmp/:/tmp -v /aos:/aos -it --privileged=true --name=ndn-astri-docker-iot --network host -d vaynetian/ndn-astri-docker-iot /bin/bash`
`sudo docker exec -it ndn-astri-docker-iot bash`
## build ndn docker
**use docker image online from dockerhub**

`docker run -v /data/tmp/:/tmp -v /aos:/aos -it --privileged=true --name=ndn-astri-docker --network host -d vaynetian/ndn-astri-docker /bin/bash`

**use local docker image through making dockerfile**

`docker build -t ndn-docker .`

`docker run -v /data/tmp/:/tmp -v /aos:/aos -it --privileged=true --name=ndn-astri-docker --network host -d vaynetian/ndn-docker /bin/bash`

## run ndn docker

**run the container**

`docker exec -it ndn-astri-docker bash`

**update ndn repo**

```
cd ndn \
&& git pull \
&& npm install
```

**run rnode**
```
cd rnode \
&& screen node rnode
```

**run ndn server**

`screen npm run dev`

**install npm**
```
# install nodejs
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash \
    && source ~/.nvm/nvm.sh \
    && nvm install node \
    && nvm use node

# install ndn-server
RUN git clone https://github.com/Dearkano/ndn.git \
    && npm install
```