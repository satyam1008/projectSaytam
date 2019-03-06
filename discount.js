
		var calulate = function(){
			var item = parseFloat(document.getElementById("itemPrice").value);
			var disper = parseFloat(document.getElementById("discountPercentage").value);
		if (item > 1000 || item <0   ){
			alert("Price must be betweent 0 and 1000");}

			if ((disper>70 || disper<0)){
				alert("Discount amonut should be between 0 and 70");}
			else{	
				if (isNaN(item)||isNaN(disper)){
				alert("The entry shoud be a number");}
				else{
			var disdoll = (item*disper)/100;
			var net = item - disdoll;
			document.getElementById("discountDollar").value = disdoll;
			document.getElementById("netprice").value = net;}
		}
		}