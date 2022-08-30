 //paper 1
    //rock 2
    //sicorres 3
    var score_computer = 0;
    var score_multiplay = 0;
    function selected(n) {
      document.getElementById("p").innerHTML="";
      var computer = Math.floor(Math.random() * 4);
      if (n == 1) {
        if (computer === 1) {
          document.getElementById("p").innerHTML = "mosavi";
        }
        if (computer === 2) {
          score_multiplay++;
        }
        if (computer === 3) {
          score_computer++;
        }
      }
      if (n == 2) {
        if (computer === 1) {
          score_computer++;
        }
        if (computer === 2) {
          document.getElementById("p").innerHTML = "mosavi";
        }
        if (computer === 3) {
          score_multiplay++;
        }
      }
      if (n == 3) {
        if (computer === 1) {
          score_multiplay++;
        }
        if (computer === 2) {
          score_computer++;
        }
        if (computer === 3) {
          document.getElementById("p").innerHTML = "mosavi";
        }
      }
      document.getElementById("c-score").innerHTML = score_computer;
      document.getElementById("m-score").innerHTML = score_multiplay;
    }