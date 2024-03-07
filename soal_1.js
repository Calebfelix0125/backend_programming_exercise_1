let i;
let j;
let fk;

for (i = 1; i < 1000; i++) {
    fk = 0;
    for (j = 1; j < 1000; j++) {
        if (i%j === 0) {
            fk = fk + 1;
        }
    }

    if (fk === 2) {
        console.log(i);
    }
}