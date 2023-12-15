let hr=document.getElementById("hrs")
let min=document.getElementById("mn")
let sc=document.getElementById("sc")

// let d1=new Date();
// console.log(d1.getHours())
// console.log(d1.getMinutes())
// console.log(d1.getSeconds())

setInterval(()=>{
let d1=new Date();
// hr.innerHTML=d1.getHours();
// min.innerHTML=d1.getMinutes();===>Only for one digit during 0 to 9
// sc.innerHTML=d1.getSeconds()

let h=d1.getHours();
let mi=d1.getMinutes();
let se=d1.getSeconds();


if (h > 12) {
    h = h - 12;
    ampm = "PM";
}


hr.innerHTML=(h<10?"0":"")+h
min.innerHTML=(mi<10?"0":"")+mi//===>for double digits during 0 to 9
sc.innerHTML=(se<10?"0":"")+se

},1000)

