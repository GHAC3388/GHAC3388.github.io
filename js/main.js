
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info")
var pageCounter = 1;

btn.addEventListener("click", function() {

var ourRequest = new XMLHttpRequest();
//where to do get or post data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
//what to do after established
ourRequest.onload = function() {

    if (ourRequest.status >= 200 && ourRequest.status < 400) {
   // console.log(ourRequest.responseText) <-- for checking in console

   //save retrieved data into a variable, "ourRequest.responseText" treats data as String from the site
    //var ourData = ourRequest.responseText;

    //if only wants to log out 1st object from the array to the console
    //console.log(ourData[0]);

    //below the requested URL will pass thru the JSON filter 
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest.onerror = function() {
    console.log("Connection error");
}

ourRequest.send();
pageCounter++;

if (pageCounter > 3) {
    btn.classList.add("hide-me");
}
});

//function for adding HTML to the page only

function renderHTML(data) {
    var htmlString = "";

    for (i=0; i < data.length; i++) {

        htmlString += "<p>" + data[i].name + "is a " + data[i].species + " that likes to eat ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += " and dislikes ";

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += ".</p>";
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);    
};