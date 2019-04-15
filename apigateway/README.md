Users API - URLs:
-----------------
Login (POST) - http://localhost:8000/users/login
Register (POST) - http://localhost:8000/users/register
Get Registered Users (GET) - http://localhost:8000/users/getUsers
Test (GET) - http://localhost:8000/users/
User Authentication Test for Bearer Token (POST) - http://localhost:8000/auth/

Notes API - URLs:
-----------------
Get Notes for UserID (GET) - http://localhost:8000/notes/?userId=pri
Create Notes for UserID (POST) - http://localhost:8000/notes/?userId=pri
Share One or More Notes (PUT) - http://localhost:8000/notes/share
Delete One or More Notes (POST) - http://localhost:8000/notes/delete
Add Note to Favourite (PUT) - http://localhost:8000/notes/addFavorites
Remove Note from Favourite (PUT) - http://localhost:8000/notes/removeFavorites
Group One or More Notes (PUT) - http://localhost:8000/notes/addGroup
Check Note is allowed for a UserID (GET) - http://localhost:8000/notes/:noteid/isAllowed?userId=pri
Get Note for NoteID (GET) - http://localhost:8000/notes/:noteid/
Update Note for NoteID (PUT) - http://localhost:8000/notes/:noteid/

Notification API - URL:
-----------------
Add Notification for other User (POST) - http://localhost:8000/notifications/?userId=pri
Get Reminders for UserID (GET) - http://localhost:8000/notifications/reminders/?userId=pri
Add Reminders for UserID (POST) - http://localhost:8000/notifications/reminders/?userId=pri
Get Reminders for reminderID (GET) - http://localhost:8000/notifications/reminders/:reminderId/
Sooze Reminders for reminderID (PUT) - http://localhost:8000/notifications/reminders/?userId=pri
Dismiss Reminders for reminderID (DELETE) - http://localhost:8000/notifications/reminders/?userId=pri
