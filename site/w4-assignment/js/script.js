//script.js main file

(function (window) {

  var names = ['Tareq', 'Emir', 'Jonathan', 'Merve', 'Jana', 'Levent', 'Dilara', "Omer"];

  for (var i = 0; i < names.length; i++) {

  var name = names[i];
  var firstLetter = name.charAt(0).toLowerCase();
 
  if (firstLetter == "j") {

    byeSpeaker.speak(name);

  } else {

    helloSpeaker.speak(name);

  }
      };
            }) (window);
