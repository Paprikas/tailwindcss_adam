# Following an online video course by Adam Wathan

[Course on Youtube](https://www.youtube.com/watch?v=21HuwjmuS7A&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=1)

## Prerequisites
Install docker, docker-compose

## How to work inside the container
```
# On the first run we have to build it
docker-compose build

# Start server
docker-compose up

# To access bash run
docker-compose run app bash
```

## Video 1
```
# Create package.json
npm init -y

# Install packages
npm install tailwindcss postcss-cli autoprefixer

# Setup tailwind
npx tailwind init
```

## Video 4
```
# Rebuild css
npm run build
```