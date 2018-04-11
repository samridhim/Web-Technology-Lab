var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
 if(this.readyState == 4 && this.status == 200)
	{
		myFunction(this);
	}
};
xhttp.open("GET", "employee.xml", true);
xhttp.send();
function myFunction(xml){
var xmlDoc = xml.responseXML;
var dept1 = [];
var dept2 = [];
var idept1 = 0;
var idept2 = 0;

var nodes = xmlDoc.getElementsByTagName("employee");
console.log(nodes.length);
for(var i =0;i<nodes.length;i++)
	{
		var k = xmlDoc.getElementsByTagName("employee")[i];
		var s = k.childNodes[5].innerHTML;
		if(s.indexOf("Computer")>-1){
			console.log("hi I am in computer");
		}
		else if(s.indexOf("ENTC")>-1){
				console.log("hi I am in ENTC");		
		}
	}
}

var table1 = document.createElement("table");
table1.setAttribute("border", "1px");
var tbody = document.createElement("tbody");

var headrow = document.createElement("tr");
var headc1 = document.createElement("th");
var headc1text = document.createTextNode("Computer");
var headc2 = document.createElement("th");
var headc2text = document.createTextNode("ENTC");
headc1.appendChild(headc1text);
headrow.appendChild(headc1);
headc2.appendChild(headc2text);
headrow.appendChild(headc2);
tbody.appendChild(headrow);
table1.appendChild(tbody);
document.body.append(table1);
