//Example 1:
const car1 = ['MERCEDES','AUDI','BMW','TOYOTA']
const car2 = [...car1]
const car3= [...car1,'NISSAN','FORD']
console.log(car1)
console.log(car2)
console.log(car3)
//Example 2:
const car4 = ['NISSAN','FORD']
const car5 = [...car1,...car4]
console.log(car5)
//Example 3:
const cars = {
    Brand : 'AUDI',
    Color : 'RED'
}
const cars1 = {...cars}
console.log(cars1)
//Example 4:
const cars2  = {
    Brand : 'BMW',
    Color : 'BLACK',
    Year : 2023
}
const cars3={...cars1,...cars2}
console.log(cars3)
//Example 5:
const numbers = [2,4,65,1,56,2,2]
const [a,b,c,...others] = numbers
console.log(a)
console.log(b)
console.log(c)
console.log(others)