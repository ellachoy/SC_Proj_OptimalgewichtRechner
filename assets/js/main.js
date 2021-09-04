console.log('hi');
const size =document.getElementById("size");
const age = document.getElementById("age");
const breite = document.getElementById("breite")
// const schmale = document.getElementById("schmale")
// let isbreite=true

    function rechnen(){
        // console.log("rechnen");
       let num_Size=Number(size.value);// werte von size
       let num_Age=Number(age.value);// werte von age



        if (breite.checked){
            document.getElementById("result").innerHTML=`Dein Idealgewicht ist:${breiteKoerper(num_Size, num_Age)}`;
           

        }else{
            document.getElementById("result").innerHTML=`Dein Idealgewicht ist:${schmaleKoerper(num_Size, num_Age)}`;
        }
    }

   function schmaleKoerper(size,age){
       return (size - 100) + (age / 10) * 0.9 * 0.9;
   }
//    schmaleKoerper();
   function breiteKoerper(size, age){
    return (size - 100) + (age / 10) * 0.9 * 1.1;
   }

//    rausnehmen
//    breiteKoerper();
//    function getSize(){
//        if(breite.checked){
//            console.log("breite");
//        }else{
//            console.log('schmale');
//        }
//    }
 

//  ersetzen !!!
// if(breite.checked) {
//     let gewicht = breiteKoerper(num_Size, num_Age);
//     document.getElemnentByID(...).innerHtml = '...' + gewicht
//   }