
const tank = [
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

const listSort = (arr) => {
  return arr
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

console.log(listSort(tank))
