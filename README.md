# OperaMea 📝
#### "My Tasks" in Latin

- A small frontend [Next.js](https://nextjs.org/) todos app built with [Typescript](https://www.typescriptlang.org/)
- An API using Next.js's built in [API routes](https://nextjs.org/docs/api-routes/introduction) to handle creating, deleting, and marking todos as complete, with an in-memory "database"

## Spool me up Scottie 🚀

1. Download required packages:

```bash
npm install
# or
yarn
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Go to [http://localhost:3000](http://localhost:3000)

## Technical requirements

- [x] Develop a RESTful API — Alex (the recruiter) said this didn't apply to me, but it is a job interview after all...
- [x] Implement a SPA using the JavaScript framework or UI library that you feel more comfortable using. (React, AngularJS, Vue.JS, ...)

## Nice to have

 - [x] Use Typescript
 - [x] Use React as JavaScript UI library
 - [ ] Use a JavaScript testing framework (such as Jest) — [see below](#the-crud-the-bad-and-the-ugly)
 - [x] Use a local git repository with frequent commits in order to see a little of your working methods
 
 ## User story 1
 ### Acceptance criteria
 - [x] Each task will be represented by a simple textdescription
 - [x] Depending on the type (completed vs pending) the task will be displayed on a different group
 - [x] Initially, this list will be empty
 
  ## User story 2
 ### Acceptance criteria
 - [x] The user should be able to enter a task description
 - [x] The user should be able to add this previous description to his or her to-do list
 - [x] The added to-do will be displayed as a pending task
 
   ## User story 3
 ### Acceptance criteria
 - [x] If the task is pending it will become completed
 - [x] If the task is completed it will become pending
 - [x] The to-do list should be updated accordingly, moving tasks between groups
 
 ## Considerations
 
 ### Packages used
 
 - styled-components — CSS-in-JS styling with access to compoent props for styling logic
 - styled-system — utility functions that add style props to components
 - react-hook-form — removes unnecessary re-renders as form state changes
 
 #### `--dev`/`-D`
 
 - husky, lint-staged & various linting configs — for linting staged changes in order to maintain uniformity, best practices and avoid buggy code being pushed to the remote. Especially useful when working on a shared codebase.
 
 ### The CRUD, the bad and the ugly
 
 - The `<Todo>` component is messy, I was running out of time and trying to make it responsive. I would have preferred to clean it up to read easier
 - I didn't have time to add Cypress tests, which I really wanted to do
