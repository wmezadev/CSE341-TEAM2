# CSE 341 Team Project

## Project Requirements

This is a team project that you will complete as you do your team assignments for lessons 9-13 in this course. Because of the scope of this project, you will not have any personal assignments for the duration of it so that you can focus all of your time on this team project.

- You get to choose what this project is
- Database should store at least 4 collections
- At least one collection should store documents that have 7 fields or more
- Node project successfully connects to MongoDB
- API routes perform GET, POST, PUT, DELETE requests that are fully functional
- All routes should include data validation and error handling
- All routes should include unit tests
- Project must use OAuth to handle authentication and user management.
- API Documentation is professional, comprehensive, relevant, accurate, and functional as a REST client.
- API is published to Render and can be accessed at this route: '/api-docs'
- YouTube video demonstration demonstrating each - - API route in API documentation, and showing the database being modified.
- Submit the following links in I-learn: GitHub repo, Render site, and YouTube video.

### Grading Criteria

- Your assignment will receive a zero if it doesn't have a YouTube link, a GitHub link, AND a Render link submitted in I-learn.
- Your assignment will receive a zero if any type of cheating takes place.
- The grading breakdown is depicted in the rubric below. Remember that this rubric is for the project as a whole. Students on teams will all receive individual grades based on their participation in the group. This data will be gathered in I-learn from weeks 9-13 to assess the participation of each group member, and in turn calculate their final project grade. Your instructor will input all of the data from each member of your team during the project and input it into a copy of [this spreadsheet](https://docs.google.com/spreadsheets/d/1Gu0GVpXDnscza3lVOOpn_jBqAbqGsKvHlZ0IVqYNWao/edit?usp=sharing). You may put numbers in here if you wish to understand more fully how your data will be used each lesson.

### Extra Credit Opportunity

- 20% for using GraphQL instead of REST
- 20% for using valid TypeScript for your entire Node project
- Discuss details with your instructor

### Rubric

| Criteria | Weight | Mastery 100% | Proficient 90% | Deeloping 78% | Beginning 65% | Missing/Incomplete 0% |
|---|---|---|---|---|---|---|
| Deployed to the Web(Graded via YouTube) | 15% | Meets Proficient criteria and video shows use of Render CONFIG VARS to connect to MongoDB | Meets Developing criteria and app connects to MongoDB | Meets Beginning criteria and Render url can be opened without any errors | Node.js app deployed to Render | Render link or YouTube link not submitted |
| OAuth(Graded via YouTube) | 15% | Meets Proficient criteria and the video shows that each protected route (needs authentication) requires authentication before access | Meets Developing criteria and user can log out using OAuth | Meets Beginning criteria and user can log in using OAuth | Evidence of OAuth is in the Node.js project | GitHub link or YouTube link not submitted, or No evidence of OAuth in project |
| HTTP Requests(Graded via YouTube) | 15% | Meets Proficient criteria plus at least 4 collections have a PUT or DELETE request (MongoDB change is shown in video) | Meets Developing criteria plus at least 4 collections have a POST request (MongoDB change is shown in video) | Meets Beginning criteria plus at least one HTTP Request is present for each collection in the database | Several HTTP Requests are in the project and work (shown in video) | GitHub link, Render link or YouTube link not submitted, or no evidence of HTTP Requests |
| Testing(Graded via YouTube and GitHub) | 15% | Meets Proficient criteria and unit tests exist and pass for main server.js file and .js files in routes folder | Meets Developing criteria and YouTube video shows all tests running and passing | Meets Beginning criteria and GitHub shows at least one unit test file for each .js file in the controllers folder | GitHub shows that at least one unit test file exists (".spec.js") | GitHub link or YouTube link not submitted, or No evidence of unit testing in project |
| Database(Graded via YouTube) | 10% | Meets Proficient criteria and at least one collection features documents with at least 7 fields | Meets Developing criteria and database has at least 4 collections | Meets Beginning criteria and database has a single collection | Database exists and is shown in the video | GitHub link or YouTube link not submitted, or No evidence of Database in project |
| API Documentation(Graded via Render) | 10% | Meets Proficient criteria and the documentation can test each endpoint (video should show MongoDB being updated | Meets Developing criteria and the documentation is published (either to Render at "/api-docs" route, or to apollo server) | Meets Beginning criteria and documentation is organized by collection | The swagger.json file is present (or Apollo server is shown in video for graphql extra credit) | Render link, GitHub link, or YouTube link not submitted. Or no evidence of API documentation |
| Data Validation(Graded via GitHub) | 10% | Meets Proficient criteria and each route has data validation, and returns some type of 400 or 500 error if data requirements aren't met | Meets Developing criteria and data validation is being used for each PUT and DELETE route | Meets Beginning criteria and data validation is being used for each GET and POST route | Node project has evidence of data validation (for example: checks for at least one variable's existence before continuing) | GitHub link or Render link not submitted. Or no evidence of Data Validation |
| Error Handling(Graded via GitHub) | 10% | Meets Proficient criteria and each route has error handling, and returns some type of 400 or 500 errors get thrown | Meets Developing criteria and error handling is being used for each PUT and DELETE route | Meets Beginning criteria and error handling is being used for each GET and POST route | Node project has evidence of error handling (for example: at least one try/catch) | GitHub link or Render link not submitted. Or no evidence of Error Handling |
| Extra CreditGraphQL instead of REST(Graded via YouTube) | 20% | Meets Proficient criteria and REST is not used at all, only GraphQL (should be shown in YouTube video) | Meets Developing criteria and project uses GraphQL to access and modify MongoDB (should be shown in YouTube video) | Meets Beginning criteria and project uses GraphQL for some aspects (should be shown in YouTube video) | GitHub link (perhaps in previous commits) and YouTube video show that GraphQL was attempted | GitHub link, Render link, or YouTube link not submitted |
| Extra CreditTypeScript(Graded via YouTube) | 20% | Meets Proficient criteria and there is not a single file in project with ".js" extension. All JavaScript files have been replaced with error-free TypeScript (.ts) files | Meets Developing criteria and project uses TypeScript for all files in "controllers" folder | Meets Beginning criteria and project uses TypeScript for some aspects (should be shown in YouTube video and evident in GitHub repository) | GitHub link (perhaps in previous commits) and YouTube video show that TypeScript was attempted | GitHub link, Render link, or YouTube link not submitted |


## Collaborators

- [@wmezadev](https://github.com/wmezadev/)