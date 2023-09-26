// Might add animation using Javascript?
const element = document.getElementsByTagName("tr");
console.log(element);
var parent = null;
for (var i=0 ; i < element.length; i++){
    element[i].addEventListener("mouseover", event => {
        // console.log(i);
        // console.log(element.item(i));
        // console.log(event);
        console.log(event.target);
        var position =(window.getComputedStyle(event.target.parentElement).getPropertyValue("background-position"));
        document.documentElement.style.setProperty('--position', position);

        event.target.parentElement.classList.add("over");
        event.target.parentElement.classList.remove("out");
        console.log(event.target.parentElement);

        // event.target.parentElement.classList

    });
    
    element[i].addEventListener("mouseout", event => {
        // console.log(event.target.parentElement.cssRules[0].style.getPropertyValue('background-position'));
        var position =(window.getComputedStyle(event.target.parentElement).getPropertyValue("background-position"));
        document.documentElement.style.setProperty('--position', position);
        event.target.parentElement.classList.add("out");
        event.target.parentElement.classList.remove("over");

        

        console.log(event.target.parentElement.classList);

    })
}