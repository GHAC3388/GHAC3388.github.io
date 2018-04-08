var ourRequest = new XMLHttpRequest();
//where to do get or post data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//what to do after established
ourRequest.onload = function() {
    console.log(ourRequest.responseText)

};



ourRequest.send();