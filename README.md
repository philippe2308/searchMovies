# Movie explorer 🎥

In this task you are invited to create a Movie Catalog Explorer 🎬 :)

![](./wf.png)

This image shows the wireframe of the movie catalog you need to implement. Note that You are free to modify it, the image above is just for inspiration :)

The main requirements are:

- The user should be able to search for movies
- The user should be able to paginate the catalog
- We expect you to use React and TypeScript

## Server-side api

This project provides a server-side nodejs API that contains the endpoint to retrieve the list of 1000 movies. 

To start the service API, you need to run:

    yarn start

and use the url: `http://localhost:8080/movies` to request the movie list.

## Additional information

The server API is built on top of the https://github.com/typicode/json-server library. This library offers many features like filtering, sorting and paging.


## New features
 
You can search for movie title, year or director and the application will mark with a yellow color all the sentences that match with what you type on the search bar

![](./img1.jpeg)
![](./img2.jpeg)

Also you can hover any card to read the description of the movie

![](./img3.png)
