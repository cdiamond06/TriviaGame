// Global varialbes

// Scores
var correct = 0;
var incorrect = 0;
var incomplete = 0;


var toggle = false;
var counter = 0;
var intervalId;



var intervalId;

// Questions Object
var questions = [
	 		{
		question: "Who started their first day in the pilot epispde?",
		a: "Jim Halpert",
		b: "Ryan Howard",
		c: "Michael Scott",
		d: "Erin Hannon",
		correctAnswer: "Ryan Howard",
	},
			{
		question: "In diversity Day, which famous standup does Michael immitate?",
		a: "Richard Pyor",
		b: "Chris Rock",
		c: "Robin Williams",
		d: "George Carlin",
		correctAnswer: "Chris Rock"
	},
	 		{
		question: "In the last episode of season 1, what is the name of the Hot Girl?",
		a: "Amy",
		b: "Christy",
		c: "Kelly",
		d: "Katy",
		correctAnswer: "Katy"
	},
	 		{
		question: "What is the License Plate of Todd Packers Car?",
		a: "LUVMKR",
		b: "WLHUNG",
		c: "TODPKR",
		d: "BKDADY",
		correctAnswer: "WLHUNG"
	},
	 		{
		question: "What is Jim's costume in the second season Halloween episode",
		a: "Dave",
		b: "Bookface",
		c: "Three hole punch Jim",
		d: "Rational Consumer",
		correctAnswer: "Three hole punch Jim"
	},	
	 		{
		question: "During the Client episode, what restaurant does Jan and Michael take Christian?",
		a: "Applebee's",
		b: "Olive Garden",
		c: "Poor Richards",
		d: "Chilli's",
		correctAnswer: "Chilli's"
	},	
	 	{
		question: "In the second season's Christmas Party Episode, who ended up with the IPOD?",
		a: "Dwight",
		b: "Pam",
		c: "Ryan",
		d: "Michael",
		correctAnswer: "Dwight"
	},	
	 questionEight ={
		question: "During the Booze Cruise, who breaks up?",
		a: "Pam and Roy",
		b: "Jim and Katy",
		c: "Kelly and Ryan",
		d: "Phyllis and Bob",
		correctAnswer: "Jim and Katy"
	}							
];

// Functions
// -----------------------------------------------------------------
var questiontimer= {

	time: 180,

	reset: function(){
		questiontimer.time = 30;
		$('#timer').html('Time Remaining: 30 seconds');
	},
	start: function(){
		intervalId = setInterval(questiontimer.count, 1000);
	},
	count: function(){
		questiontimer.time--;

		var converted = questiontimer.timeConverter(questiontimer.time);

		$('#timer').html('Time Remaining: ' + converted + ' Seconds Left');

		if(questiontimer.time === 0){
			questiontimer.reset();
		}
	},
	timeConverter: function(t){
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

};

// Main Process
// -----------------------------------------------------------------------
// starting page
$('#timer').hide();
$('#question-holder').hide();
$('#results-holder').hide();


$('#start-button').on("click", function(){
	$('#start-button').hide();
	$('#question-holder').show();
	$('#timer').show();
	questiontimer.start();

	var questionHolder = $("#question-holder");
		for(var i = 0; i < questions.length; i++){
			questionHolder.append("<p class ='question' >" + questions[i].question + "</p>" + " <form> <input type='radio' name = " + i + ">" + questions[i].a + "<input type= 'radio' name = " + i + ">" + questions[i].b + "<input type= 'radio' name = " + i + ">" + questions[i].c + "<input type= 'radio' name = " + i + ">" + questions[i].d + "</form>");
		}
	questionHolder.append('<button type="button" class="btn btn-primary btn-lg" id = "submit-button">Submit </button>')

	$("#submit-button").click(function(){
	alert("test");
		$('#timer').hide();
		$('#question-holder').hide();
		$('#results-holder').show();
	$('input[type=radio]:checked');

	var resultsHolder = $("#results-holder");
		resultsHolder.append("<p class = 'result' > All Done! </p>" + "<p class = 'result' > Correct: " + correct + "</p>" + "<p class = 'result' >Incorrect: " + incorrect + "</p>" + "<p class = 'result' > Incomplete: " + incomplete + "</p>");

// this is grabbing all choices that were checked and compare to the answer after they click submit
	});
})




