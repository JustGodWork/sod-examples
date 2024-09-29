# Speaker Of The Day 30/09/2024 Scripts

## HTTP Server

    - Start by executing (node ./1-http_server.js)
    - Access adress `localhost:3000` in web browser

## Rest API

    - Install dependencies (pnpm install express)
    - Start by executing (node ./2-rest_api.js)
    - Make request get/post/put/delete on localhost:3000/products

## Async Request

    - Make all installation steps from Rest API
    - Start by executing (node ./3-async.js)
    - Make a GET request on localhost:3000/async-products

## Middleware

    - Make all installation steps from Rest API
    - Start by executing (node ./3-async.js)
    - Make a GET request on localhost:3000/middleware-demo

## Security

    - Make all installation steps from Rest API
    - Install helmet & bcrypt (pnpm install helmet) (pnpm install bcrypt)
    - Make a POST request on localhost:3000/register { username: string; password: string; }
