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
      };

      old_script.parentNode.replaceChild(new_script, old_script);
    };

    while (wrapper.firstChild) {
      script.parentNode.insertBefore(
        wrapper.removeChild(wrapper.firstChild),
        script
      );
    };

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






window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});

};




// Page transitions

function pageTransition(){


const tran = document.querySelectorAll('.tran');
const anchors = document.querySelectorAll('a:not(.noRe)');

  setTimeout(() => {
    tran.forEach(elem =>{
      elem.classList.remove('pageTran');
    });
  }, 250);

  

  // V this works too 
  // addEventListener('click', function (event) {
  //   event.preventDefault();
  //   const anchor = event.target.closest("a");
  //   if (!anchor) return;
  //   console.log( anchor.getAttribute('href'));


  //   tran.forEach(elem =>{
  //     elem.classList.add('pageTran');
  //   });

  //   setTimeout(() => {
  //     window.location.href = anchor.href;
  //   }, 330);

  // });




  for (let i = 0; i < anchors.length; i++){
    const anchor = anchors[i];

    anchor.addEventListener('click', e =>{
      e.preventDefault();
      let target = e.currentTarget.href;

      console.log(target);

      tran.forEach(elem =>{
      elem.classList.add('pageTran');
      });

      setTimeout(() => {
        window.location.href = target;
      }, 0);

    });
  };


};





function navScript() {

// Keeps the nav opened or closed on refresh or new page
  const persHead = document.getElementById('persHead');
  const navOpen = document.getElementById('navOpen');
  const navEl = document.getElementById('navEl');
  const mainMod = document.querySelector('main');
  const close = 'close';
  const open = 'open';
  const DEFAULT_MODE = close;


    let storedMode = sessionStorage.getItem('navMoving');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        sessionStorage.setItem('navMoving', DEFAULT_MODE);
    };
    


function setNav(navMoving = DEFAULT_MODE) {
  
if (persHead == null){
      
        // const persHead = document.getElementById('persHead');
        console.log("error");
        location.reload();
      
    };

    if (navMoving === open) {
    navEl.classList.add('navOpened');
    navOpen.classList.add('navOpenMove');
    mainMod.classList.add('mainSlide');
    persHead.classList.add('headSlide');

  } else if (navMoving === close){
    navEl.classList.remove('navOpened');
    navOpen.classList.remove('navOpenMove');
    mainMod.classList.remove('mainSlide');
    persHead.classList.remove('headSlide');

  };
};

// function bugFix(navMoving = DEFAULT_MODE) {
//   const persHead = document.getElementById('persHead');
//     if (navMoving === open) {
//     persHead.classList.add('headSlide');

//   } else if (navMoving === close){
//     persHead.classList.remove('headSlide');
//   };
// };


navOpen.addEventListener('click', function () {
    let navMoving = sessionStorage.getItem('navMoving');
    if (navMoving) {
        let newMode = navMoving == open ? close : open;
        setNav(newMode);
        sessionStorage.setItem('navMoving', newMode);
    }
});

setNav(storedMode);
  
    // bugFix(storedMode);

// page selection button stuff

  const navMove = document.getElementById('navMove');
  const pageSelect = document.getElementById('pageSelect');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const page5 = document.getElementById('page5');
    const page6 = document.getElementById('page6');
    const page7 = document.getElementById('page7');
    const page8 = document.getElementById('page8');

  function pageButtonRemove()   {
    page1.classList.remove('pageSelectAct');
    page2.classList.remove('pageSelectAct');
    page3.classList.remove('pageSelectAct');
    page4.classList.remove('pageSelectAct');
    page5.classList.remove('pageSelectAct');
    page6.classList.remove('pageSelectAct');
    page7.classList.remove('pageSelectAct');
    page8.classList.remove('pageSelectAct');
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
  if(document.body.className.match('navChange7')) {
    navMove.classList.add('navPage7');

    pageButtonRemove();

    page1.classList.add('pageSelectAct');
    page2.classList.add('pageSelectAct');
    page3.classList.add('pageSelectAct');
    page4.classList.add('pageSelectAct');
    page5.classList.add('pageSelectAct');
    page6.classList.add('pageSelectAct');
    page7.classList.add('pageSelectAct');
  };
  if(document.body.className.match('navChange8')) {
    navMove.classList.add('navPage8');

    pageButtonRemove();

    page1.classList.add('pageSelectAct');
    page2.classList.add('pageSelectAct');
    page3.classList.add('pageSelectAct');
    page4.classList.add('pageSelectAct');
    page5.classList.add('pageSelectAct');
    page6.classList.add('pageSelectAct');
    page7.classList.add('pageSelectAct');
    page8.classList.add('pageSelectAct');
  };



//actual tingys

  if(document.body.className.match('navChange')) {

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
   if(navMove.classList.contains('navPage7')){
     page7.classList.add('pageButAct');
   } else{
    page7.classList.remove('pageButAct');
   };
   if(navMove.classList.contains('navPage8')){
     page8.classList.add('pageButAct');
   } else{
    page8.classList.remove('pageButAct');
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
    navMove.classList.remove('navPage7');
    navMove.classList.remove('navPage8');
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

  page7.addEventListener('click', () =>{
    pageSelectButton.classList.remove('pageButAct');
    pageAssignRemove();

    navMove.classList.add('navPage7');
    
    pageButtonActivation();
   });

  page8.addEventListener('click', () =>{
    pageSelectButton.classList.remove('pageButAct');
    pageAssignRemove();

    navMove.classList.add('navPage8');
    
    pageButtonActivation();
   });

  };




//for every new page, add consts
  const musicNav = document.getElementById('musicNav');
  const myMusicNav = document.getElementById('myMusicNav');
  const exampleNav = document.getElementById('exampleNav');
  const projDirNav = document.getElementById('projDirNav');
  const expediaNav = document.getElementById('expediaNav');

  if(document.URL.includes("examplelol")) {
    exampleNav.classList.add('otNavVisible');
  }
  if(document.body.classList.contains("navProjDir")) {
    projDirNav.classList.add('otNavVisible');
  };
  if(document.body.classList.contains('navExpedia')) {
    expediaNav.classList.add('otNavVisible');
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


  