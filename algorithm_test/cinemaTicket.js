

const cinemaTicketReturn = (row) => {
    let response = "SI";
    let b25 = 0, b50 = 0;
    row.forEach(b => {
        if(b === 25) b25 += 1
        if(b === 50) {b25 -= 1; b50 += 1;} 
        if(b === 100) {b25 -= 1; b50 -= 1;}
        if(b25<0 || b50<0){
            response = "NO";
            return;
        }
    })

    return response;
}
