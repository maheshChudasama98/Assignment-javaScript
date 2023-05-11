var itemOnePic = document.getElementById('itemOneNum');
var itemTwoPic = document.getElementById('itemTwoNum'); 
var itemTreePic = document.getElementById('itemTreeNum'); 
var itemFourPic = document.getElementById('itemFourNum');

var totalItems = document.getElementById('totalItems');
var subTotal = document.getElementById("subTotal");
var GST = document.getElementById("GST");
var fullTotal = document.getElementById("fullTotal");

itemOnePic.value ="";
itemTwoPic.value ="";
itemTreePic.value ="";
itemFourPic.value ="";

var itemOneTotal;
var itemTwoTotal;
var itemTreeTotal;
var itemFourTotal;


var chack =/^\d+$/;

var GSTtoal;
var GSTtoalRs;

var itemTotal=0;	
var Total=0;


function addRs(value)
{
	switch(value)
	{ 
		
		case 'itemOne':
			if(chack.test(itemOnePic.value) && itemOnePic.value> 0 )
			{
				itemOneTotal=( itemOnePic.value *40);
				document.getElementById("itemOneRs").innerHTML =itemOneTotal;
				TotalCount()
			}
			else
			{
				document.getElementById("itemOneRs").innerHTML ="0";
				itemOnePic.value=0
				TotalCount()
			}
			
		break;

		case 'itemTwo':
			if(chack.test(itemTwoPic.value) && itemTwoPic.value> 0 )
			{
				itemTwoTotal=( itemTwoPic.value *45);
				document.getElementById("itemTwoRs").innerHTML =itemTwoTotal;
				TotalCount()
			}
			else
			{
				document.getElementById("itemTwoRs").innerHTML ="0";
				itemTwoPic.value=0
				TotalCount()
			}
			
			
		break;

		case 'itemTree':
			if(chack.test(itemTreePic.value) && itemTreePic.value> 0 )
			{
				itemTreeTotal=( itemTreePic.value *90);
				document.getElementById("itemTreeRs").innerHTML =itemTreeTotal;
				TotalCount()
			}
			else
			{
				document.getElementById("itemTreeRs").innerHTML ="0";
				itemTreePic.value=0
				TotalCount()
			}
			
			
		break;

		case 'itemFour':
			if(chack.test(itemFourPic.value) && itemFourPic.value> 0 )
			{
				itemFourTotal=( itemFourPic.value *67.08);
				document.getElementById("itemFourRs").innerHTML =itemFourTotal;
				TotalCount()
			}
			else
			{
				document.getElementById("itemFourRs").innerHTML ="0";
				itemFourPic.value=0
				TotalCount()
			}
			
			
		break;
	}
}




function Click(value){
	Total=0;
	switch(value)
	{ 
		
		case 'itemOne':
			if(  true == document.getElementById('itemOneCheck').checked)
			{
 				document.getElementById("itemOneNum").disabled = false;	
			}
 			else
 			{

 			 	document.getElementById("itemOneNum").disabled = true;	
				document.getElementById("itemOneRs").innerHTML = "0";	
 			 	document.getElementById("itemOneNum").value = "";
 			 	itemOnePic.value ="";	
				TotalCount();
 			}
			
		break;

		case 'itemTwo':

			if(  true == document.getElementById('itemTwoCheck').checked)
			{
 				document.getElementById("itemTwoNum").disabled = false;	
			}
 			else
 			{
 			 	document.getElementById("itemTwoNum").disabled = true;	
				document.getElementById("itemTwoRs").innerHTML = "0";	
 			 	document.getElementById("itemTwoNum").value = "";	
 				itemTwoPic.value ="";
 				TotalCount();
 			}

		break;

		case 'itemTree':

			if(  true == document.getElementById('itemTreeCheck').checked)
			{
 				document.getElementById("itemTreeNum").disabled = false;	
			}
 			else
 			{
				document.getElementById("itemTreeRs").innerHTML = "0";	
 			 	document.getElementById("itemTreeNum").disabled = true;	
 			 	document.getElementById("itemTreeNum").value = "";	
				itemTreePic.value ="";
				TotalCount();
 			
 			}
		break;

		case 'itemFour':
			if(  true == document.getElementById('itemFourCheck').checked)
			{
 				document.getElementById("itemFourNum").disabled = false;	
			}
 			else
 			{
				document.getElementById("itemFourRs").innerHTML = "0";	
 			 	document.getElementById("itemFourNum").disabled = true;	
 			 	document.getElementById("itemFourNum").value = "";
 				TotalCount();
				itemFourPic.value ="";

 			}	
		break;
	}

}

function Remove(value)
{
	itemTotal=0;
	Total=0;
	switch(value)
	{ 
		
		case 'itemOne':
			if (confirm("Are you sure remove item!"))
			{	
    			document.getElementById("itemOne").style.display="none";
 			 	document.getElementById("itemOneNum").value =0;	
				TotalCount()
			}
		break;

		case 'itemTwo':
			if (confirm("Are you sure remove item!"))
			{
				document.getElementById("itemTwo").style.display="none";
				document.getElementById("itemTwoNum").value =0;	
				TotalCount()
			}
		break;

		case 'itemTree':
			if (confirm("Are you sure remove item!")){

				document.getElementById("itemTree").style.display="none";
				document.getElementById("itemTreeNum").value =0;	
				TotalCount()
			}
		break;
		case 'itemFour':
			if (confirm("Are you sure remove item!")){
				document.getElementById("itemFour").style.display="none";
				document.getElementById("itemFourNum").value =0;	
				TotalCount()
			}
		break;
	}
}


function TotalCount() 
{

	Total = 0 ;
	itemTotal = 0;

	var one  =  itemOnePic.value == "" ? 0 : itemOnePic.value  ;
	var two	 =  itemTwoPic.value  == "" ? 0 : itemTwoPic.value  ;
	var tree =	itemTreePic.value  == "" ? 0 : itemTreePic.value  ;
	var four =	itemFourPic.value  == "" ? 0 : itemFourPic.value  ;
	
	var allItemId = [ one , two  ,tree  ,four];
	var allItem = [40,45,90,67.08];

	for(var i=0 ; i<=3 ;i++)
	{
		Total += allItemId[i] *allItem[i];
		itemTotal = itemTotal + parseInt( allItemId[i]);
	}

	GSTtoal = parseFloat((Total*(18/100))).toFixed(2)
	GSTtoalRs = parseFloat( Total+(Total*(18/100))).toFixed(2)

	document.getElementById("totalItems").innerHTML = itemTotal;
	document.getElementById("subTotal").innerHTML = "$ "+ parseFloat(Total).toFixed(2);
	document.getElementById("GST").innerHTML = "$ "+GSTtoal;
	document.getElementById("fullTotal").innerHTML = "$ "+GSTtoalRs;
	console.log("total :- "+Total +" - all items "+itemTotal );
}


	var i =2;

function Checkbox() 
{
	let d = new Date();
	let day = d.getDate();
	let mon = d.getMonth();
	console.log(day +" " +mon);
	i++;
	d.setMonth(i);
	
	    var today = new Date();
        var todaystr = new Date().toLocaleDateString("en-US");
        var deliverydate = new Date(new Date().setDate(today.getDate() + 30)).toLocaleDateString("en-US");

	
	if(itemTotal>0)
	{
		if (confirm('Total item: '+itemTotal+'\n'+'Total Amount: '+GSTtoalRs+'\n'+'Bill Date: '+todaystr +'\n'+'Delievery Date: '+deliverydate+'\n\n'+'Confirm Order ?'))
		{
			alert(" Other is successful ")
		}
		else
		{ 
			alert("Try again");
		}
	}
	else
	{
		alert("placse Select any one items");
	}
}