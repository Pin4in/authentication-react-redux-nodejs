# API

### AUTH API (api/routes/auth.js):
```
post /signup

req { username{String}, email{String}, password{String} }
res { session, user, authenticated }

post /login

req { email{String}, password{String} }
res { session, user, authenticated }

get /logout
result { authenticated }
```
Example of login and signup forms you can find here:

localhost:3030/login

localhost:3030/signup

### USERS API (api/routes/users.js):
```
get /users
res [{User}]

post /users
req { username{String}, email{String}, password{String} }
result userId{String}

get /users/:id
req { id{String} }
res {User}

put /users/:id
req { username{String}, email{String}, password{String} }
res status 200 / 400

delete /users/:id
req { id{String} }
res status 200 / 400
```




