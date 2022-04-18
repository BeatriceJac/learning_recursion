const tree = [
    {
        name: 'Petras',
        age: 40,
        children: [
            {
                name: 'Jonas',
                age: 42,
                children: [
                    {
                        name: 'Petriukas',
                        age: 88,
                        children: [
                            {
                                name: 'Saule',
                                age: 100,
                            },
                            {
                                name: 'Sauliukas',
                                age: 101,
                            },
                            {
                                name: 'Menulis',
                                age: 102,
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Ona',
                age: 38,
            },
            {
                name: 'Elze',
                age: 107,
            },
        ]
    },
    {
        name: 'Maryte',
        age: 50,
        children: [
            {
                name: 'Aloyzas',
                age: 45,
                children: [
                    {
                        name: 'Stasys',
                        age: 47,
                        children: [
                            {
                                name: 'Irena',
                                age: 70,
                                children: [
                                    {
                                        name: 'Alfas',
                                        age: 99,
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Kazys',
                        age: 77
                    },
                ]
            },
        ]
    },
];

function isGoodNumber(n) {
    return typeof n === 'number' && isFinite(n)
}

function oldest(list) {

 let old = 0;
 for (const person of list){
     if (Array.isArray(person.children)){
         const oldPerson = oldest(person.children);
         if (oldPerson > old){
             old = oldPerson;
         }
     }

     if (person.age > old){
         old = person.age
     }
 }
 return (old);
}

//---------------------------
function mostChildren(list) {

    let personWithMostKids = null;
    for (const person of list){
       if (Array.isArray(person)){
            const maxPerson = mostChildren(person)
            if (!personWithMostKids || 
                personWithMostKids.children.length < maxPerson.children.length){
                personWithMostKids = maxPerson
            }
       }
    if (!personWithMostKids ||
        person.children.length > personWithMostKids.children.length){
        personWithMostKids = person;
    }
}
    return personWithMostKids;
}
    

const o = oldest(tree);
const m = mostChildren(tree);

console.log('Petriukas turejo 3 vaikus.');
console.log(`${m.name} turejo ${m.children.length} vaikus`)

console.log('Elze nugyveno 107 metus.');
console.log(o);
