var ourRequest = new XMLHttpRequest();
//where to do get or post data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//what to do after established
ourRequest.onload = function() {
   // console.log(ourRequest.responseText) <-- for checking in console

   //save retrieved data into a variable, "ourRequest.responseText" treats data as String from the site
    //var ourData = ourRequest.responseText;

    //below the requested URL will pass thru the JSON filter 
    var ourData = JSON.parse(ourRequest.responseText);

   //if only wants to log out 1st object from the array

   console.log(ourData[0]);

};

ourRequest.send();