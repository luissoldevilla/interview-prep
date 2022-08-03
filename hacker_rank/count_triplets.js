function countTriplets(arr, r) {
    //
    // we declare hashmaps
    // let indices = {};
    // let counter = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     const indice = arr[i];
    //     indices[indice] = true;
    //     console.log(indices);
    //     if (indices[indice] % r) {
    //         console.log(indices[indice]);
    //         const cuenta = counter++;
    //         console.log(cuenta);

    //     }
    // }
    const hGram = {}
    const hGram2 = {}
    let count = 0
    if (arr.length < 3) return 0
    for (let i = arr.length - 1; i >=0; i--) {
      let t1 = arr[i]
      let t2 = t1 * r
      let t3 = t2 * r
      count += hGram2[t3] || 0
      hGram2[t2] ?
        hGram2[t2] += hGram[t2] || 0 :
          hGram2[t2] = hGram[t2] || 0
      hGram[t1] ? hGram[t1]++ : hGram[t1] = 1
    }
    console.log(count);
    return count

}

countTriplets([1, 4, 16, 64], 4);