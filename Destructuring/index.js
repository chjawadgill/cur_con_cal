obj = {
    name: 'jawad',
    email: 'jawad@gmail.com',
    address:{
        city: 'Lahore',
        state: 'Punjab',
        house: '32'
    }
}
// const {name, address:{city, house}} = obj
// console.log(name, house, city)

function pri({name, address:{city, house}}){
console.log(name, city, house)
}
pri(obj)