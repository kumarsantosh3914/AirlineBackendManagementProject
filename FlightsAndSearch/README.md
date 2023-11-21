# Welcome to Flights Service

# APIs

- Create City localhost:3001/api/v1/city - POST 
  - request object:

  ```
  {
    name: <cityname>
  }
  ```


  - success response object:

  ```
  {
    "data": {
        "id": 15,
        "name": "Lucknow",
        "updatedAt": "2023-11-06T13:19:39.992Z",
        "createdAt": "2023-11-06T13:19:39.992Z"
    },
    "success": true,
    "message": "Successfully created a city",
    "err": {}
  }
  ```


- Delete City localhost:3001/api/v1/city/15 - DELETE 
  - Success response object:

  ```
  {
    "data": true,
    "success": true,
    "message": "Successfully deleted a city",
    "err": {}
  }
  ``` 


- Get City by id: localhost:3001/api/v1/city/1 - GET
  - Success response object:

  ```
  {
    "data": {
        "id": 1,
        "name": "Mumbai",
        "createdAt": "2023-02-11T19:31:46.000Z",
        "updatedAt": "2023-02-11T19:31:46.000Z"
    },
    "success": true,
    "message": "Successfully fetched a city",
    "err": {}
  }
  ```

- Get all Cities localhost:3001/api/v1/city - GET

  - Success response object:

  ```
  {
      "data": [
          {
              "id": 1,
              "name": "Mumbai",
              "createdAt": "2023-02-11T19:31:46.000Z",
              "updatedAt": "2023-02-11T19:31:46.000Z"
          },
          {
              "id": 2,
              "name": "New Delhi",
              "createdAt": "2023-02-11T19:31:58.000Z",
              "updatedAt": "2023-02-11T19:31:58.000Z"
          },
          {
              "id": 3,
              "name": "Kolkata",
              "createdAt": "2023-02-11T19:32:35.000Z",
              "updatedAt": "2023-02-11T19:32:35.000Z"
          },
          {
              "id": 4,
              "name": "Bengaluru",
              "createdAt": "2023-02-11T19:32:52.000Z",
              "updatedAt": "2023-02-11T19:32:52.000Z"
          },
          {
              "id": 5,
              "name": "Chennai",
              "createdAt": "2023-02-11T19:33:04.000Z",
              "updatedAt": "2023-02-11T19:33:04.000Z"
          },
          {
              "id": 6,
              "name": "Prayagraj",
              "createdAt": "2023-02-11T19:33:15.000Z",
              "updatedAt": "2023-02-11T19:33:15.000Z"
          },
          {
              "id": 7,
              "name": "Ahmedabad",
              "createdAt": "2023-02-11T19:33:32.000Z",
              "updatedAt": "2023-02-11T19:33:32.000Z"
          },
          {
              "id": 8,
              "name": "Pune",
              "createdAt": "2023-02-11T19:33:44.000Z",
              "updatedAt": "2023-02-11T19:33:44.000Z"
          },
          {
              "id": 9,
              "name": "Patna",
              "createdAt": "2023-02-11T19:33:57.000Z",
              "updatedAt": "2023-02-11T19:33:57.000Z"
          },
          {
              "id": 10,
              "name": "Varanasi",
              "createdAt": "2023-02-11T19:34:19.000Z",
              "updatedAt": "2023-02-11T19:34:19.000Z"
          },
          {
              "id": 11,
              "name": "Chandighar",
              "createdAt": "2023-07-03T18:52:02.000Z",
              "updatedAt": "2023-07-03T19:06:24.000Z"
          }
      ],
      "success": true,
      "message": "Successfully fetched all cities",
      "err": {}
  }
  ```

- Create flight: localhost:3001/api/v1/flights - POST
  
  - Success response object:

  ```
  {
    "data": {
        "id": 4,
        "flightNumber": "BA170",
        "airplaneId": "3",
        "departureAirportId": "1",
        "arrivalAirportId": "6",
        "arrivalTime": "2024-01-26T11:00:00.000Z",
        "departureTime": "2024-01-26T08:00:00.000Z",
        "price": "6500",
        "totalSeats": 400,
        "updatedAt": "2023-11-21T21:30:04.459Z",
        "createdAt": "2023-11-21T21:30:04.459Z"
    },
    "success": true,
    "err": {},
    "message": "Successfully created a flight"
  }
  ```

- Get flight by id: localhost:3001/api/v1/flights/2 - GET

  - Success response object:

  ```
  {
    "data": {
        "id": 2,
        "flightNumber": "Uk 820",
        "airplaneId": 4,
        "departureAirportId": 1,
        "arrivalAirportId": 4,
        "arrivalTime": "2023-01-26T11:00:00.000Z",
        "departureTime": "2023-01-26T08:00:00.000Z",
        "price": 4500,
        "boardingGate": null,
        "totalSeats": 320,
        "createdAt": "2023-02-12T22:20:27.000Z",
        "updatedAt": "2023-02-12T22:20:27.000Z"
    },
    "success": true,
    "err": {},
    "message": "Successfully fetched the flight"
  }
  ```

- Get all flight: localhost:3001/api/v1/flights - GET

  - Success response object:

  ```
  {
    "data": [
        {
            "id": 2,
            "flightNumber": "Uk 820",
            "airplaneId": 4,
            "departureAirportId": 1,
            "arrivalAirportId": 4,
            "arrivalTime": "2023-01-26T11:00:00.000Z",
            "departureTime": "2023-01-26T08:00:00.000Z",
            "price": 4500,
            "boardingGate": null,
            "totalSeats": 320,
            "createdAt": "2023-02-12T22:20:27.000Z",
            "updatedAt": "2023-02-12T22:20:27.000Z"
        },
        {
            "id": 3,
            "flightNumber": "Uk 816",
            "airplaneId": 4,
            "departureAirportId": 1,
            "arrivalAirportId": 4,
            "arrivalTime": "2023-01-16T16:00:00.000Z",
            "departureTime": "2023-01-16T13:00:00.000Z",
            "price": 5000,
            "boardingGate": null,
            "totalSeats": 319,
            "createdAt": "2023-02-12T22:38:53.000Z",
            "updatedAt": "2023-08-15T13:20:27.000Z"
        }
    ],
    "success": true,
    "err": {},
    "message": "Successfully fetched the flight"
  }
  ```


- Update flight by id: localhost:3001/api/v1/flights/2 - PATCH

  - Success response object:

  ```
  {
    "data": true,
    "success": true,
    "err": {},
    "message": "Successfully update the flight"
  }
  ```



## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create  `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute

`npx sequelize db:create`

```
## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)
```

- npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
