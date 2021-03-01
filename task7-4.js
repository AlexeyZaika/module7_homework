/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

План:
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от 
родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)
*/
function Appliance(type) {
  this.type = type
}

Appliance.prototype.getState = function(state) {
  if (state == true) {
    console.log(`${this.name} исправен`);
  } else {
    console.log(`${this.name} не исправен`);
  }
}

function ElectrApp(name, voltage) {
  this.name = name,
  this.voltage = voltage
}

ElectrApp.prototype = new Appliance('Электроприбор');

let resVoltage = 0;

ElectrApp.prototype.switch = function(status) {
  if (status == 'on') {
    resVoltage += this.voltage;
    console.log(`${this.type} - ${this.name}, мощностью ${this.voltage}Вт, подключен к сети`);
  } else {
    console.log(`${this.type} - ${this.name}, мощностью ${this.voltage}Вт, не подключен к сети`);
  }
  return resVoltage;
}

const lamp = new ElectrApp('Светильник', 60);
const computer = new ElectrApp('Компьютер', 600);
const iron = new ElectrApp('Утюг', 120);

lamp.getState(true);
computer.getState(true);
iron.getState(true);

lamp.switch('on');
computer.switch('on');
iron.switch('off');

console.log(`Общая потребляемая мощность ${resVoltage}Вт`);
