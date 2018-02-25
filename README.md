# Readable

## Overview
This is my final project for the Udacity Redux course as part of the React Nanodegree program. This project was created on top of the [local backend development server](https://github.com/udacity/reactnd-project-readable-starter) and bootsrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Readable is an app where users can enter posts and comments. You can post content to categories, comment on posts, vote on posts and comments, and edit and delete posts and comments. Posts and comments display a number that represents the amount of
times a user has clicked on the upvote or downvote button. The number displayed
to the UI is either a positive (upvoted) or negative (downvoted) number.

## Getting Started
To view this project for the first time:
1. ensure that `node` and `npm` are installed
2. fork, clone or download this repository
3. install and start the local backend server
    - navigate to project root
    - `cd api-server`
    - `npm install`
4. use another shell window to install the frontend
    - navigate to project root
    - `cd src`
    - `npm install`
5. start the backend server within the `./api-server` directory
    - `node server.js`
6. start the frontend server within the `./src` directory
    - `npm start`

Once installed, you only need to navigate to and start the two servers in the future:
1. for the backend: open `./api-server` and start the server with `node server.js`
2. for the frontend: open `./src` and start the app with `npm start`

### What am I installing?
This project was built in React with Redux and has the following dependencies:
- Node and npm
- React: ^16.2.0
- React DOM:  `react-dom`, ^16.2.0
- Icons: `react-google-material-icons`, ^1.0.4
- React scripts: `react-scripts`, 1.1.0
- Redux: `redux` and `react-redux`, ^3.7.2
- Router: `react-router-dom`, ^4.2.2
- Forms: `serialize-form`, ^1.1.4
- Sort: `sort-by`, ^1.2.0
- Middleware: `redux-thunk`, ^2.2.0
- Selectors: `reselect`
- UUID generator: `uuid`

### Shape of the backend
An API server is available for local development and testing. There are three types of objects stored on the server:
- Categories
- Posts
- Comments

Being a single-page app with a router, frontend endpoints differ from the backend. For example, where the frontend takes in `/:category/:post_id` to direct the user to a post's details, the local RESTful API employs `GET /posts/:id`.

For more information on endpoints, usage and required parameters, see the [documentation](https://github.com/Botmasher/reactnd-readable/blob/master/api-server/README.md) in the `./api-server` subdirectory.

## Frontend Architecture

### Components
Following the [project rubric](https://review.udacity.com/#!/rubrics/1017/view), this application was initially developed with four views in mind: root, category, post detail, create/edit and post/comment. These aim to fulfill the following expectations from Udacity.

#### Default (Root)
- should list all available categories, which should link to a category view for that category
- should list all of the posts ordered by voteScore (highest score first)
- should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
- should have a control for adding a new post

#### Category View
- identical to the default view, but filtered to only include posts with the selected category

#### Post Detail View
- should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
- should list all of the comments for that post, ordered by voteScore (highest first)
- should have controls to edit or delete the post
- should have a control to add a new comment.
- implement comment form however you want (inline, modal, etc.)
- comments should also have controls for editing or deleting

#### Create/Edit View
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form

#### Post/Comment UI
Posts and comments, in all views where they are displayed, should display their current score and should have controls to increment or decrement the voteScore for the object. Posts should display the number of comments associated with the post.
