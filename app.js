let button=document.getElementById("button");
var numberInshape=1;
var oldvalue=0;

button.onclick=() =>{
    let n=document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("rectangle");
    const box=document.getElementById("box");
    const color=document.getElementById("color").value;
    

    n=Number(n)+Number(oldvalue);

    for(let j=numberInshape;j<=n;j++){
        let shape=document.createElement("div");
        shape.innerHTML += numberInshape;
        if(circle.checked){
            shape.classList.add("circle");
            shape.style.backgroundColor=color;}
        else if(square.checked){
            shape.classList.add("square");shape.style.backgroundColor=color;}
        else if(rectangle.checked){
            shape.classList.add("rectangle");shape.style.backgroundColor=color;}
        else
        document.write("Invalid Input");

        numberInshape++;
        box.appendChild(shape);
        oldvalue=document.getElementById("box").lastElementChild.innerHTML;
    }

};