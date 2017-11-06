### React Server-Side Rendering Boilerplate
This project is a pure react SSR boilerplate and it's not created by 3rd party libraries like Next.js

------
Server
------
1.Find the route
2.Load the component (page) and its loadData function
3.Call all the promises in the loadData function
4.Get the data from the promises and shove it into the HTML
5.Respond with rendered HTML and the initialized redux store

------
Client
------
5.Use the initial state
6.Now the client side is responsible for routing