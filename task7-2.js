/*
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет 
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/
const user = {
  name: 'Alexey',
  sirname: 'Zaika',
  age: 39
}

const nameUser = 'name';

function getPropObj (obj, str) {
  let num = 0;
  for (let prop in obj) {
    if (prop == str) {
      num++;
    }
  }
  if (num > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

getPropObj(user, nameUser);