# Technical Questions

### 1. How long did you spend on the coding assignment?

I spent roughly a day on this assignment, or 10-12 hours in total. If I had more time, I would work on a more robust version of the app that pulled additional results after browsing past the first 100 entries (the API only pulls the first 100 results, and requires an additional query with &page=# to get more).

This would also necessitate a more complex page selection system on our app, that "scrolls" page numbers as you move into larger quantities of pages. It may also be beneficial to track page changes through the browser history, which also allows the possibility of quick page traversal via the URL rather than only through the UI.

Furthermore, if I were to have access to a server, I would be able to perform a more robust sort by retrieving **all** entries for a given query and sorting them all at once, rather than only being able to sort based on the first 100 entries. This would require a server because certain queries can produce hundreds of thousands of results, which would be too much computation to expect the client to handle. A server would also open up the opportunity to lazy load, sending only the first few pages worth of data to the client while it takes its time sorting the entire fetch request from Open Library, then accessing the rest as needed without additional calls to the Open Library API.


### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippit of code that shows how you've used it.

The most useful feature that was most recently added to Javascript that I know of is the async function, which allows you to perform operations that may take a long time in the background, while the rest of the script continues to execute.

This, combined with the await keyword, allows synchronous API calling like so:
```
async function APICall() {

  // do stuff

  const data = await fetch("someURL").then(r => r.json());

  // any code after will only execute after the fetch has completed
  // any code outside the async function will execute while the fetch completes
  // but allows synchronous functionality inside the async function without messy .then(...) chains
}
```
Which makes for more readable API calls that are easier to develop and debug.


### 3. How would you track down a performance issue in production? Have you ever had to do this?

First I would need to track down a reproducable series of events that causes the performance issue. Through this, I can narrow down the exact pages/components involved in that series of events, at which point I can separate out individual components and test them using the inputs that the offending issue would be feeding into the component. This is particularly effective in React, as components have easily identifiable inputs and outputs (props, imports, exports).

I have never done this on a scale that would be considered production ready, only for tracking bugs on personal projects that are relatively minor (such as infinitely adding event listeners) that are easily identifiable via console logging.


### 4. How would you improve the API that you just used?

It would be a lot better if sorting functionality was applied on the API call, rather than doing it client side, particularly for queries that produce large results, as the server/database is much better suited for that computation than the client.


### 5. Please describe yourself using correctly formatted JSON.
```
{
  "name": "JingChang Xiao",
  "age": 27,
  "email": "chang.x1994@gmail.com",
  "links": {
    "github" : "https://www.github.com/sinsinkun",
    "portfolio" : "https://changxiao.me"
  },
  "hobbies": [
    "Gaming",
    "Drawing",
    "Coding"
  ]
}
```