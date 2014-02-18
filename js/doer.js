
function loadme()
{	
	console.log("loadme has been called");
}

function dohomework()
{
	console.log("dohomework called");
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	var n = email.search("@")
	var correct = 0;
	if(fname == "" && lname == ""){
		alert("No value for Both Names");
		document.getElementById("fname").setAttribute("style", "background-color: #ff4444;")
		document.getElementById("lname").setAttribute("style", "background-color: #ff4444;")
	}
	else if(fname == ""){
		alert("No value for First Name");
		document.getElementById("fname").setAttribute("style", "background-color: #ff4444;")
	}
	else if(lname == ""){
		alert("No value for Last name");
		document.getElementById("lname").setAttribute("style", "background-color: #ff4444;")
	}
	else{
		alert("Good day, " + fname + " " + lname + "!");
		document.getElementById("fname").setAttribute("style", "background-color: #97f0a9;")
		document.getElementById("lname").setAttribute("style", "background-color: #97f0a9;")
		correct = correct + 2;
	} 	
		
	
	if(n < 0){
		alert("Wrong Email Input");
		document.getElementById("email").setAttribute("style", "background-color: #ff4444;")
	} else {
		document.getElementById("email").setAttribute("style", "background-color: #97f0a9;")
		correct = correct + 1;
	}	

	if(pass1 == "" || pass2 == ""){
		document.getElementById("pass1").setAttribute("style", "background-color: #ff4444;")
		document.getElementById("pass2").setAttribute("style", "background-color: #ff4444;")
	}
	else if(pass1 == pass2 && pass1 != "" && pass2 != ""){
		correct = correct + 2;
	}
	else {
		document.Inner("Wrong Password Information");
		document.getElementById("pass1").setAttribute("style", "background-color: #ff4444;")
		document.getElementById("pass2").setAttribute("style", "background-color: #ff4444;")
	}

	if(correct == 5){
		window.location.href = "http://www.google.com";
	}

}
