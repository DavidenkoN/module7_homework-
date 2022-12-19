let person = {name:"Vasya",
              age:18,
              login:"vass333",
              email:"vasya220@mail.ru"
             };

function abc (str, obj){
 for (let key in obj) {    
    if (key === str){
      func = true;      
    } 
   else {
     func = false;
   }
  }  
  return (str in obj);
}

let test = abc('login',person);
console.log(test)
