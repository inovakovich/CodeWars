const getRealFloor = n => n > 0 ? n < 13 ? n - 1 : n - 2 : n;

function nextPal(val) {
    return Number(String(val + 1).split('').reverse().join('')) === (val + 1)
        ? (val + 1)
        : nextPal(val + 1)
}