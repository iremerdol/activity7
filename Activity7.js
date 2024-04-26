var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	$("name").focus();
};

function displayResults()
{
	var average = 0;
	let highestScore = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);

		if(highestScore < scores[i]){
			highestScore = scores[i];
		}
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is " + average.toFixed(2) + "<br /> Highest score is = " + highestScore;
}

function displayScores()
{
	var table = $("scores_table");
	table.innerHTML = "<tr><th>Name</th><th>Score</th></tr>";

	for (var i = 0; i < names.length; i++) {
		var row = table.insertRow(i + 1);
		var name = row.insertCell(0);
		var score = row.insertCell(1);

		name.innerHTML = names[i];
		score.innerHTML = scores[i];
	}
}

function addScore()
{
	var nameInp = $("name");
	var scoreInp = $("score");
	var name = nameInp.value.trim();
	var score = parseFloat(scoreInp.value.trim());

	if (name === "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score");
	} else {
		names.push(name);
		scores.push(score);

		nameInp.value = "";
		scoreInp.value = "";
		nameInp.focus();

		displayScores();
	}
}


