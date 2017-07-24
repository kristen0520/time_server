var input = process.argv[2];

var d = process.argv[2]
var readableMonth="";
var monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getReadableMonth(month, monthsArr){readableMonth = monthsArr[month]}

if(parseInt(d) == d){var unixToDate = new Date(d*1000);
     
     var month= unixToDate.getMonth();
     var day= unixToDate.getDate() +1;
     var year= unixToDate.getFullYear()

     if(day < 10){day = "0"+day}

     getReadableMonth(month, monthsArr);

     var unixToReadable = readableMonth + " " + day + ", " + year;

     var dateObj = {unix: input, natural: unixToReadable};

     console.log(dateObj)
     return dateObj
}


try{

var dArr;

if(d.indexOf(" ") >=0){ dArr= d.split(" ")}
if(d.indexOf("-") >=0 && d.indexOf(" - ") == -1){ dArr= d.split("-")}	
if(d.indexOf(" - ") >=0){dArr=  d.split(" - ")}
if(d.indexOf("_") >=0){ dArr= d.split("_")}
if(d.indexOf(".") >=0){dArr=  d.split(".")}
if(d.indexOf(" ,") >=0){ dArr= d.split(" ,")}
if(d.indexOf(" ,") ==-1 && d.indexOf(",") >=0){ dArr= d.split(",")}


var monthStr= "";

function getMonth(one, two, three, four, num, str){
	if(dArr[0] == one || dArr[0] == two || 
	   dArr[0] == three || dArr[0] == four  ){dArr[0] = num; monthStr = str}
}

getMonth("jan", "Jan", "january", "January", "01", "January");
getMonth("feb", "Feb", "February", "february", "02", "February");
getMonth("mar", "Mar", "March", "march", "03", "March");
getMonth("apr", "Apr", "April", "april", "04", "April");
getMonth("may", "May", "My", "my", "05", "May");
getMonth("june", "jun", "June", "Jun", "06", "June");
getMonth("july", "July", "Jul", "jul", "07", "July");
getMonth("aug", "Aug", "August", "august", "08", "August");
getMonth("sept", "Sept", "September", "september", "09" , "September");
getMonth("oct", "Oct", "October", "october", "10", "October");
getMonth("nov", "Nov", "November", "november", "11", "November");
getMonth("dec", "Dec", "December", "december", "12", "December");

for(i=0;i<dArr.length;i++){
	if(dArr[i].length == 1){dArr[i] == 0 + dArr[i]}
}

if(dArr[2].length ==2){dArr[2] == "20" + dArr[2]}

var yearFirstArr= [ dArr[2], dArr[0], dArr[1] ]
    


var dStr = yearFirstArr.join(".")
var naturalToUnix = new Date (dStr).getTime() / 1000;
var humanReadable = monthStr+ " " +dArr[1] +", " + dArr[2]

var bothDatesObj = {
	unix: naturalToUnix,
	readable: humanReadable
}

console.log(bothDatesObj)
return bothDatesObj;

}

catch(error){
	var undefinedObj = {
    unix: "undefined",
	natural: "undefined"}

	console.log(undefinedObj)
	return undefinedObj;
}