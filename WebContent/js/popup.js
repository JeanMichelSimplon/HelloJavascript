/**
 * 
 */
function popup(){
		var a = document.getElementById("monChiffre1").value;
		var b = document.getElementById("monChiffre2").value;	
		var total = parseInt(a)+parseInt(b);

		document.getElementById("resultat").value=parseInt(document.getElementById("monChiffre1").value)+parseInt(document.getElementById("monChiffre2").value);
		document.getElementById('resultat').className = "input-ap";
		alert("HELLO WORLD "+total);		
		console.log("test de la console");
}