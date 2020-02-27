<h1 align=center>Robert Griffith - ClearBank Solution</h1>

<h2 align=center>An app where you can rate random cat images from 0 - 5</h2>

<div align="center">

[Usage ](#usage) |
[CI/CD ](#CI/CD) |
[Tests ](#Tests) |
[Extending](#extending)

</div>
<img src="https://travis-ci.com/bibbycodes/rate-my-cat.svg?branch=master">

<h3><a href="https://rate-my-cat.herokuapp.com/">Click here to use the app<a></h3>
  
# Usage
Clone this repo.

#### Install Packages:
`npm install && cd client && npm install`
#### Create DB and tables:
Type in `psql` into the command line
Create the database:

```sql
CREATE DATABASE cats;
``` 

Next add the table:
```sql
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  rating INTEGER NOT NULL,
  url VARCHAR(4000) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

make sure you have a `.env` file in the root directory with the following configuration:
```
API_KEY=<YOUR_API_KEY>
NODE_ENV=development
DB_NAME=cats
DB_USER_LOCAL=<YOUR_POSTGRES_USERNAME>
```

# Tests

To run the tests simply enter `npm run test` into the console. This will provide test results.

```bash
  Rating
    ✓ retrieves all ratings for an image
    ✓ adds a ratings to the db (90ms)
    ✓ retrieves all ratings

  server routes
    server routes
      ✓ returns 50 results when hitting /cats (831ms)
      ✓ returns 1 result when hitting /cats/random (543ms)


  5 passing (2s)
```

#### CI/CD
I used Travis CI for continuous integration. This meant that I was confident that all tests were passing and that branches were safe to merge.
The app is then deployed automatically to Heroku if tests pass on the master branch.


# Extending

If I had more time I would have added styles to the page. I would have also preffered to use mongoDB or another noSQL database since there are no relations in the tables. I also attempted to deploy to AWS using terraform but I didnt have enough time to fully implement that, so I opted for Heroku instead. I would have also liked to add unit tests for my react components. Additionally, it would have been nice to write some logic to ensure that the average rating is displayed in the leader boards. As it stands if the same image is rated twice, it will show up twice in the leaderboards.