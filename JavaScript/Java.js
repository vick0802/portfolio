


//----------------------------------------FORM GOOGLE SHEET-------------------------------------------------//

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwUA61qgokP05ZhWnNh2uM0MQLHQo-uiuPcTMs5wV4SB8Jtk5FMoxP-0H3sv8oiAM1f/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      	msg.innerHTML = "Message sent sucessfully"
      	setTimeout(function(){
      		msg.innerHTML = ""
      	},5000)
      	form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  });


//----------------------------------------AUTO TYPE-------------------------------------------------//

  var typed = new Typed(".inp", {
    strings:["Sobha"],
    typeSpeed:120,
    backspeed: 115,
    loop: true
  });


//----------------------------------------DARK MODE-------------------------------------------------//


  var icon = document.getElementById("icon");


  if (localStorage.getItem("theme") == null){

    localStorage.setItem("theme", "light");
  }


  let localData = localStorage.getItem("theme");

  if(localData == "light"){

    icon.src = "./images/moon-line.png";
    document.body.classList.remove("dark-theme"); 
  }
  else if(localData == "dark"){

    icon.src = "./images/sun-line.png";
    shape.src = "./images/ss.png";
    document.body.classList.add("dark-theme"); 
  }


  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")){

      icon.src = "./images/sun-line.png";
      shape.src = "./images/ss.png";
      localStorage.setItem("theme", "dark");

    }
    else{
      icon.src = "./images/moon-line.png";
      shape.src = "./images/saa.png";
      localStorage.setItem("theme", "light");
    }  
  };


//---------------------------NAVBAR FOR SMALL SCREEN (OPEN AND CLOSE ICON)-------------------------------------//

        var menu = document.getElementById("menu");

        function openmenu(){
          menu.style.right = "0";
        }
        function closemenu(){
          menu.style.right = "-200px";
        }




