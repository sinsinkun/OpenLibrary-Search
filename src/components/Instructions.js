function Instructions() {
  return(
    <div>
      <p>
        The task is to create an application that accepts a title as a parameter. 
        The application should then return book results, and for each book should
        display the following information:
      </p>
      <ul>
        <li>Title</li>
        <li>Book Cover</li>
        <li>Author</li>
        <li>Published Date</li>
      </ul>
      <p>
        The application should also have the ability to:
      </p>
      <ul>
        <li>Sort results alphabetically by title</li>
        <li>Sort results by more recently published</li>
        <li>Any other functionality you feel will make this app a better experience</li>
      </ul>
      <p>Requirements:</p>
      <ul>
        <li>Code should compile and run in 1 step</li>
        <li>No UI Library</li>
        <li>Follows WCAG 2.0 AA</li>
        <li>Perform well in lighthouse audit</li>
        <li>Host on heroku/firebase/github</li>
        <li>Technical questions .md</li>
      </ul>
    </div>
  )
}

export default Instructions;