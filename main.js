function   
    x = document.getElementById("num").value;
  
    if (isNaN(x) || x < 2 || x > 100) {
      text = n;
    } else {
      text = "invalid input please try again";
    }
    document.getElementById("demo").innerHTML = text;
  }
