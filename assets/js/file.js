
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqIqQdhQplQv6vvGQ1X78bXLuaxyEei0s",
    authDomain: "rps-multiplayer-5da99.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-5da99.firebaseio.com",
    projectId: "rps-multiplayer-5da99",
    storageBucket: "rps-multiplayer-5da99.appspot.com",
    messagingSenderId: "122948210021"
  };
  firebase.initializeApp(config);


var database = firebase.database(); 


var player1 = null;
var player2 = null;

var playerOneName = "";
var playerTwoName = "";

var pushPlayerName = "";

var addName = $("#add-name");



$(".option").on("click",function() {
    var optionValue = $(this).val();
    database.ref(playerOneName).push({
        Player_1: playerOneName,
        choice: optionValue,
    });
    
    if (playerOneName !== (':empty')) {
        
    }
})

$(addName).on("click", function (event) {
    event.preventDefault();

    

    // var playerOneText = $("#playerTwoName").text();
    // console.log(playerOneText);

    if ($("#name-input") !== "") {
        // $("#playerOneName").text($("#name-input").val().trim());
        
        if (playerOneName === "") {
            // console.log(playerOneName);
            
            $("#playerOneName").text($("#name-input").val().trim());
            playerOneName = $("#playerOneName").text();
            console.log(playerOneName);

            database.ref().push({
                Player_1: playerOneName,
                choice: "",
            });

        }

        else if (playerOneName !== "") {
            // console.log("HI");
            $("#playerTwoName").text($("#name-input").val().trim());
            playerTwoName = $("#playerTwoName").text();
            console.log(playerTwoName);

            database.ref().push({
                Player_2: playerTwoName,
                choice: "",
            
            
            })
        }
        
        
      
        

        
        
        
    }
    
    $("#name-input").val('');

    
   

})




