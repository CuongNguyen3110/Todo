const { apiFetchPost } = require('./api');
const { apiAddNewPost } = require('./api');

function* foo() {

    let x = yield apiFetchPost({ userId: 1 });
    console.log(x);
    
    let y = yield 'Please give me a number';
    let z = yield 'Please give me a number';

    return x + y + z;
}

let generatingFoo = foo();

x = generatingFoo.next().value;

y = generatingFoo.next(8).value;

console.log(x, y);