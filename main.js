var greetings = [
  "Hello You are the greatest mofo of all time!",
  "You are Kindo coo I quees",
  "I likes you alot",
  "Dogs, Donalds, and Ducks are blek",
  "What is thsi can for allwasy not beginj",
  "Blahh lalalala coldslaw flafalfalfa"
];

function getRandom() {
  return Math.floor(Math.random() * greetings.length);
}


$('button').click(function () {
  $("#awesomeResult h1").html(greetings[getRandom()]);
});
