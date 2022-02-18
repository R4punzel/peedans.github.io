function askMyName() {
    const name = prompt("Please enter your name", "pee")
 
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById ("name").innerHTML
    alert(h1message + 'เหยียบเบรคคิดถึงเมีย เข้าเกียร์คิดถึงเธอ')
 }

 function calAge(){
   const age = prompt("Please enter your Age")
   alert ("ยินดีด้วย"+"นายอยู่ในประเทศนี้มา"+(2022-age)+"ปีแล้ว")
}

function loadProfile(){
   const name = "pee"
   const province = "YALA"
   
   document.getElementById("my-name").innerHTML = name
   document.getElementById("my-province").innerHTML = province
}
