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




function navScript() {

  const mainNav = document.getElementById('mainNav');
  const otNav2 = document.querySelector('.otNav2')
  const navGoLeft = document.getElementById('navGoLeft');
  const navGoRight = document.getElementById('navGoRight');
  const navMove = document.getElementById('navMove');
  const navTitle1Line = document.querySelector('.navTitle1Line');

  const pageSelect = document.getElementById('pageSelect');



    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const page5 = document.getElementById('page5');
    const page6 = document.getElementById('page6');

  function pageButtonRemove()   {
    page1.classList.remove('pageSelectAct');
    page2.classList.remove('pageSelectAct');
    page3.classList.remove('pageSelectAct');
    page4.classList.remove('pageSelectAct');
    page5.classList.remove('pageSelectAct');
    page6.classList.remove('pageSelectAct');
  };



  if(document.body.className.match('navChange2')) {
    navMove.classList.add('navPage2');

    pageButtonRemove();

    page1.classList.add('pageSelectAct');
    page2.classList.add('pageSelectAct');
  };
  if(document.body.className.match('navChange3')) {
    navMove.classList.add('navPage3');

    pageButtonRemove();

    page1.classList.add('pageSelectAct');
    page2.classList.add('pageSelectAct');
    page3.classList.add('pageSelectAct');
  };
  if(document.body.className.match('navChange4')) {
    navMove.classList.add('navPage4');

    pageButtonRemove();

    page1.classList.add('pageSelectAct');
    page2.classList.add('pageSelectAct');
    page3.classList.add('pageSelectAct');
    page4.classList.add('pageSelectAct');
  };
  if(document.body.className.match('navChange5')) {
    navMove.classList.add('navPage5');

    pageButtonRemove();

    page1.classList.add('pageSelectAct');
    page2.classList.add('pageSelectAct');
    page3.classList.add('pageSelectAct');
    page4.classList.add('pageSelectAct');
    page5.classList.add('pageSelectAct');
  };
  if(document.body.className.match('navChange6')) {
    navMove.classList.add('navPage6');

    pageButtonRemove();

    page1.classList.add('pageSelectAct');
    page2.classList.add('pageSelectAct');
    page3.classList.add('pageSelectAct');
    page4.classList.add('pageSelectAct');
    page5.classList.add('pageSelectAct');
    page6.classList.add('pageSelectAct');
  };






  if(document.body.className.match('navChange')) {
    // mainNav.style.transform = "translateX(-100%)";
    // otNav2.style.transform = "translateX(0%)";
    // navMove.style.transform = "translateX(-100%)";
    
    navTitle1Line.classList.add('navDirMove');

    const pageSelectButton = document.querySelector('.pageSelectButton');
    
    function pageButtonActivation() {
    if(navMove.classList.contains('navPage1')){
      page1.classList.add('pageButAct');
   } else{
    page1.classList.remove('pageButAct');
   };

   if(navMove.classList.contains('navPage2')){
     page2.classList.add('pageButAct');
   } else{
    page2.classList.remove('pageButAct');
   };

   if(navMove.classList.contains('navPage3')){
     page3.classList.add('pageButAct');
   } else{
    page3.classList.remove('pageButAct');
   };

   if(navMove.classList.contains('navPage4')){
     page4.classList.add('pageButAct');
   } else{
    page4.classList.remove('pageButAct');
   };

   if(navMove.classList.contains('navPage5')){
     page5.classList.add('pageButAct');
   } else{
    page5.classList.remove('pageButAct');
   };

   if(navMove.classList.contains('navPage6')){
     page6.classList.add('pageButAct');
   } else{
    page6.classList.remove('pageButAct');
   };

 };

  pageButtonActivation();

  function pageAssignRemove() {
    navMove.classList.remove('navPage1');
    navMove.classList.remove('navPage2');
    navMove.classList.remove('navPage3');
    navMove.classList.remove('navPage4');
    navMove.classList.remove('navPage5');
    navMove.classList.remove('navPage6');
  }



  page1.addEventListener('click', () =>{
    pageSelectButton.classList.remove('pageButAct');
    pageAssignRemove();

    navMove.classList.add('navPage1');
    
    pageButtonActivation();
   });

  page2.addEventListener('click', () =>{
    pageSelectButton.classList.remove('pageButAct');
    pageAssignRemove();

    navMove.classList.add('navPage2');
    
    pageButtonActivation();
   });

  page3.addEventListener('click', () =>{
    pageSelectButton.classList.remove('pageButAct');
    pageAssignRemove();

    navMove.classList.add('navPage3');
    
    pageButtonActivation();
   });

  page4.addEventListener('click', () =>{
    pageSelectButton.classList.remove('pageButAct');
    pageAssignRemove();

    navMove.classList.add('navPage4');
    
    pageButtonActivation();
   });

  page5.addEventListener('click', () =>{
    pageSelectButton.classList.remove('pageButAct');
    pageAssignRemove();

    navMove.classList.add('navPage5');
    
    pageButtonActivation();
   });

  page6.addEventListener('click', () =>{
    pageSelectButton.classList.remove('pageButAct');
    pageAssignRemove();

    navMove.classList.add('navPage6');
    
    pageButtonActivation();
   });

  //   if(navMove.classList.contains('navMove1')){
  //     navGoLeft.classList.add('showNavOp');
  //   } if(!navMove.classList.contains('navMove1')){
  //     navGoRight.classList.add('showNavOp');
  //   }

  // navGoLeft.addEventListener('click', () => {
  //   navMove.classList.remove('navMove1');
  //   navGoLeft.classList.remove('showNavOp');
  //   navGoRight.classList.add('showNavOp');
  // });

  // navGoRight.addEventListener('click', () => {
  //   navMove.classList.add('navMove1');
  //   navGoRight.classList.remove('showNavOp');
  //   navGoLeft.classList.add('showNavOp');
  // });

  };




//for every new page, add consts
  const uegroupNav = document.getElementById('uegroupNav');
  const personalworkNav = document.getElementById('personalworkNav');

  if(document.URL.includes("uegroup")) {
    uegroupNav.classList.add('otNavVisible');
  };
  if(document.URL.includes("personalwork")) {
    personalworkNav.classList.add('otNavVisible');
  };

};









function navScriptMobile() {

const navMobClosed = document.getElementById('navMobClosed');
const navMobOpened = document.getElementById('navMobOpened');
const navMobContent = document.getElementById('navMobContent');

navMobClosed.addEventListener('click', () => {
  navMobClosed.classList.remove('visibleNavMob');
  navMobOpened.classList.add('visibleNavMob');
  navMobContent.classList.add('navMobMove');
});

navMobOpened.addEventListener('click', () => {
  navMobClosed.classList.add('visibleNavMob');
  navMobOpened.classList.remove('visibleNavMob');
  navMobContent.classList.remove('navMobMove');
});

};