function countTriplets(arr, r) {

    // we declare 2 hashmaps
    const hGram = {}
    const hGram2 = {}
    // countera aqui
    let count = 0
    
    // error  handeling if array is less than 3 
    // if so return 0
    if (arr.length < 3) return 0

    // we make a loop that starts from the end 
    for (let i = arr.length - 1; i >=0; i--) {

    // we declare 3 variable for each indices
      let t1 = arr[i]
    //   console.log(t1)
      let t2 = t1 * r
    //   console.log(t2)
      let t3 = t2 * r
      console.log(t3)

    // case 1: current element is the first digit of potential triplet 
    // i.e. potential triplet = [t1, t1*r, t1*r*r]
    // which means the second and third digits of potential triplet have // been vetted
    // increment count by value associated to the key of hGram2[t3] 
    // wherein said key = 3rd digit of potential triplet 
    // otherwise, if said value is null, increment count by 0

      count += hGram2[t3] || 0
    // case 2: current element is the second digit of potential triplet 
    // i.e. potential triplet = [t1/r, t1, t1*r]
    // which means the third digit of potential triplet has been vetted
    // if hGram2 already includes key of current element 
    // increment value associated to said key by the value associated 
    // to the key of hGram[t2], unless it's null, then to 0.
    // otherwise, add key of current element to hGram2 and set value to
    // the value associated to the key of hGram[t2]
    // unless it's null, then to 0.

    // en esta caso buscamos el segundo numero
    // y lolo comparanos en el hashmap

      hGram2[t2] ?
        hGram2[t2] += hGram[t2] || 0 :
          hGram2[t2] = hGram[t2] || 0
    // lo comparamos y con el segundo hashmap
    // case 3: current element is the third digit of potential triplet 
    // potential triplet = [t1/r/r, t1/r, t1]
    // which means the first and second digits of potential triplet have
    // NOT been vetted
    // if hGram already includes key of current element 
    // increment value associated to said key by 1 
    // otherwise, add key of current element to hGram and set value to 1

      hGram[t1] ? hGram[t1]++ : hGram[t1] = 1
    //   console.log(hGram2[t2]);
    //   console.log(hGram[t2]);

    }
    // console.log(count);
    return count

}

countTriplets([1, 4, 16, 64], 4);
countTriplets([1, 4, 16, 64], 4);
