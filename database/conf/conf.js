db.createUser(
    {
      user: "forecast_user",
      pwd: "your_password2",
      roles: [  { "role": "readWrite", "db":"forecast_db"} ]
    }
 )