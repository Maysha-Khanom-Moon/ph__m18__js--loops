// break: i am done with this loop

console.log('Break:');
let i = 10;
while (i <= 20) {
    if(i == 15) {
        break;
    }
    console.log(i);
    i++;
}

console.log('\n');


// continue: skip this one and go for next iteration

console.log('continue:');
i = 10;
while (i <= 20) {
    if(i == 15) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

console.log('\n');