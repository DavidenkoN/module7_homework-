function ElectroAppliance (name,power){  
  this.name = name, 
  this.power = power,
  this.on = "Выключено",
  this.getPlugged = function(){ 
    this.on = "Включено";
    console.log(`${this.name}, ${this.power}, Включен в розетку`)
 }
  this.getUnPlugged = function(){   
    this.on = "Выключено";
    console.log(`${this.name}, ${this.power}, Выключен из сети`)
 }
 this.status = function(){   
    console.log(`${this.name}, Текущее состояние = ${this.on}`)
 }
}

function Lamp(name, color, power){
  this.name = name, 
  this.color = color,
  this.power = power,
  this.shine = function(){    
    console.log(`${name} начал активно светится ${color} цветом`)
 }
}

function Computer(name, model, power){
  this.name = name, 
  this.model = model,
  this.power = power,
  this.showFilm = function(){
  console.log(`${name} показывает фильм`)
 }
}

//Computer.prototype = new ElectroAppliance()
//Lamp.prototype = new ElectroAppliance()

const lampochka = new Lamp('Светильник','белый',30); 
const comp = new Computer('Acer','black',300);
const comp2 = new Computer('HP','white',350);

/*lampochka.getPlugged();
lampochka.shine();
lampochka.status();

comp.getPlugged();
comp.status();
comp2.showFilm();
 
let sum = lampochka.power + comp.power + comp2.power;
console.log(sum + "ВТ");*/


function DesktopAppliances(name, desktop){
 this.name = name
 this.desktop = desktop
}
 DesktopAppliances.prototype = new ElectroAppliance()
 
 const lamp = new DesktopAppliances('Светильник', 'настольный');
 console.log(lamp)

