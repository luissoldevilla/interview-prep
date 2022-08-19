function activityNotifications(debits, days) {
    // Write your code here
    // expenditure.sort((a, b) => a - b);

    // console.log(expenditure);
    // let notifications = 0;
    // let sub = [];

    // for (let i = d; i < expenditure.length; i++) {  
    //     let gastoActual = expenditure[i];
    //     // console.log(gastoActual);
    //     for (let j = 0; j < expenditure.length; j++) {
    //         console.log(expenditure[j])

    //     }
    // }

    // created new object 
    const countArr = new Array(201).fill(0)
    // console.log(countArr);
    let notices = 0

    // we load our object countArr   
    for (let i = 0; i < days; i++) {
        countArr[debits[i]]++
        // console.log(countArr);
    }

    for (let i = days; i < debits.length; i++) {
        // we invoke our median function and put it inside a varible
        const medianx2 = getMedianx2(countArr, days)

        // 
        if (debits[i] >= medianx2) notices++
        if (i === debits.length - 1) break
        countArr[debits[i - days]]--
        countArr[debits[i]]++
    }
    // console.log(notices);
    return notices
    

}

// implemented a secondary function
// to calculate the median
// it gets called on ur main functions
function getMedianx2(countArr, days) {
    // declare a counter
    let sum = 0
    // for loop goes through the array
    for (let i = 0; i < countArr.length; i++) {
      sum += countArr[i]
    //   console.log(sum);
    //   console.log(countArr[i]);
    //
      if (sum * 2 === days) return (i * 2 + 1)
      if (sum * 2 > days) return (i * 2)
    //   console.log(i);
    }
}

// getMedianx2([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);

activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);
// second test: 
activityNotifications([1,2,3,4,4], 4);
