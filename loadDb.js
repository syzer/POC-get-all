import {execa} from 'execa';

const url = `http://localhost:56345/posts`


const count = await execa('curl', ['-s', url]).then(e => JSON.parse(e.stdout).length);
console.log(count)
const results = await execa('curl', ['-s', url, '-H', 'Content-Type: application/json', '-d', JSON.stringify({ title: 'JSON-server' + count, author: 'endress'})]);
console.log(JSON.parse(results.stdout))
