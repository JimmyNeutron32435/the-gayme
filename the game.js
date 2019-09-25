alert("Welkom bij dit spel.");
alert("U moet de vragen met A of B beantwoorden");
alert("Je word wakker en je moet naar school gaan, je pakt wat te eten. Wat ga je eten? A: Brood. B: Je eet niks want je hebt haast.");
var keuze1 = prompt(" Wat ga je eten? A: Brood of B: Niks");
if (keuze1 == "A"){
	alert("Je eet wat brood en gaat daarna naar school.");
}
else
{
	alert("Je eet niks om op tijd te komen en je koopt wel wat op school.");
}

alert("Je bent te laat voor de bus dus moet je lopend of met de fiets naar school, wat doe je? ");
var keuze2 = prompt("Hoe ga je naar school? A: Lopend of B: met de fiets?");
if (keuze2 == "A"){
	alert("Je pakt je spullen en loopt naar school");
}
else
{
	alert("Je pakt je spullen en gaat fietsend naar school");
}

if(keuze2 == "A"){
	var lopend1 = alert("Je moet haasten omdat je lopend nogal traag bent, Ga je rennen of niet? A: Je denkt dat je toch wel te laat komt dus je blijft lekker lopen B: Je gaat rennen.")
	var lopend1 = prompt("A: Je blijft lopen B: je gaat rennen");
	if(lopend1 == "A"){
		alert("Je blijft lopen");
	}
	else
	{
		alert("Je begint met rennen en je struikelt onderweg waardoor je je arm hebt gebroken en je kan niet meer naar school(Slecht einde)");
	}
}

if(keuze2 == "B"){
	var fiets1 = alert("Je hebt haast maar het stoplicht staat op rood, wat doe je? A: Je fietst door rood of B: Je wacht tot het stoplicht op groen staat.")
	var fiets1 = prompt("A: Je fietst door. B: Je wacht tot het stoplicht op groen staat");
	if(fiets1 == "A"){
		alert("Je word aangereden door een hard rijdende auto en bent op slag dood.(Slecht einde)");
	}
	else
	{
		alert("Je wacht tot het stoplicht op groen staat en fietst door.");
	}
}


if(lopend1 == "A"){
	var rennend1 = alert("Je komt aan op school en je bent 1 minuut te laat waardoor je docent oppeens heel boos op je word, wat doe je? A Je gaat hem uitschelden omdat je maar 1 minuut te laat bent B: Je haalt een telaatbriefje en je gaat gewoon verder met school.");
	var rennend1 = prompt("A: Je gaat hem uitschelden B: Je haalt een telaatbriefje en gaat verder met school");
	if(rennend1 == "A"){
		alert("De leraar is heel bang geworden en je mag de les in zonder problemen (Goed einde)");
	}
	else
		{
			alert("onderweg naar de receptie kom je een vriend tegen en hij heeft een leuk idee");
		}
}


if (rennend1 == "B"){
	var eieren = alert("Je vriend heeft het idee om eieren te gooien in de school, wat doe je? A: je gaat met hem mee doen B: je haalt je telaatbriefje en gaat gewoon de les in");
	var eieren = prompt("A: Je gaat meedoen B: je haalt je telaatbriefje");
	if (eieren == "A"){
		alert("Je word gepakt en je moet naar halt (slecht einde)");		
	}
	else
	    {
	    	alert("Je haalt je telaatbriefje en je komt er nog zonder problemen af (Goed einde)");
	    }
}


if(fiets1 == "B"){
	var fiets2 = alert("Je bent aan het fietsen en een automobilist gaat moeilijk doen zonder reden, wat doe je?. A: Je scheld hem uit B: Je negeert het en gaat gewoon naar school");
	var fiets2 = prompt("A: Je scheld hem uit B: Je negeert hem");
	if(fiets2 == "A"){
		alert("Je scheld hem uit en de automobilist word helemaal gek in zijn hoofd, hij trekt een mes en hij steekt je 20x in je buik waardoor je gelijk dood gaat (slecht einde)");
	}
	else
	{
		alert("Je negeert hem en fietst naar school")
	}
}


if(fiets2 == "B"){
	var fiets3 = alert("Terwijl je aan het fietsen bent kom je een vriend tegen met een lekke band, wat doe je? A: Je gaat hem helpen B: je negeert het want je wilt optijd op school komen");
	var fiets3 = prompt("A: Je gaat hem helpen B: Je fietst door zonder iets te zeggen.")
	if(fiets3 == "A"){
		alert("Je helpt je vriend en je komt alsnog te laat op school, maar je vriend had naar school gebeld waardoor jullie zonder problemen de les in mogen (Goed einde)");
	}
	else
	{
		alert("Je negeert hem en je vriend is niet echt blij met je, uiteindelijk op school in de pauze komt hij naar je toe en jullie hebben een gevecht, hij wint overduidelijk en jij ligt uiteindelijk knock out op de grond (slecht einde)");
	}
}







