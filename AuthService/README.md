# APIs

- Sign up localhost:3001/api/v1/signup - POST request object:

    ```
    {
        email: <email>,
        password: <password>,
    }
    ```
   success response object:

   ```
   {
    "success": true,
    "message": "Successfully created a new user",
    "data": {
        "id": 7,
        "email": "santosh@gmail.com",
        "password": "$2b$10$pNNZxzAkudqxD/4L7Awn5.fz1sj89S5..gcE5niIan5hpep0UpFjK",
        "updatedAt": "2023-11-21T21:49:01.955Z",
        "createdAt": "2023-11-21T21:49:01.955Z"
    },
    "err": {}
  }
   ```

   failure response object:

   ```
   {
  "message": "Something went wrong",
  "data": {},
  "success": false,
  "err": {
      "index": 0,
      "code": 11000,
      "keyPattern": {
          "email": 1
      },
      "keyValue": {
          "email": "santu@gmail.com"
      }
    }
  }
   ```


- Sign in localhost:3002/api/v1/login - POST request object:

    ```
    {
        email: <email>,
        password: <password>,
    }
    ```

    success response object:

    ```
    {
        "success": true,
        "message": "Successfully signed in",
        "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbnRvc2hAZ21haWwuY29tIiwiaWQiOjcsImlhdCI6MTcwMDYwNDAzMCwiZXhwIjoxNzAwNjA3NjMwfQ.tbVKPA6Zi2E5yjn_wUUXeDJlScXqM8LmOTd5A5anZRc",
        "err": {}
    }
    ```

    failure response object:

    ```
    {
        "message": "Something went wrong ",
        "data": {},
        "success": false,
        "err": {
            "error": {
                "error": "Incorrect password"
            }
        }
    }
    ```

    



