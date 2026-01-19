function calculateCartPrice(val1,val2,...num1){
    return num1

}
console.log(calculateCartPrice(200,300,400))

const user = {
    username: "pri",
    price: 199
}

function handleObject(anyuser){
    console.log(`Username is ${anyuser.username} and price is ${anyuser.price}`)
}

handleObject(user)
//or
handleObject({
    username: "see",
    price: 399
})

const arr = [200,300,400,500]
function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond(arr))