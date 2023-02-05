import React from "react";

function Practice(){
let name = "Vishal"    
let time = new Date().toLocaleTimeString();   
let date = new Date().toLocaleDateString();
const arr = [1,2,3,45]
const update = arr.map((ele)=>{
    return <div>{ele}</div>
})
    return(
        <>
        <h1>{update}</h1>
        <h1>My Name Is {name}</h1> 
        <h1>Today's Date is {date}</h1>
        <h2>Current Date is ={time} </h2></>
       
    );

}

export default Practice;