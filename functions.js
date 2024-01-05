const axios = require('axios')

const functions = {
    add: ((num1, num2) => num1 + num2),
    reverseString: str => str.split('').reverse().join(''),
    isNull: () => null,
    checkUser: (() => ({ name: 'Mohamed', age: 35 })),
    getPosts: (id = undefined) => axios.get(`https://my-json-server.typicode.com/typicode/demo/posts${id ? '/' + id : ''}`).then(res => res.data).catch(err => 'error')
}

module.exports = functions