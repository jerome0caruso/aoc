// Part of List

let str = `niujdxegbrtlq
dxiljmqektnur
usxdvtphcernzi
ityruneqdxw

lztnekjhv
hlvenzktw
ptknvebzgh

qd
d
d
d
etc...
`

// Part 1

let group = str.split("\n");
let pusher = [];
let combiner ="";

for(let i = 0; i < group.length; i++) {
    combiner += group[i];

    if(group[i] === ""){
        pusher.push(combiner);
        combiner = "";
    }
}

let countingBegin ="";
let pusher2 = [];

pusher.forEach((group) => {
    for(let i = 0; i < group.length; i++) {
    if(!countingBegin.includes(group[i])){
        countingBegin += group[i];
    }
}

    pusher2.push(countingBegin);
    countingBegin = '';
})

let totalGroups = pusher2.reduce((total, group) => {
   return total += group.length}, 0);


console.log(totalGroups);


// -----------Part 2---------------


let group = str.split("\n");
let pusher = [];
let combiner ="";
let amountOfPeople;
let myObj = {};
let finalcount = 0;

group.map((element, index, array) => {
    if(array[index + 1] === "" && element !== "") {
       combiner += element;
       pusher.push(combiner);
       combiner = "";
    } else if(element !== "") {
        combiner += element + ',';
    }
})

pusher.map(element => {
    //only 1 person so always just 1
   if(!element.includes(",")) {
        finalcount += element.length;
   } 
   if(element.includes(",")) {
       amountOfPeople = element.match(/[,]/g).length + 1;
       
        for(let i = 0; i < element.length; i++){
            if(element[i] !== ",")
            myObj[element[i]] = (myObj[element[i]] || 0)+1;
        }
      
        for(let key in myObj) {
            if(myObj[key] >= amountOfPeople) {
                finalcount++;
            }
        }
        myObj = {};
   }
   
})

console.log(`Total: ${finalcount}`);