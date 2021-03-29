// We first get the current html file name
let path = window.location.pathname;
let page = path.split("/").pop();

// var is used in old JS, let is the new var inthe new JS

const HOME = "index.html";
const ABOUT = "about.html";
const CONTACT = "contact.html";
const CASESTUDY = ["ebuddy.html", "dese.html", "jade.html"];
const HOME_LINK = "HOME";
const ABOUT_LINK = "ABOUT ME";
const CONTACT_LINK = "CONTACT";


const navigation = document.getElementsByClassName("navigation-link");


  // if we are in index.html (localCompare 0, >=1, <= -1) (0, HOME === page | 1 HOME > page | -1 HOME < page)
  // HOME.localeCompare(page) === 0 if page is index.html ----> !0 === true
if (!HOME.localeCompare(page)){
    
    // navigation.length === 3
    // k = 0 | navigation[0] = 1st child
    // k = 1 | navigation[1] = 2nd child
    // k = 2 | navigation[2] = 3rd child
    for(let k=0; k<navigation.length; k++){
        if(!navigation[k].textContent.toUpperCase().localeCompare(HOME_LINK)){
            navigation[k].classList.add("white-link");
        }
    };

}else if(!ABOUT.localeCompare(page)){
    
    for(let i=0; i<navigation.length; i++){
        if(!navigation[i].textContent.toUpperCase().localeCompare(ABOUT_LINK)){
            navigation[i].classList.add("white-link");
        }
    };
}else if(!CONTACT.localeCompare(page)){
    
    for(let i=0; i<navigation.length; i++){
        if(!navigation[i].textContent.toUpperCase().localeCompare(CONTACT_LINK)){
            navigation[i].classList.add("white-link");
        }
      
    };
}else if(CASESTUDY.includes(page)){
    console.log(page);
    console.log(navigation.length);
    console.log(navigation);
    for(let i=0; i<navigation.length; i++){
        
        console.log(navigation.length);
        if(!navigation[i].textContent.toUpperCase().localeCompare(HOME_LINK)){
            navigation[i].classList.add("white-link");
        } 
    };
}