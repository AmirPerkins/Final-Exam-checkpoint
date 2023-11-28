function main() {
    button = document.getElementById("button").addEventListener("click", checkEmail);
    clearButton = document.getElementById("clear").addEventListener("click", clearInputs);
}

function checkEmail(){
    userEmail = document.getElementById("email").value;
    const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    if (emailValidationPattern.test(userEmail)){
        console.log("success");
        createHTML();
    }
    else{
        alert("Type in a proper email.");
    }
}

function clearInputs(){
    breakfastMeal = document.getElementById("breakfast");
    firstSnack = document.getElementById("firstSnack");
    lunchMeal = document.getElementById("lunch");
    secondSnack = document.getElementById("secondSnack");
    dinner = document.getElementById("dinner");

    breakfastMeal.value = "";
    firstSnack.value = "";
    lunchMeal.value = "";
    secondSnack.value = "";
    dinner.value = "";
}

function createHTML(){

    userName = document.getElementById("name").value;
    userEmail = document.getElementById("email").value;
    userGoals = document.getElementById("goals").value;

    breakfastMeal = document.getElementById("breakfast").value;
    firstSnack = document.getElementById("firstSnack").value;
    lunchMeal = document.getElementById("lunch").value;
    secondSnack = document.getElementById("secondSnack").value;
    dinner = document.getElementById("dinner").value;
    meals = [breakfastMeal, firstSnack, lunchMeal, secondSnack, dinner];

    newWindow = window.open('about:blank','myPop','width=1000,height=600,left=200,top=200');
    newWindow.document.write("<h1>Alright, " + userName + ". Here is your meal plan!</h1><br>");
    newWindow.document.write('<table>' + 
        '<tr>' +
          '<th>breakfast</th>' +
          '<th>firstSnack</th>'+
          '<th>Lunch</th>' +
          '<th>Second Snack</th>' +
          '<th>Dinner</th>' +
        '</tr>');
    newWindow.document.write('<tr>');
    for(i = 0; i < 5; i++){
    newWindow.document.write('<th>' + meals[i] + '</th>');
    }
    newWindow.document.write('</tr>');

    newWindow.document.write(breakfastMeal + firstSnack + lunchMeal + secondSnack + dinner);
}

main();