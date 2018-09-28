       function turn() {
           var image = document.getElementById('off');
           if (image.src.match("lampon")) {
               image.src = "lampoff.jpg";
           }
           else {
               image.src = "lampon.jpg";
           }
       }

        
