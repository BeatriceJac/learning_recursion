/* 
Uzuduotis: reikia rasti VISU pagrindinimae masyve esanciu skaiciu suma 
*/

const a = [1, 2, 3, 4, 10, 6, 7, 8, 10];


function sum (list){
    let total = 0;
    //su .reduce() ->
    //total = list.reduce((t, n) => t+n, 0) 

    // list.forEach(n => {
    //     total += n;
    // });

    // for (const n of list){
    //     total += n;
    // }

    return total;
}

const r1 = sum (a);
console.log ('AREA', r1,'->', 51)



//Uzduotis: reikia rasti VISU pagrindinimae masyve esanciu  NORMALIU skaiciu suma :

const b = [1, 2, true,  3, 4, ' ', NaN, 10, 6, 7, 8, -Infinity, 10];


function sum (list){
    let total = 0;
   
    for (const n of list){
        if (typeof n !== 'number'
        || !isFinite(n)) { //jei ne skaicius ir ne baigtinis skaitmuo -> continue
            continue;
        }
    
        total += n;
    }

    return total;
}


const r2 = sum (b);
console.log ('AREA', r2, '->', 51)

//masyvai masyve + kiti tipai -> reikia sumos

const c = [
        1, true,  3, {name: 'Petras'},
        ' ', NaN, ['labas', 'rytas'], 6,
        8, [2, 10], [4, 7], -Infinity, 10
    ];

function isGoodNumber (n) {
    return typeof n === 'number' && isFinite (n) //skaicius typeof number IR baigtinis skaicius
}

function sum (list){
    let total = 0;
   
    for (const n of list){
        if (Array.isArray (n)){

            for (const m of n){
                if (!isGoodNumber(m)) { 
                    continue;
                }
                total += m;
            }
        }

        if (!isGoodNumber(n)) { //jei ne skaicius ir ne baigtinis skaitmuo -> continue
            continue;
        }
    
        total += n;
    }

    return total;
}

const r3 = sum (c);
console.log ('AREA', r3,'->', 51)

//D variantas -> masyvas masyve x n <- israsyneti masyvo skaiciavima rankiniu budu

const d = [
    1, 2, 3, 
    [4], [5], [6],
    [7, 8], [9, 10],

    [
        1, 2, 3,
        [4], [5], [6],
        [7, 8], [9, 10],
        [
            1, 2, 3,
            [4], [5], [6],
            [7, 8], [9, 10],
            [
                1, 2, 3,
                [4], [5], [6],
                [7, 8], [9, 10],
                [
                    1, 2, 3,
                    [4], [5], [6],
                    [7, 8], [9, 10],
                ],
            ],
        ],
    ],
];


function sum (list){
let total = 0;

for (const n1 of list){
    if (Array.isArray (n1)){
        for (const n2 of n1){
            if (Array.isArray (n2)){
                for (const n3 of n2){
                    if (Array.isArray (n3)){
                        for (const n4 of n3){
                            if (Array.isArray (n4)){
                                for (const n5 of n4){
                                    if (Array.isArray (n5)){
                                        for (const n6 of n5){
                                            if (!isGoodNumber(n6)) { 
                                                continue;
                                        }
                                          total += n6;
                                    }}
                                    if (!isGoodNumber(n5)){ 
                                        continue;
                                  }
                        total += n5;
                        }}
                    if (!isGoodNumber(n4)){ 
                        continue;
                    }
                    total += n4;
                }}
            if (!isGoodNumber(n3)){ 
                continue;
            }
            total += n3;
        }}
    if (!isGoodNumber(n2)){ 
        continue;
    }
    total += n2;
}}
        

    if (!isGoodNumber(n1)) { //jei ne skaicius ir ne baigtinis skaitmuo -> continue
        continue;
    }

    total += n1;
}

return total;
}

const r4 = sum (d);
console.log ('AREA', r4,'->', 275)

//REKURSIJOS VARIANTAS

const e = [
    1, 2, 3, 
    [4], [5], [6],
    [7, 8], [9, 10],

    [
        1, 2, 3,
        [4], [5], [6],
        [7, 8], [9, 10],
        [
            1, 2, 3,
            [4], [5], [6],
            [7, 8], [9, 10],
            [
                1, 2, 3,
                [4], [5], [6],
                [7, 8], [9, 10],
                [
                    1, 2, 3,
                    [4], [5], [6],
                    [7, 8], [9, 10],
                ],
            ],
        ],
    ],
];



function sum(list) {
    let total = 0;

    for (const n of list) {
        if (Array.isArray(n)) {
            total += sum(n);
        }
        if (!isGoodNumber(n)) {
            continue;
        }
        total += n;
    
    }
  return total
}


const r5 = sum (e);
console.log ('AREA', r5,'->', 275)