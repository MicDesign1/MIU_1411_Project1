
Ti.UI.setBackgroundColor('#000');

//Array and loop

var iterifyArr = function (arr) {
    var cur = 0;
    arr.next = (function () { return (++cur >= this.length) ? (cur=0,this[cur]) : this[cur]; });
    arr.prev = (function () { return (--cur < 0) ? (cur=this.length-1,this[cur]) : this[cur]; });
    return arr;
};


var ar = ["What is your name? Answer: My name is Michael Camarata", "What is your chat user name, including the host? Answer: I don't use a chat service", "In which time zone do you reside? Answer: I live in the Central time zone", "Why are you in the Mobile Development Program? Answer: I want skills in a new career.", "How comfortable are you with javascript? Answer: I need a lot of practice but I manage.", "How comfortable are you with Titanium? Answer: I am pretty comfortable with Titanium.", "What is your favorite food? Answer: Chocolate.", "What is your favorite color? Answer: Blue.", "What kind of work do you do? Answer: I am an industrial designer.", "Do you have any pets? Answer: No.", "What is your favorite song? Answer: The Happy Birthday song."];

iterifyArr(ar);

function next(){
	Text2.text = ar.next();
}
function prev(){
	Text2.text = ar.prev();
}

//Windows and Buttons

var windowMain = Ti.UI.createWindow({  
    title: "Project 1 Quotes App",
    backgroundColor:'#fff',
    backgroundImage: "BG4.png"
    
});

var MainButtonView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#f9a239",
	width: 275,
	bottom: 35,
	height: 33,
	//top: 30,
	zIndex: 1
});

	var MainButtonView2 = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#f9a239",
	width: 275,
	bottom: 85,
	height: 33,
	//top: 30,
	zIndex: 1
	
});


	var MainButtonView3 = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#f9a239",
	width: 275,
	bottom: 35,
	height: 33,
	//top: 30,
	zIndex: 1
	});

//Labels and Text

var Text1 = Ti.UI.createLabel({
	text: "Q & A with Michael Camarata",
	color: "#fff",
	font: {fontSize: 17, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 33
});

var Text2 = Ti.UI.createLabel({
	text: "Brought to you by Michael Camarata and Full Sail University.",
	color: "#fff",
	font: {fontSize: 13, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	left: 22,
	right: 22,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 133
});

var Text3 = Ti.UI.createLabel({
	text: "Project 1 - Please press button below to start!",
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Gill Sans", fontStyle: "italic"},
	left: 22,
	right: 22,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 233
});

var Text4 = Ti.UI.createLabel({
	text: "Start",
	color: "#fff",
	font: {fontSize: 17, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
});

var Text5 = Ti.UI.createLabel({
	text: "Previous",
	color: "#fff",
	font: {fontSize: 17, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
});

var Text6 = Ti.UI.createLabel({
	text: "Next",
	color: "#fff",
	font: {fontSize: 17, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
});

var SecondView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#f9a239",
	width: 300,
	bottom: "30%",
	//height: 455,
	top: 20,
	zIndex: 0,
});

//Quote Navigation

var textBubble1 = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#846",
	height: Ti.UI.SIZE,
	top: 60,
	zIndex: 4,
});

var NextQButton = function(){};

var PreviousQButton = function(){};

//App Start Action Items

var ButtonSetups = function(){
	MainButtonView.hide();
	MainButtonView = null;
	Text1.hide();
	Text3.hide();
	Text1 = null;
	Text3 = null;
	Text2.text = "What is your name? Answer: My name is Michael Camarata";
	Text2.font = {fontFamily: "Noteworthy", fontWeight: "bold", fontSize:20};
	Text2.top = "100";
windowMain.add(MainButtonView2);
windowMain.add(MainButtonView3);
MainButtonView2.add(Text6);
MainButtonView3.add(Text5);
MainButtonView2.addEventListener("click", next);
MainButtonView3.addEventListener("click", prev);

};

MainButtonView.addEventListener("click", ButtonSetups);

//Window Adds

windowMain.add(MainButtonView, SecondView);
SecondView.add(Text1, Text2, Text3);
MainButtonView.add(Text4);
windowMain.open();
