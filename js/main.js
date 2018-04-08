var ourRequest = new XMLHttpRequest();
//where to do get or post data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//what to do after established
ourRequest.onload = function() {
   // console.log(ourRequest.responseText) <-- for checking in console

   //save retrieved data into a variable

   var ourData = ourRequest.responseText

   //if only wants to log out 1st object from the array

   console.log(ourData[0])

};



ourRequest.send();