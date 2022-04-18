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
                            {
                                name: 'Saturnas',
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

function oldest(list, level = 0) {
    let oldestPerson = {
        name: '',
        age: 0,
    }

    for (const { name, age, children } of list) {
        if (oldestPerson.age < age) {
            oldestPerson = { name, age };
        }
        if (children) {
            const child = oldest(children, level + 1);
            if (oldestPerson.age < child.age) {
                oldestPerson = child;
            }
        }
    }

    if (level) {
        return oldestPerson;
    } else {
        return `${oldestPerson.name} nugyveno ${oldestPerson.age} metus.`;
    }
}

function mostChildren(list, original = true) {
    let bigFamily = {
        name: '',
        kids: 0,
    }

    for (const person of list) {
        if (person.children) {
            const childFamily = mostChildren(person.children, false);
            if (bigFamily.kids < childFamily.kids) {
                bigFamily = childFamily;
            }
            if (bigFamily.kids < person.children.length) {
                bigFamily = {
                    name: person.name,
                    kids: person.children.length,
                }
            }
        }
    }

    if (original) {
        return `${bigFamily.name} turejo ${bigFamily.kids} vaikus.`
    }
    return bigFamily;
}

const o = oldest(tree);
const m = mostChildren(tree);

console.log('Elze nugyveno 107 metus.');
console.log(o);

console.log('Petriukas turejo 4 vaikus.');
console.log(m);