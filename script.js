
// Дефолтный массив
let tank = [
{id: 1, type: 'mango', price: 35},
{id: 2, type: 'mango', price: 77},
{id: 3, type: 'potato', price: 84},
{id: 4, type: 'potato', price: 25},
{id: 5, type: 'mango', price: 33},
{id: 6, type: 'apple', price: 50},
{id: 7, type: 'mango', price: 89},
{id: 8, type: 'apple', price: 60},
{id: 9, type: 'mango', price: 51},
{id: 10, type: 'apple', price: 82},
];

1. Функция для создания нового массива из дефолтного
const newArrFromDefaultArr = () => {
   const newArr = tank
    .filter((elem)=> elem.type !=='mango')
    .map((elem)=> {
      if (elem.type === 'apple') {
        return {
         id: elem.id, 
         type: elem.type, 
         price: elem.price * 3,
        }
      } else {return elem}
    });
  return newArr;
}

const newArr = newArrFromDefaultArr();
console.log('New arr created', newArr);

// 2. Функция для изменения дефолтного массива
const changignDefaultArr = () => {
  tank = tank
    .filter((elem)=> elem.type !=='mango')
    .map((elem)=> {
      if (elem.type === 'apple') {
        return {
         id: elem.id, 
         type: elem.type, 
         price: elem.price * 3,
        }
      } else {return elem}
    });
}

console.log('before  changing default arr', tank);
changignDefaultArr();
console.log('after changing default arr', tank);

