let a = [1, 2, 3 ,4 ,5];
let b = [1, 3, 5, 7, 9];

const findDiff = (a, b) => {
    let child =  a.filter((elem) => {
        return b.includes(elem);
    });
    let res = a.filter((elem) => {
        if(!child.includes(elem)) {
            return elem
        }
    });
    res.push(...b.filter((elem) => {
        if(!child.includes(elem)) {
            return elem
        }
    }));
    return res;
}

console.log(findDiff(a, b));