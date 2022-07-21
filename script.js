function calculate(){
        var A = document.getElementById("a").value;
        var B = document.getElementById("b").value;
        var C = document.getElementById("c").value;
        var D = document.getElementById("d").value;

        var ans = ((A * B) - (C * D)) / (C - B);
        alert(ans);
      }
