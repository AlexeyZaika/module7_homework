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
class Appliance {
  constructor(type) {
    this.type = type;
  }
  getState(state) {
    if (state == true) {
      console.log(`${this.name} исправен`);
    } else {
      console.log(`${this.name} не исправен`);
    }
  }
}

let resVoltage = 0;

class ElectrApp extends Appliance {
  constructor(name, voltage, type) {
    super(type);
    this.name = name;
    this.voltage = voltage;
  }
  switch(status) {
    if (status == 'on') {
      resVoltage += this.voltage;
      console.log(`${this.type} - ${this.name}, мощностью ${this.voltage}Вт, подключен к сети`);
    } else {
      console.log(`${this.type} - ${this.name}, мощностью ${this.voltage}Вт, не подключен к сети`);
    }
    return resVoltage;
  }
}

const lamp = new ElectrApp('Светильник', 60, 'Электроприбор');
const computer = new ElectrApp('Компьютер', 600, 'Электроприбор');
const iron = new ElectrApp('Утюг', 120, 'Электроприбор');

lamp.getState(true);
computer.getState(true);
iron.getState(true);

lamp.switch('on');
computer.switch('on');
iron.switch('off');

console.log(`Общая потребляемая мощность ${resVoltage}Вт`);
