var pages=["HOME", "ABOUT", "INTERACT"];
function create_nav(){
    var nav=document.createElement("nav")
    create_button(pages[0]);
    create_button(pages[1]);
    create_button(pages[2]);
    nav.style.backgroundColor="red";
    nav.style.lineHeight="60px";
    nav.style.height="60px";
    nav.style.display="flex";
    nav.style.justifyContent="center";
    nav.style.alignItems="center";

    document.body.appendChild(nav);

    function create_button(pg){
        var button=document.createElement("button")
        button.style.height="20px"
        button.innerHTML=pg;
        button.addEventListener("click", function (){
            navigate(pg);
        })
        nav.appendChild(button);
    }
}
function create_wrapper(){
    var wrapper=document.createElement("wrapper");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper)
}
function navigate(pg){
    if(pg==="HOME"){
        home_page()
    }else if(pg==="ABOUT"){
        about_page()
    }else{
        inter_page()
    }
}

function home_page() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1")
    header.innerHTML="Home";
    wrapper.appendChild(header);
}
function about_page() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1")
    header.innerHTML="About";
    var name=document.createElement("h3")
    name.innerHTML="Damon"
    wrapper.appendChild(header);
    wrapper.appendChild(name);
}
function inter_page() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1")
    header.innerHTML="Interact";
    var launch=document.createElement("button")
    launch.classList.add("launch");
    launch.innerHTML="Counter"
    var num=0
    var number=document.createElement("p");
    number.innerHTML=num;
    launch.addEventListener("click", function (){
         number.innerHTML="";
         num=(num+1);
         number.innerHTML=num;
    })
    wrapper.appendChild(header);
    wrapper.appendChild(launch);
    wrapper.appendChild(number);
}

create_nav()
create_wrapper()
navigate("HOME")