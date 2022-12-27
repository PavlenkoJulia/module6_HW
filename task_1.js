const arr = [1, 2, 10, 18, 13, 17, 4, null, '123', 'qweqwe'];
const filterNumbers = (array) => {
    const evenElems = [];
    const oddElems = [];

    arr.forEach((elem) => {
      if (elem && !isNaN(elem)){
        if (Number(elem) % 2 === 0) evenElems.push(elem)
        else oddElems.push(elem)
      }
    })
    return {evenElems: evenElems.length, oddElems: oddElems.length}
}

const evenLength = filterNumbers(arr).evenElems
const oddLength = filterNumbers(arr).oddElems

console.log(evenLength, oddLength)