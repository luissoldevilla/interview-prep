function activityNotifications(expenditure, d) {
    // Write your code here
    // expenditure.sort((a, b) => a - b);

    // console.log(expenditure);
    let notifications = 0;
    let sub = [];

    for (let i = d; i < expenditure.length; i++) {  
        let gastoActual = expenditure[i];
        // console.log(gastoActual);
        for (let j = 0; j < expenditure.length; j++) {
            console.log(expenditure[j])
        }
    }

}

activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);