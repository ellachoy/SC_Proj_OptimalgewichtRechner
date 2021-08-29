console.log('hi');
const size = Number(document.getElementById("size").value)
const age = Number(document.getElementById("age").value)
const breite = document.getElementById("breite")
const schmale = document.getElementById("schmale")
let isbreite=true

    function rechnen(){
        // console.log("rechnen");
        if (isbreite){
            document.getElementById("result").innerHTML=`Dein Idealgewicht ist:${schmaleKoerper}`;

        }else{
            document.getElementById("result").innerHTML=`Dein Idealgewicht ist:${breiteKoerper}`;
        }
    }

   function schmaleKoerper(size, age){
       return (size - 100) + (age / 10) * 0.9 * 0.9;
   }
   schmaleKoerper();
   function breiteKoerper(size, age){
    return (size - 100) + (age / 10) * 0.9 * 1.1;
   }
   breiteKoerper();
   function getSize(){
       if(breite.checked){
           console.log("breite");
       }else{
           console.log('schmale');
       }
   }
 
