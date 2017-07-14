# For Rakuten React Training.

Main React conponent is in `app/index.js`

# Usage
## Docker command
### Build image
```sh
docker build -t react_homework .
```
* `-t` for container name

### Run image to container

```sh
docker run --rm -p 8008:8008 --name react_homework -v $PWD:/runtime react_homework
```
* `--rm` for delete container when exit the container
* `-p` for port mapping to host
* `--name` for container name
* `-v` for mount a volume

### Monitor container
```sh
docker exec -it react_homework /bin/bash
```
