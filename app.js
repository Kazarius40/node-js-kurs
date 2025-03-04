const path = require('node:path');
const afs = require('node:fs/promises');
const fs = require('node:fs');
const readline = require('node:readline/promises');

const start = async () => {
    const filePath = path.join('email', 'general', 'emails.txt');
    const typeOfMail = [];
    await afs.mkdir(path.join('email', 'separated'), {recursive: true});

    const fileStream = fs.createReadStream(filePath, 'utf-8');
    const rl = readline.createInterface({input: fileStream});
    try {
        for await (const line of rl) {
            const email = line.split(/\s+/)[1];
            const domain = email.split('@')[1];
            const pathDomain = path.join('email', 'separated', `${domain}.txt`);

            if (!typeOfMail.includes(domain)) {
                typeOfMail.push(domain);
                await afs.writeFile(pathDomain, `${email}\n`)
            } else {
                await afs.appendFile(pathDomain, `${email}\n`);
            }

        }

    } finally {
        await rl.close();
    }
}

start();