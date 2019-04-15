// write your application configration here
let config = {
  "WWW_PORT": process.env.PORT || "8000",
  "NOTES_URL": process.env.USER_PROFILE_URL || "http://localhost:3001",
  "USERS_URL": process.env.NOTES_URL || "http://localhost:3000",
  "NOTIFICATION_URL": process.env.NOTIFICATIONS_API_URL || "http://localhost:3003"
}


module.exports = config;