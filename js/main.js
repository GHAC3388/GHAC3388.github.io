
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info")

btn.addEventListener("click", function() {

var ourRequest = new XMLHttpRequest();
//where to do get or post data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//what to do after established
ourRequest.onload = function() {
   // console.log(ourRequest.responseText) <-- for checking in console

   //save retrieved data into a variable, "ourRequest.responseText" treats data as String from the site
    //var ourData = ourRequest.responseText;

    //if only wants to log out 1st object from the array to the console
    //console.log(ourData[0]);

    //below the requested URL will pass thru the JSON filter 
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};

ourRequest.send();

});

//function for adding HTML to the page only

function renderHTML(data) {
    var htmlString = "";

    for (i=0; i < data.length; i++) {

        htmlString += "<p>" + data[i].name + "is a " + data[i].species + ". </p>"
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);    
};