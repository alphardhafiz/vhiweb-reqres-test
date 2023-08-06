source api : https://reqres.in/

There are page:

1. Login Page = path('/')
   login with email = eve.holt@reqres.in
   password = test
   if success this form login will direct to User page

2. Users Page = path('/users/page/:id')
   there are list of users from api: https://reqres.in/api/users?page=1
   each list containts a name and a button to view user details Page

at the bottom there are 2 buttons, that say 1 and 2. This button
will direct to another user list

3. Detail Page = path('/users/detail/:id')
   this detail page contains user details such as email, name and avatar
