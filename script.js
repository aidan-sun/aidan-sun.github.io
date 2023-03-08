// HTML IMPORTER




function HTMLImporter() {}

HTMLImporter.import = function (url) {
  var error, http_request, load, script;

  script =
    document.currentScript || document.scripts[document.scripts.length - 1];

  load = function (event) {
    var attribute, index, index1, new_script, old_script, scripts, wrapper;

    wrapper = document.createElement("div");
    wrapper.innerHTML = this.responseText;

    scripts = wrapper.getElementsByTagName("SCRIPT");

    for (index = scripts.length - 1; index > -1; --index) {
      old_script = scripts[index];

      new_script = document.createElement("script");
      new_script.innerHTML = old_script.innerHTML;

      for (index1 = old_script.attributes.length - 1; index1 > -1; --index1) {
        attribute = old_script.attributes[index1];
        new_script.setAttribute(attribute.name, attribute.value);
      }

      old_script.parentNode.replaceChild(new_script, old_script);
    }

    while (wrapper.firstChild) {
      script.parentNode.insertBefore(
        wrapper.removeChild(wrapper.firstChild),
        script
      );
    }

    script.parentNode.removeChild(script);

    this.removeEventListener("error", error);
    this.removeEventListener("load", load);
  };

  error = function (event) {
    this.removeEventListener("error", error);
    this.removeEventListener("load", load);

    alert("An error has occured!");
  };

  http_request = new XMLHttpRequest();
  http_request.addEventListener("error", error);
  http_request.addEventListener("load", load);
  http_request.open("GET", url);
  http_request.send();
};








// reveal

window.onload=function(){

// const main = document.getElementById("mainMain");

// main.addEventListener('scroll', reveal);

// function reveal(){
//   var reveals = document.querySelectorAll('.reveal');

//   for (var i = 0; i < reveals.length; i++) {
    
//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 212;

//     if(revealtop < windowheight - revealpoint){
//       reveals[i].classList.add('appear');
//     }


//     else{
//       reveals[i].classList.remove('appear');
//     }    

//   }
// }





// const observer = new IntersectionObserver((entries) =>{
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('appear');
//     }
//     else{
//       entry.target.classList.remove('appear');
//     }
//   });
// });

// const reveal = document.querySelectorAll('.reveal');

// reveal.forEach((el) => observer.observe(el));





const faders = document.querySelectorAll('.reveal');
const appearOptions = {
  threshold: .25,
  rootMargin: "0px 0px -75px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry =>{
    if (!entry.isIntersecting) {
      if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove('appear');
      } 
      else {
        return;
      }
    }

    else{
      entry.target.classList.add('appear');
      
    }
  })
}, 
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});




};

// detect current page for opacity
// detect body class (navChange) for movement


// function uegroupOn() {
//    var uegroupNav = document.getElementById('uegroupNav');

//    if(foo.style.display == '' || foo.style.display == 'none'){
//         foo.style.display = 'block';
//    }
//    else {
//         foo.style.display = 'none';
//    }
// }


// document.getElementByID("uegroupNav").style.display = "block";




