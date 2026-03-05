// note that whenever a any button inside a form is clicked it act as submit.
//event on forms:-
document.getElementById("forms").addEventListener("submit",function(e){
    e.preventDefault();
    // .innerHTML,.textContent,.innerText dont work on <input>
    // so we need to use .value and always put input type="text"
    // and then convert it to number using parseInt().
    const h=parseInt(document.getElementById("inp1").value);
    const w=parseInt(document.getElementById("inp2").value);
    const result= document.getElementById("result");
    if(h<0 || h==0 || isNaN(h)){
        result.innerHTML="Please enter a valid Height";
    }
    else if(w<0 || w==0 || isNaN(w)){
        result.innerHTML="Please enter a valid Weight";
    }
    else {
        // formula=weight(kg)/height(m^2). we have height in cm.
        const bmi=(w/((h/100)*(h/100))).toFixed(2);
        result.innerHTML=`The Calculated BMI is ${bmi}`;
        result.style.color="white";
        if(bmi<18.6){
            document.querySelector("#underweight").style.backgroundColor="yellow";
            document.querySelector("#normal").style.backgroundColor="gray";
            document.querySelector("#overweight").style.backgroundColor="gray";
        }
        else if(bmi>=18.6 && bmi<=24.9){
            document.querySelector("#underweight").style.backgroundColor="gray";
            document.querySelector("#normal").style.backgroundColor="yellow";
            document.querySelector("#overweight").style.backgroundColor="gray";
        }
        else{
            document.querySelector("#underweight").style.backgroundColor="gray";
            document.querySelector("#normal").style.backgroundColor="gray";
            document.querySelector("#overweight").style.backgroundColor="yellow";
        }
    }
    
})
// to read input value we need to use .value