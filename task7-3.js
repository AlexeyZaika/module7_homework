/*
Написать функцию, которая создает пустой объект, но без прототипа.
*/
function object(){
  return Object.create(null);
}

console.log(object());