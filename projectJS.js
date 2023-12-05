function main() {
    button = document.getElementById("button").addEventListener("click", checkEmail);
    clearButton = document.getElementById("clear").addEventListener("click", clearInputs);
}

function checkEmail(){
    userEmail = document.getElementById("email").value;
    const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    if (emailValidationPattern.test(userEmail)){
        console.log("success");
        getUserData();
    }
    else{
        alert("Type in a proper email.");
    }
}

function clearInputs(){
    for(i = 1; i < 8; i++){
        currentDay = String(i)
        document.getElementById("breakfast"+ currentDay).value = "";
        document.getElementById("firstSnack"+ currentDay).value = "";
        document.getElementById("lunch"+ currentDay).value = "";
        document.getElementById("secondSnack"+ currentDay).value = "";
        document.getElementById("dinner"+ currentDay).value = "";
    }
}

function getUserData(){
    userName = document.getElementById("name").value;
    userEmail = document.getElementById("email").value;
    userGoals = document.getElementById("goals").value;
    userData = [userName, userEmail, userGoals]

    for(i = 1; i < 8; i++){
        currentDay = String(i)
        breakfastMeal = document.getElementById("breakfast"+ currentDay).value;
        firstSnack = document.getElementById("firstSnack"+ currentDay).value;
        lunchMeal = document.getElementById("lunch"+ currentDay).value;
        secondSnack = document.getElementById("secondSnack"+ currentDay).value;
        dinner = document.getElementById("dinner"+ currentDay).value;
        switch(i) {
            case 1:
                mondayMeals = [breakfastMeal, firstSnack, lunchMeal, secondSnack, dinner];
            case 2:
                tuesdayMeals = [breakfastMeal, firstSnack, lunchMeal, secondSnack, dinner];
            case 3:
                wednesdayMeals = [breakfastMeal, firstSnack, lunchMeal, secondSnack, dinner];
            case 4:
                thursdayMeals = [breakfastMeal, firstSnack, lunchMeal, secondSnack, dinner];
            case 5:
                fridayMeals = [breakfastMeal, firstSnack, lunchMeal, secondSnack, dinner];
            case 6:
                saturadayMeals = [breakfastMeal, firstSnack, lunchMeal, secondSnack, dinner];
            case 7:
                sundayMeals = [breakfastMeal, firstSnack, lunchMeal, secondSnack, dinner];
        }
    }
    meals = [mondayMeals, tuesdayMeals, wednesdayMeals, thursdayMeals, fridayMeals, saturadayMeals, sundayMeals];
    createTable(userData, meals);

}

function createTable(userData, meals){
    let tableContent = [
        ["Monday", meals[0]], 
        ["Tuesday", meals[1]], 
        ["Wednesday", meals[2]], 
        ["Thursday", meals[3]], 
        ["Friday", meals[4]], 
        ["Saturday", meals[5]], 
        ["Sunday", meals[6]]
    ];
    let day = 0;
    let food = 1;
    console.log(tableContent[0][1][0])
    newWindow = window.open('about:blank','myPop','width=1000,height=600,left=200,top=200');
    newWindow.document.write("<h1>Alright, " + userData[0] + ". Here is your meal plan!</h1><br>");
    let table = document.createElement("table");
    table.id = "mealTable";
    let mealRowLabel = '<tr>' +
      '<th></th>' +
      '<th>breakfast</th>' +
      '<th>firstSnack</th>'+
      '<th>Lunch</th>' +
      '<th>Second Snack</th>' +
      '<th>Dinner</th>' +
    '</tr>';
    table.innerHTML = mealRowLabel;
    mealPlan = newWindow.document.body.appendChild(table);
    
    for(weekday = 0; weekday < 7; weekday++){
        dayRow = mealPlan.insertRow();
        newDay = dayRow.insertCell();
        newDay.innerHTML = tableContent[weekday][day];
        console.log(dayRow);
        for(meal = 0; meal < 5; meal++){
            newMeal = dayRow.insertCell();
            newMeal.innerHTML = tableContent[weekday][food][meal];
        }
    }

    printButton = document.createElement("button");
    printButton.id = "printable";
    printButton.innerHTML = "Print mealplan";
    printButton.addEventListener("click", function(){
        newWindow.print();
    });
    newWindow.document.body.appendChild(printButton);

    downloadButton = document.createElement("button");
    downloadButton.id = "download";
    downloadButton.innerHTML = "Download mealplan";
    downloadButton.addEventListener("click", downloadPlanner(newWindow));
    console.log(table);
}

function downloadPlanner(newWindow) {
    let table = newWindow.document.getElementById("mealTable")
    let planner = table.textContent; 
    let filename = "mealplan.html";
  
    let link = document.createElement("a");
    link.setAttribute("href", "data:text/html;charset=utf-8," + encodeURIComponent(planner));
    link.setAttribute("download", filename);
    link.style.display = "none"; 

    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  }
main();