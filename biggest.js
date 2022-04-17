/*
Uzduotis: reikia rasti didziausia skaiciu tarp VISU masyve esanciu "normaliu" skaiciu.
*/
const a = [1, 2, 3, 4, 10, 6, 7, 8, 10];
const b = [1, 2, true, 3, 4, '', 10, 6, NaN, 7, 8, -Infinity, 10];
const c = [
    1, true, 3, { name: 'Petras' },
    '', ['labas', 'rytas'], 6, NaN,
    8, [2, 100], [4, 7], -Infinity, 10
];
const d = [
    -1, -2, -3,
    [-4], [-5],
    [
        -6, -7,
        [-8, -9],
        [
            -10, -11,
            [0, 4],
        ],
        [-12, -13],
    ]
];

function isGoodNumber(n) {
    return typeof n === 'number' && isFinite(n)
}

function biggest(list) {

    let greatestNumber = -Infinity;
    for (const n of list) {
        if (Array.isArray(n)) {
            const max = biggest(n)
            if (greatestNumber < max){
                greatestNumber = max;
            }
        }
        if (!isGoodNumber(n)) {
            continue;
        }
        if (greatestNumber < n){
            greatestNumber = n;
        }
    }
    return greatestNumber;
}



// const r1 = biggest(a);
// console.log('AREA', r1, '-->', 10);

// const r2 = biggest(b);
// console.log('AREA', r2, '-->', 10);

// const r3 = biggest(c);
// console.log('AREA', r3, '-->', 100);

const r4 = biggest(d);
console.log('AREA', r4, '-->', 4);