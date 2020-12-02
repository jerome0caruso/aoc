//List
let pw = `
6-10 s: snkscgszxsssscss
6-7 b: bbbbbxkb
2-4 n: nnnjn
....etc
`

//Part1

let thePw = pw.split('\n');
let passwordsThatWork = 0;

for(let l of thePw) {
    let a = l.split(" ");
    let [num1, num2] = [a[0].split('-')[0], a[0].split('-')[1]];
    let letter;
    if(a[1] !== undefined) {
        letter = a[1].charAt(0)
    }
    if (a[2] !== undefined) {
        let counter = a[2].split("").filter(le => {
            return le === letter;
        })   
        if(counter.length >= num1 && counter.length <= num2) {
            passwordsThatWork++;
        }
    }
}

console.log(passwordsThatWork)




//Part2

let thePw = pw.split('\n');
let passwordsThatWork = 0;

for(let l of thePw) {
    let a = l.split(" ");
    let [num1, num2] = [a[0].split('-')[0], a[0].split('-')[1]];
    let letter;
    if(a[1] !== undefined) {
        letter = a[1].charAt(0);
    }
    if (a[2] !== undefined) {
        if((a[2][num1 -1] === letter && a[2][num2 -1] !== letter) ||
         (a[2][num1 -1] !== letter && a[2][num2 -1] === letter) ){
            passwordsThatWork++;
        }

    }
}

console.log(passwordsThatWork);

