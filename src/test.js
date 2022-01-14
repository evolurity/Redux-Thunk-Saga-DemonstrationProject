function* generatorFunc() {
    for (let i = 0; i < 5; i++) {
        yield i
    }
}

const iter = generatorFunc()

console.log(iter.next())