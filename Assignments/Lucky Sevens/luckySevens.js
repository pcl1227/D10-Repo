function hideResults() {
	document.getElementById("resultsTable").style.display = "none";
}

function diceRoll() {
	var bet= document.getElementById("bet").value;
		bet=Number(bet.replace("$",""));
	var money= document.getElementById("bet").value;
		money=Number(money.replace("$",""));
	var rollCount=0;
	var maxMoney=money;
	var countAtMax=rollCount;
	
	if (money<=0) {
		alert("Starting Bet must be greater than $0.")
	}

	while (money>0) { //playable bet
		var d1=Math.floor(Math.random()*6)+1;
		var d2=Math.floor(Math.random()*6)+1;
		var dSum= d1+d2;	
		if (dSum==7) { //winning roll
			money+=4;
			rollCount+=1;
			
			if (money>=maxMoney) {
				maxMoney=money;
				countAtMax=rollCount;
			}
		} 
		else { //losing roll
			money-=1;
			rollCount+=1;
		}
	} 

	function displayResults() {
		document.getElementById("startingBet").innerHTML="$"+bet;
		document.getElementById("rollCount").innerHTML=rollCount;
		document.getElementById("moneyMax").innerHTML="$"+maxMoney;
		document.getElementById("moneyMaxCount").innerHTML=countAtMax;
	}

	displayResults();

}