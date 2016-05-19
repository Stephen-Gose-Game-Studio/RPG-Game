$(document).ready(function() {
	var myChar;
	var opponentChar;

	var choices = [];
	var enemyArray = [ {
		id: 1,
		name: "Hufflepuff",
		pic: 'assets/images/hufflepuff.png',
		hitPoints: 120,
		attackPower: 5
	}, {
		id: 2,
		name: "Gryffindor",
		pic: 'assets/images/gryffindor.png',
		hitPoints: 100,
		attackPower: 7 		
	}, {
		id: 3,
		name: "Slytherin",
		pic: 'assets/images/slytherin.png',
		hitPoints: 150,
		attackPower: 10 
	}, {
		id: 4,
		name: "Ravenclaw",
		pic: 'assets/images/ravenclaw.png',
		hitPoints: 180,
		attackPower: 12
	} ];

	var haveCharacter = false;	//If you've picked your character or not
	var haveAttacker = false;	//If you have an opponent or not
	var enemiesLeft = 3;


	for(var i = 0; i < enemyArray.length; i++) {
		choices += "<div id=" + enemyArray[i].id + " class='btn character text-center' value=" + enemyArray[i].id + "><img class='houses' src=" + enemyArray[i].pic + " alt=" + enemyArray[i].name + "><br> " + enemyArray[i].hitPoints + "<br> " + enemyArray[i].attackPower + " </div>";
		console.log(choices);
	}

	$("#picking").html(choices);


	$('.character').on("click", function(){
		if(!haveCharacter) {	//Picking your character
			myChar = $(this).attr('id');
			$("#myguy").append(this);
			$(this).addClass("hero");

			console.log(myChar);
			console.log(enemyArray[myChar].hitPoints);

			haveCharacter = true;
		}
		else if(!haveAttacker && haveCharacter) {	//You have a character and you're picking your opponent
			opponentChar = $(this).attr('id');
			$("#enemy").append(this);
			$(this).addClass("fighting");

			haveAttacker = true;
		}
	});

	$('#attack').on("click", function() {
		if(!haveCharacter) {
			console.log("you need to pick your character first")
		}
		else if(!haveAttacker) {
			console.log("pick your attacker");
		}
		else if(haveCharacter && haveAttacker) {
			enemyArray[opponentChar].hitPoints  = enemyArray[opponentChar].hitPoints - enemyArray[myChar].attackPower;	//Hit Them
			if(enemyArray[opponentChar].hitPoints < 0) {
				$("#enemy").remove(".fighting");
				console.log("They die");
				haveAttacker = false;
			}
			enemyArray[myChar].hitPoints = enemyArray[myChar].hitPoints - enemyArray[opponentChar].attackPower;	//Get Hit
			if(enemyArray[myChar].hitPoints < 0) {
				console.log("I die");
			}

			enemyArray[myChar].attackPower = enemyArray[myChar].attackPower + 5;	//Get Stronger


			console.log("My Characters HP: " + enemyArray[myChar].hitPoints);
			console.log("My Characters AP: " + enemyArray[myChar].attackPower);
			console.log("My Opponent HP: " + enemyArray[opponentChar].hitPoints);
			console.log("My Opponent AP: " + enemyArray[opponentChar].attackPower);
			console.log("========================================");
		}
	});

	$('#restart').on("click", function(){
		var haveCharacter = false;
		var haveAttacker = false;
		var enemiesLeft = 3;
		var myChar;
		var opponentChar;
	});


});
