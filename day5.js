//tickets

let str =`
BFBBBBBLLR
BBFFBBFRRL
FBFBFFFRRL
etc...
`
// ----------Part1------------

let strArr= str.split("\n");
let reg = /[a-zA-Z]/;
let largestSeatId = [];


function giveLower(lowest, highest){
    highest = Math.floor((highest - lowest) / 2) + lowest;
    return highest;
}

function giveHigher(lowest, highest){
    lowest = Math.ceil((highest - lowest) / 2) + lowest;
    return lowest;
}

// get rid of ""
let onlyTicketsNum = strArr.filter(ticket => ticket !== "");

onlyTicketsNum.map(ticket => {
    let highest = 127;
    let lowest = 0;
    let rightest = 7;
    let leftest = 0;
    let firstRoundFlag = false;

    for (let i = 0; i < ticket.length; i++) {
        
    //make sure a vaild entry    
    if(reg.test(ticket)){
        
        if(ticket[i] === "F" && firstRoundFlag === false){
            highest = Math.floor(highest / 2) //gives lower half(small numbers) ? took floor cause 0 index
            firstRoundFlag = true;

        } else if (ticket[i] === "B" && firstRoundFlag === false) {
               lowest = Math.ceil(highest / 2) //gives higher half (larger numbers)
               firstRoundFlag = true;
        }else if(ticket[i] === "F" && firstRoundFlag === true) {
            highest = giveLower(lowest, highest);
         

        } else if(ticket[i] === "B" && firstRoundFlag === true) {
            lowest = giveHigher(lowest, highest)
            
        }
        if(ticket[i] === "R") {
            leftest = giveHigher(leftest, rightest);
            
        } else if (ticket[i] === "L"){
            rightest = giveLower(leftest, rightest);
        
        }

        };//loop of all valid strings
        
    }// end of loops
    
   largestSeatId.push(highest * 8 + leftest)

})

console.log(`Highest seatId is ${Math.max(...largestSeatId)}`);


///-------Part 2--------

let findMySeat = largestSeatId.sort((a,b) => a-b).filter((seat, i, array) => array[i +1] - seat > 1);
let missingSeat = 1;
console.log(`My Ticket ID is: ${Number(findMySeat) + Number(missingSeat)}`)