let world = 50;

function isString(a,b,c,d) {
    let list = [a,b,c]
    for (let i = 0; i < list.length; i++){
        console.log(typeof(list[i]))
        if (typeof(list[i]) === "") {
            console.log("strings") 
        } else console.log("not strings")
    }
    console.log(list)
    return list
}

isString("hi","kelly", world,"luis");
isString("hi","kelly", world,"Karla");