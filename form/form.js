	var nameCheck = /^[a-zA-Z]{2,30}$/;
	var emailCheck =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var passCheck =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
	var ageCheck =/^\S[0-9]{0,2}$/;

	var dataMatch = 0;
	var fainal = 0;
	var fname = document.getElementById('fname');
	var mname = document.getElementById('mname');
	var lname = document.getElementById('lname');
	var email = document.getElementById('email');
	var pass = document.getElementById('pass');
	var rpass = document.getElementById('rpass');
	var age = document.getElementById('age');
	var gen = document.querySelector('input[name="Gender"]:checked');



 function check(e) 
 {

 	let colName = ["fname", "mname", "lname" ,"email","pass", "rpass" ,"age","birthday",  "interest" ,"state1","city1","city3"];

	fainal = 0;
 	
 	for( i= colName.length; i>=0 ; i--)
 	{
 		
 		myFunction(colName[i]);
  	}
  
  	if (fainal==11)
  	{
  		 alert("form is submit");
  		document.getElementById("formData").reset();
  		document.write("thank you !!")
  		console.log(fainal,'fainal')
  	}
  	else if ( fainal==10 && ''==document.getElementById('state2').value && ''==document.getElementById('city2').value) 
  	{	
  		alert("form is submit");
  		document.getElementById("formData").reset();
  		document.write("thank you !!")
  		console.log(fainal,'fainal')

  	}else
  	{
  		console.log(fainal,'fainal')
  	}
 	e.preventDefault();
 }


 function myFunction(value)
 {

 	if(value=='fname')
 	{

 		if(nameCheck.test(fname.value))
 		{	
 			fainal++;
 		 	document.getElementById("fname").style.border = " green solid 1px"; 
 			document.getElementById("fname-span-green").style.display ="block"; 
 			document.getElementById("fname-span-red").style.display ="none"; 			 		

 		}
 		else
 		{	
	 		document.getElementById("fname").style.border = " red solid 1px";
 			document.getElementById("fname-span-green").style.display ="none"; 
 			document.getElementById("fname-span-red").style.display = "block"; 			 		
 		}		
 	}


 	if(value=='mname'){
 		if(nameCheck.test(mname.value))
 		{
 			
 			fainal++;
 			document.getElementById("mname").style.border = " green solid 1px"; 		
 			document.getElementById("mname-span-green").style.display ="block"; 
 			document.getElementById("mname-span-red").style.display ="none"; 
 		}
 		else
 		{
	 		document.getElementById("mname").style.border = " red solid 1px";
 			document.getElementById("mname-span-green").style.display ="none";
 			document.getElementById("mname-span-red").style.display = "block";
 		}		
 	}

 	if(value=='lname'){
 		if(nameCheck.test(lname.value))
 		{
 			fainal++;
 			console.log("this is working");
 			document.getElementById("lname").style.border = " green solid 1px";
 			document.getElementById("lname-span-green").style.display ="block"; 
 			document.getElementById("lname-span-red").style.display ="none";  		
 		}
 		else
 		{
	 		document.getElementById("lname").style.border = " red solid 1px";
	 		document.getElementById("lname-span-green").style.display ="none";
 			document.getElementById("lname-span-red").style.display = "block";
 		}		
 	}

 	if(value=='email'){
 		if(emailCheck.test(email.value))
 		{
 			fainal++;
 			document.getElementById("email").style.border = " green solid 1px";
 			document.getElementById("email-span-green").style.display ="block"; 
 			document.getElementById("email-span-red").style.display ="none";		

 		}
 		else
 		{
	 		document.getElementById("email").style.border = " red solid 1px";
	 		document.getElementById("email-span-green").style.display ="none";
 			document.getElementById("email-span-red").style.display = "block";
 		}		
 	}

 	if(value=='pass'){
 		if(passCheck.test(pass.value))
 		{
 			fainal++;
 			document.getElementById("pass").style.border = " green solid 1px";
 			document.getElementById("pass-span-green").style.display ="block"; 
 			document.getElementById("pass-span-red").style.display ="none";	
 		}
 		else
 		{
	 		document.getElementById("pass").style.border = " red solid 1px";
	 		document.getElementById("pass-span-green").style.display ="none";
 			document.getElementById("pass-span-red").style.display = "block";
 		}		
 	}

 	if(value=='rpass'){
 		if(passCheck.test(rpass.value) && pass.value == rpass.value)
 		{
 			fainal++;
 			document.getElementById("rpass").style.border = " green solid 1px";
 			document.getElementById("rpass-span-green").style.display ="block"; 
 			document.getElementById("rpass-span-red").style.display ="none";	 		
 		}
 		else
 		{
	 		document.getElementById("rpass").style.border = " red solid 1px";
	 		document.getElementById("rpass-span-green").style.display ="none";
 			document.getElementById("rpass-span-red").style.display = "block";
 		}		
 	}

 	if(value=='age'){
 		
 		if(age.value>=0 && age.value<999 && age.value!="")
 		{
 			
 			fainal++;
 			document.getElementById("age").style.border = " green solid 1px";
 			document.getElementById("age-span-green").style.display ="block"; 
 			document.getElementById("age-span-red").style.display ="none"; 		
 		}
 		else
 		{
	 		document.getElementById("age").style.border = " red solid 1px";
	 		document.getElementById("age-span-green").style.display ="none";
 			document.getElementById("age-span-red").style.display = "block";
 		}		
 	}

 	if(value=='birthday')
 	{
 		
 		if(birthday.value!="")
 		{
 			fainal++;
 			document.getElementById("birthday").style.border = " green solid 1px";
 			document.getElementById("birthday-span-green").style.display ="block"; 
 			document.getElementById("birthday-span-red").style.display ="none"; 		
 		}
 		else
 		{
	 		document.getElementById("birthday").style.border = " red solid 1px";
	 		document.getElementById("birthday-span-green").style.display ="none";
 			document.getElementById("birthday-span-red").style.display = "block";
 		}		
 	}

 	if (value == "interest") {
		dataMatch = 0;
		
		for(var K = 3; K>= 0; K--) {
			if(  false == document.querySelectorAll('.data-check')[K].checked)
			{	dataMatch++; }
		}
		

 		if (dataMatch>=4) 
		{
			
			
			dataMatch = 0;
			document.getElementById("hobi-span-green").style.display ="none";
 			document.getElementById("hobi-span-red").style.display = "block";

		}
	
		else
		{
			
			document.getElementById("hobi-span-green").style.display ="block"; 
 			document.getElementById("hobi-span-red").style.display ="none";
 			fainal++; 
			dataMatch = 0;
			

		}
 	}


 	if( value == 'select'){
 		for(var K = 3; K>= 0; K--) {
			if(  false == document.querySelectorAll('.data-check')[K].checked){	dataMatch++; }
		}


		if (dataMatch>=4) 
		{

			dataMatch = 0;

			document.getElementById("hobi-span-green").style.display ="none";
 			document.getElementById("hobi-span-red").style.display = "block";
		}
	
		else
		{

			document.getElementById("hobi-span-green").style.display ="block";
 			document.getElementById("hobi-span-red").style.display ="none";
			dataMatch = 0;
		}
 	}

 	/* select other*/

 	if( value == 'selectOther'){
 		for(var K = 3; K>= 0; K--) {
			if(  false == document.querySelectorAll('.data-check')[K].checked){	dataMatch++; }
		}


		if (dataMatch>=4) 
		{
			
			dataMatch = 0;
			document.getElementById("hobi-span-green").style.display ="none";
 			document.getElementById("hobi-span-red").style.display = "block";

		}
	
		else
		{
			document.getElementById("hobi-span-green").style.display ="block"; 
 			document.getElementById("hobi-span-red").style.display ="none";
			dataMatch = 0;
			

		}

		if(  true == document.querySelectorAll('.data-check')[3].checked)
		{	
			
			document.getElementById("checkbox-other").style.display = "block";
		}
		else
		{
			
			document.getElementById("checkbox-other").style.display = "none";	

		}

 	
 	}

 	if( value=='state1'){
 		let card = document.getElementById("state").value;
		if (card=="") 
		{
			
			document.getElementById("city").disabled = true;
			document.getElementById("city2").disabled = true;
			document.getElementById("state2").disabled = true;

			document.getElementById("city").value="";
			document.getElementById("city").style.border="solid grey 1px";
			document.getElementById("city-span-red-1").style.display ="none";
			document.getElementById("city-span-green-1").style.display ="none";

			document.getElementById("city2").value="";
			document.getElementById("city2").style.border="solid grey 1px";
			document.getElementById("city-span-red-2").style.display ="none";
			document.getElementById("city-span-green-2").style.display ="none";
			
			document.getElementById("state2").value="";
			document.getElementById("state2").style.border="solid grey 1px";
			document.getElementById("state-span-red-2").style.display ="none";
			document.getElementById("state-span-green-2").style.display ="none";
	
			document.getElementById("state").style.border="solid red 1px";
			document.getElementById("state-span-green-1").style.display ="none";
 			document.getElementById("state-span-red-1").style.display = "inline";

		}
		else
		{

			document.getElementById("city").disabled = false;
			document.getElementById("state").style.border="solid green 1px";
			document.getElementById("state-span-green-1").style.display ="inline"; 
 			document.getElementById("state-span-red-1").style.display ="none";
		}

 	}

 	if( value=='city1')
 	{
 		let card = document.getElementById("city").value;
		if (card=="") 
		{
			
			document.getElementById("city").style.border="solid red 1px";
			document.getElementById("city-span-green-1").style.display ="none";
 			document.getElementById("city-span-red-1").style.display = "inline";


			document.getElementById("city2").disabled = true;
 			document.getElementById("city2").value="";
			document.getElementById("city2").style.border="solid grey 1px";
			document.getElementById("city-span-red-2").style.display ="none";
			document.getElementById("city-span-green-2").style.display ="none";
			
			document.getElementById("state2").disabled = true;
			document.getElementById("state2").value="";
			document.getElementById("state2").style.border="solid grey 1px";
			document.getElementById("state-span-red-2").style.display ="none";
			document.getElementById("state-span-green-2").style.display ="none";


		}
		else
		{
			
			fainal++; 
			document.getElementById("state2").disabled = false;
			document.getElementById("city").style.border="solid green 1px";
			document.getElementById("city-span-green-1").style.display ="inline"; 
 			document.getElementById("city-span-red-1").style.display ="none";
		}

 	}

 	if( value=='state2'){
 		let card = document.getElementById("state2").value;
		if (card=="" ) 
		{
		
			document.getElementById("city2").disabled = true;
			document.getElementById("city2").value='';
			document.getElementById("city2").style.border="solid grey 1px";
 			document.getElementById("city-span-red-2").style.display ="none";

 			document.getElementById("city-span-green-2").style.display ="none";
			
			document.getElementById("state2").style.border="solid grey 1px";
			document.getElementById("state-span-green-2").style.display ="none";
 			

		}
		else
		{
			document.getElementById("city2").disabled = false;
			document.getElementById("state2").style.border="solid green 1px";
			document.getElementById("state-span-green-2").style.display ="inline"; 
		}

 	}

 	if( value=='city2'){
 		let card = document.getElementById("city2").value;
		if (card=="") 
		{
		

			document.getElementById("city2").style.border="solid red 1px";
			document.getElementById("city-span-green-2").style.display ="none";
 			document.getElementById("city-span-red-2").style.display = "inline";

			
		}
		else
		{
			fainal++; 
			document.getElementById("city2").style.border="solid green 1px";
			document.getElementById("city-span-green-2").style.display ="inline"; 
 			document.getElementById("city-span-red-2").style.display ="none";
		}

		

 	}

	if( value=="city3")
 	{
 		/*if (''!=document.getElementById('state2').value && ''==document.getElementById('city2').value) 
 		{

 			console.log("not null");
 			fainal++; 
 			document.getElementById("city2").style.border="solid red 1px";
			document.getElementById("city-span-green-2").style.display ="none";
 			document.getElementById("city-span-red-2").style.display = "inline"; 		
 		}

 		else if( ''!=document.getElementById('city2').value)
 		{
 			document.getElementById("city2").style.border="solid green 1px";
			document.getElementById("city-span-green-2").style.display ="inline"; 
 			document.getElementById("city-span-red-2").style.display ="none";
 			fainal++; 
 		}
 		else if( ''==document.getElementById('state2').value)
 		{
 			console.log(" null");
 			document.getElementById("city2").style.border="solid grey 1px";
			document.getElementById("city-span-green-2").style.display ="none";
 			document.getElementById("city-span-red-2").style.display = "none";	
 		}*/

 		if(''!=document.getElementById('state2').value && ''==document.getElementById('city2').value)
 		{
 			
 			document.getElementById("city2").style.border="solid red 1px";
			document.getElementById("city-span-green-2").style.display ="none";
 			document.getElementById("city-span-red-2").style.display = "inline";

 		}
 		else if(''!=document.getElementById('state2').value && ''!=document.getElementById('city2').value)
 		{
 			fainal++;

 		}


 	}

 	if( value=='submit'){

 		if(  true == document.getElementById('TermsCondition').checked)
 		{
 				document.getElementById("submit").disabled = false;	
 		}
 		else{

 				document.getElementById("submit").disabled = true;	

 		}

 	}


 }




 function demo(){

		
 }