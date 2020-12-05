// Id

let fff = `
ecl:hzl byr:1926 iyr:2010
pid:221225902 cid:61 hgt:186cm eyr:2021 hcl:#7d3b0c

hcl:#efcc98 hgt:178 pid:433543520
eyr:2020 byr:1926
ecl:blu cid:92
iyr:2010

iyr:2018
eyr:2026
byr:1946 ecl:brn
hcl:#b6652a hgt:158cm
pid:822320101

...etc
`

// Part 1

let strArray = strObj.split("\n");
let pusher = [];
let obj = "";
let switcher = false;

//iterate over string array
for(let i = 0; i < strArray.length; i++) {
    if(strArray[i] === "") {
        switcher = true;
    } else if (strArray[i] !== "" && switcher === true) {
        obj += strArray[i];

        if(strArray[i +1] === ""){
            pusher.push(obj);
            switcher = false;
            obj = "";
        }
    }
}


let pusher2 = [];
let valideId = 0;

for(let i = 0; i < pusher.length;i++) {
    let pusher2 = [];
    pusher2.push(/byr/.test(pusher[i]))
    pusher2.push(/iyr/.test(pusher[i]))
    pusher2.push(/eyr/.test(pusher[i]))
    pusher2.push(/hgt/.test(pusher[i]))
    pusher2.push(/hcl/.test(pusher[i]))
    pusher2.push(/ecl/.test(pusher[i]))
    pusher2.push(/pid/.test(pusher[i]))

    console.log(pusher2)

    if(!pusher2.includes(false)){
        valideId = valideId +1;
        pusher2 = [];
    } else {
        pusher2 = [];
    }
}

console.log(valideId);





//----------------Part 2------------------



let strArray = fff.split("\n");
let pusher = [];
let obj = "";
let switcher = false;

//iterate over string array
for(let i = 0; i < strArray.length; i++) {
    if(strArray[i] === "") {
        switcher = true;
    } else if (strArray[i] !== "" && switcher === true) {
        obj += strArray[i] + " ";

        if(strArray[i +1] === ""){
            pusher.push(obj);
            switcher = false;
            obj = "";
        }
    }
}


let pusher2 = [];
let valideId = 0;

for(let i = 0; i < pusher.length;i++) {
    
    let pusher2 = [];
    
    pusher2.push(/byr/.test(pusher[i]))
    pusher2.push(/iyr/.test(pusher[i]))
    pusher2.push(/eyr/.test(pusher[i]))
    pusher2.push(/hgt/.test(pusher[i]))
    pusher2.push(/hcl/.test(pusher[i]))
    pusher2.push(/ecl/.test(pusher[i]))
    pusher2.push(/pid/.test(pusher[i]))

    let allOkay = [];

    let checker = pusher[i].split(" ");

    for(let i = 0; i < checker.length; i++){
        if(checker[i].includes('byr')){
            let regex = /[0-9]/g
            let numbers = checker[i].match(regex)
            if(Number(numbers.join("")) >= 1920 && Number(numbers.join("")) <= 2002){
                allOkay.push(true);
                console.log("Byr")
            }
        }
        if(checker[i].includes('iyr')){
            let regex = /[0-9]/g
            let numbers = checker[i].match(regex)
            if(Number(numbers.join("")) >= 2010 && Number(numbers.join("")) <= 2020){
                allOkay.push(true);
                console.log("iyr")
            }
        }
        if(checker[i].includes('eyr')){
            let regex = /[0-9]/g
            let numbers = checker[i].match(regex)
            if(Number(numbers.join("")) >= 2020 && Number(numbers.join("")) <= 2030){
                allOkay.push(true);
                console.log("eyr")
            }
        }
        if(checker[i].includes('hcl')){
            let regex = /[0-9a-f]/g;
            let reg = /[#]/;
            
           if(checker[i].match(regex) && reg.test(checker[i]) && checker[i].length === 11){
               allOkay.push(true);
               console.log("hcl")
           }
        }
        if(checker[i].includes('ecl')){
            let regex = /\b(?:amb|brn|gry|grn|hzl|oth|blu)\b/gi;
            
           if(regex.test(checker[i])){
               allOkay.push(true);
               console.log("ecl")
           }
        }
        if(checker[i].includes('pid')){
            let regex = /[0-9]/g;
           if(regex.test(checker[i]) && checker[i].length === 13){
               allOkay.push(true);
               console.log("pid")
           }
        }
        if(checker[i].includes('hgt')){
            let regex = /[0-9]/g;
            
           if(regex.test(checker[i]) && checker[i].includes("cm")){
                let numbers = checker[i].match(regex)
                if(Number(numbers.join("")) >= 150 && Number(numbers.join("")) <= 193){
                    allOkay.push(true);
                    console.log("cm")
                }
           }
           if(regex.test(checker[i]) && checker[i].includes("in")){
                let numbers = checker[i].match(regex)
                if(Number(numbers.join("")) >= 59 && Number(numbers.join("")) <= 76){
                    allOkay.push(true);
                    console.log("in")
                }
           }
        };

    }
console.log(allOkay)
    if(allOkay.length === 7){
        valideId++
    }

}

console.log(valideId);