const test = async function(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const result = await response.json()
    console.log(result)
    return result
}

console.log(test("hello"))