$(function() {
  $("form#form1").submit(function(event){
  event.preventDefault();
  var questions = ["question1", "question2", "question3", "question4"];
  questions.forEach(function(question) {
    var userInput = $("input#" + question).val();
    var array = [userInput];
    var newArray = [];
    newArray.push((array[0]));
    newArray.forEach(function(li) {
      $("ul.answers").append("<li>"+ li + "</li>");
    });
  });
});
});

  // var questionOne = $("input#question1").val();
  // var questionTwo = $("input#question2").val();
  // var questionThree = $("input#question3").val();
  // var questionFour = $("input#question4").val();
  // var array = [questionOne, questionTwo, questionThree, questionFour];
  // var newArray = [];
  // newArray.push(array[0]);
  // newArray.push(array[1]);
  // newArray.push(array[2]);
  //
  // $("ul.answers").append("<li>"+ newArray[0] + "</li>");
  // $("ul.answers").append("<li>"+ newArray[2] + "</li>");
