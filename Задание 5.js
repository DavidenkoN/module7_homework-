class ElectroAppliance {
  constructor (name, power){
    this.name = name;
    this.power = power;
    this.work = 'off';
}
  plugged(){
   this.work = 'on';     
   console.log(`${ this.name}, ${ this.power}, Включен в розетку`);
 }
}  

class Lamp extends ElectroAppliance {
   constructor (name, power, color){
     super(name, power);     
     this.color = color;
   } 
   shinesYellow(){
     console.log(`${this.name}, ${this.power}, горит желтым`);  
   }
   deviseStatus(){
     console.log(`${this.name}, ${this.power}, ${this.color}, Включен?? = ${this.work} `); 
   }
 }

const lampochka1 = new Lamp("Светильник", 300, "красный"); 
 //lampochka1.plugged();
 //lampochka1.shinesYellow();

const lampochka2 = new Lamp("Лампа",20,'yellow');
//Electro.Plugged()
//console.log(Lampochka)

class Computer extends ElectroAppliance {
   constructor (name, power, model){
     super(name, power);
     this.model = model;
} 
  mailArrives(){
   console.log(`${this.name}, ${this.model}, Пришла почта`);  
 }
}
const comp = new Computer("Hp",200,'9000Gb');
comp.mailArrives();