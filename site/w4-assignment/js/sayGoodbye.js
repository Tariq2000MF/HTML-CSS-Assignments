//Goodbye

(function (window) {  

  var speakWord = "GoodBye";
  var byeSpeaker = {};

  byeSpeaker.speak = function (name) {

  console.log(speakWord + " " + name);
    
    }

  window.byeSpeaker = byeSpeaker;

      })(window);
