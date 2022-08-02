function countTriplets(arr, r) {
    
    // we declare hashmaps
    let indices = {};
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        const indice = arr[i];
        indices[indice] = true;
        console.log(indices);
        if (indices[indice] % r) {// && indice[i+1] == indice[i]+1 && indice[i+2] == indice[i]+2) {
            console.log(indices[indice]);
            const cuenta = counter++;
            console.log(cuenta);

        }
    }


}

countTriplets([1, 4, 16, 64], 4);