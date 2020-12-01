//Part1

    let total = a.sort((a,b) => a-b);
    let left = 0;
    let right = total.length - 1;
    let sum = 0;
    
    for(let i = 0; i < total.length; i++) {
        if(total[right] + total[left] > 2020) {
            right--;
        } else if(total[right] + total[left] < 2020) {
            left++;
        } else if(total[right] + total[left] === 2020) {
            console.log(total[right], total[left])
            sum = total[right] * total[left];
        }
    }
    console.log(sum)
    


//Part2


for(let i = 0; i < a.length; i++) {
    for(let j = 1; j < a.length; j++) {
        for(let k = 2; k < a.length; k++) {
            if(a[i] + a[k] + a[j] === 2020) {
                return (a[i] * a[j] * a[k]);
            } 
        }
    }
}
