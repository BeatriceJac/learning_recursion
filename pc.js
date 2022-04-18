/*
FAKTAI:
- Viskas (pavadimas, tipo informacija, turinys, t.t.) kas yra kietajame diske uzima vietos.
- tipas:
    - nepriklausomai ar tai failas, ar folder'is - uzima 6 bitus
- pavadinimas:
    - jei jo ilgis yra iki arba lygus 8 simboliams yra laikoma, jog uzima visus 8 bitus (1 baitas)
    - jei ilgis yra daugiau uz 8 bitus (1 baitas), tai galioja praejusi salyga, tik ties 8 kartotiniu (8, 16, 24...)
- turinys:
    - jei tai failas - tai uzima tiek vietos, kiek pilnu baitu reikia jo turiniui issaugoti

Kiek vietos uzima C diske esanti informacija?
Kiek laisvos vietos liks, jei C diskas yra 1Kb dydzio?
*/

const C = [
    {
        type: 'folder',
        name: 'Program Files',
        content: [
            {
                type: 'folder',
                name: '7-Zip',
                content: [
                    {
                        type: 'folder',
                        name: 'Lang',
                        content: [
                            {
                                type: 'file',
                                name: 'af.txt',
                                content: 'af.txt',
                            },
                            {
                                type: 'file',
                                name: 'an.txt',
                                content: 'an.txt',
                            },
                            {
                                type: 'file',
                                name: 'lt.txt',
                                content: 'lt.txt',
                            },
                        ],
                    },
                    {
                        type: 'file',
                        name: '7z.dll',
                        content: 'riegrnjkmcoefiersrnjfkdlokreijnjsmkkoresrgnjkmoesnjirg',
                    },
                    {
                        type: 'file',
                        name: '7z.sfx',
                        content: 'rtesijfdkdlerosijgfkertsgf',
                    },
                ],
            },
            {
                type: 'folder',
                name: 'Git',
                content: [
                    {
                        type: 'folder',
                        name: 'bin',
                        content: [
                            {
                                type: 'folder',
                                name: 'bin',
                                content: [
                                    {
                                        type: 'file',
                                        name: 'bash.exe',
                                        content: '01010101011111100000111101010',
                                    },
                                    {
                                        type: 'file',
                                        name: 'git.exe',
                                        content: '0101011111100000111101010',
                                    },
                                    {
                                        type: 'file',
                                        name: 'sh.exe',
                                        content: '0101011111100000111101',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'file',
                        name: 'git-bash.exe',
                        content: '010101010101010101011111100000111101010',
                    },
                ],
            },
            {
                type: 'folder',
                name: 'Internet Explorer',
                content: [
                    {
                        type: 'file',
                        name: 'ieinstal.exe',
                        content: '????????????????????????',
                    },
                ],
            },
        ],
    },
    {
        type: 'folder',
        name: 'Program Files (x86)',
        content: [
            {
                type: 'folder',
                name: '7-Zip',
                content: [
                    {
                        type: 'folder',
                        name: 'Lang',
                        content: [
                            {
                                type: 'file',
                                name: 'af.txt',
                                content: 'af.txt',
                            },
                            {
                                type: 'file',
                                name: 'an.txt',
                                content: 'an.txt',
                            },
                            {
                                type: 'file',
                                name: 'lt.txt',
                                content: 'lt.txt',
                            },
                        ],
                    },
                    {
                        type: 'file',
                        name: '7z.dll',
                        content: 'riegrnjkmcoefiersrnjfkdlokreijnjsmkkoresrgnjkmoesnjirg',
                    },
                    {
                        type: 'file',
                        name: '7z.sfx',
                        content: 'rtesijfdkdlerosijgfkertsgf',
                    },
                ],
            },
            {
                type: 'folder',
                name: 'Git',
                content: [
                    {
                        type: 'folder',
                        name: 'bin',
                        content: [
                            {
                                type: 'folder',
                                name: 'bin',
                                content: [
                                    {
                                        type: 'file',
                                        name: 'bash.exe',
                                        content: '01010101011111100000111101010',
                                    },
                                    {
                                        type: 'file',
                                        name: 'git.exe',
                                        content: '0101011111100000111101010',
                                    },
                                    {
                                        type: 'file',
                                        name: 'sh.exe',
                                        content: '0101011111100000111101',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'file',
                        name: 'git-bash.exe',
                        content: '010101010101010101011111100000111101010',
                    },
                ],
            },
            {
                type: 'folder',
                name: 'Internet Explorer',
                content: [
                    {
                        type: 'file',
                        name: 'ieinstal.exe',
                        content: '????????????????????????',
                    },
                ],
            },
        ],
    },
    {
        type: 'folder',
        name: 'Windows',
        content: [
            {
                type: 'folder',
                name: '7-Zip',
                content: [
                    {
                        type: 'folder',
                        name: 'Lang',
                        content: [
                            {
                                type: 'file',
                                name: 'af.txt',
                                content: 'af.txt',
                            },
                            {
                                type: 'file',
                                name: 'an.txt',
                                content: 'an.txt',
                            },
                            {
                                type: 'file',
                                name: 'lt.txt',
                                content: 'lt.txt',
                            },
                        ],
                    },
                    {
                        type: 'file',
                        name: '7z.dll',
                        content: 'riegrnjkmcoefiersrnjfkdlokreijnjsmkkoresrgnjkmoesnjirg',
                    },
                    {
                        type: 'file',
                        name: '7z.sfx',
                        content: 'rtesijfdkdlerosijgfkertsgf',
                    },
                ],
            },
            {
                type: 'folder',
                name: 'Git',
                content: [
                    {
                        type: 'folder',
                        name: 'bin',
                        content: [
                            {
                                type: 'folder',
                                name: 'bin',
                                content: [
                                    {
                                        type: 'file',
                                        name: 'bash.exe',
                                        content: '01010101011111100000111101010',
                                    },
                                    {
                                        type: 'file',
                                        name: 'git.exe',
                                        content: '0101011111100000111101010',
                                    },
                                    {
                                        type: 'file',
                                        name: 'sh.exe',
                                        content: '0101011111100000111101',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'file',
                        name: 'git-bash.exe',
                        content: '010101010101010101011111100000111101010',
                    },
                ],
            },
            {
                type: 'folder',
                name: 'Internet Explorer',
                content: [
                    {
                        type: 'file',
                        name: 'ieinstal.exe',
                        content: '????????????????????????',
                    },
                ],
            },
        ],
    },
    {
        type: 'folder',
        name: 'xampp',
        content: [
            {
                type: 'folder',
                name: '7-Zip',
                content: [
                    {
                        type: 'folder',
                        name: 'Lang',
                        content: [
                            {
                                type: 'file',
                                name: 'af.txt',
                                content: 'af.txt',
                            },
                            {
                                type: 'file',
                                name: 'an.txt',
                                content: 'an.txt',
                            },
                            {
                                type: 'file',
                                name: 'lt.txt',
                                content: 'lt.txt',
                            },
                        ],
                    },
                    {
                        type: 'file',
                        name: '7z.dll',
                        content: 'riegrnjkmcoefiersrnjfkdlokreijnjsmkkoresrgnjkmoesnjirg',
                    },
                    {
                        type: 'file',
                        name: '7z.sfx',
                        content: 'rtesijfdkdlerosijgfkertsgf',
                    },
                ],
            },
            {
                type: 'folder',
                name: 'Git',
                content: [
                    {
                        type: 'folder',
                        name: 'bin',
                        content: [
                            {
                                type: 'folder',
                                name: 'bin',
                                content: [
                                    {
                                        type: 'file',
                                        name: 'bash.exe',
                                        content: '01010101011111100000111101010',
                                    },
                                    {
                                        type: 'file',
                                        name: 'git.exe',
                                        content: '0101011111100000111101010',
                                    },
                                    {
                                        type: 'file',
                                        name: 'sh.exe',
                                        content: '0101011111100000111101',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'file',
                        name: 'git-bash.exe',
                        content: '010101010101010101011111100000111101010',
                    },
                ],
            },
            {
                type: 'folder',
                name: 'Internet Explorer',
                content: [
                    {
                        type: 'file',
                        name: 'ieinstal.exe',
                        content: '????????????????????????',
                    },
                ],
            },
        ],
    },
    {
        type: 'file',
        name: 'devlist',
        content: 'This is devlist file',
    },
    {
        type: 'file',
        name: 'test',
        content: 'Empty file',
    },
];