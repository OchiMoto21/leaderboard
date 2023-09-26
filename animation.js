// Might add animation using Javascript?

const element = document.getElementsByTagName("tr");
console.log(element);
for (var i=0 ; i < element.length; i++){
    element[i].addEventListener("mouseover", event => {
        console.log("In");
    });
    
    element[i].addEventListener("mouseout", event => {
        console.log("Out");
    })
}