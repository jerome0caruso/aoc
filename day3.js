//Tree Map 
let array = `
.....#.........#...#..##....#..
.#........#...#........#.......
......#......#..#...#....#.#..#
...#.#####.#.......##.#........
etc....
`
// Part 1

let inputArray = array.split("\n");

let countingTrees = (right) => {
    let treeCount = 0;
    let char = 0;

    for (i = 1; i < inputArray.length; i++) {
        
        if(inputArray[i].length > 0) {

        if (inputArray[i].charAt(char) === "#") {
            treeCount++;
        }
 
        char += right;
        
        if (char > 30) {
            char = char - 31;
        }
       }
    }
    return `Tree Count: ${treeCount}`;
}

countingTrees(3);



//Part 2

let inputArray = array.split("\n");

let countingTrees = (right, down) => {
    let treeCount = 0;
    let char = 0;

    for (i = 1; i < inputArray.length; i += down) {
        
        if(inputArray[i].length > 0) {
          console.log(inputArray[i])
        if (inputArray[i].charAt(char) === "#") {
            treeCount++;
        }
 
        char += right;
        
        if (char > 30) {
            char = char - 31;
        }
       }
    }
    return `Tree Count: ${treeCount}`;
}

countingTrees(1, 2);

let allSlopesTreeCount = [189, 74, 65, 63, 30];

let allRoutes = allSlopesTreeCount.reduce((total, num) => total *= num);

console.log(`Total Tree Count: ${allRoutes}`);
