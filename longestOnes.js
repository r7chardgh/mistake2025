function findLongest(bitstring) {
    const sarr = bitstring.split('0');
    let res = '1';
    sarr.map((item, i, arr) => {
        if (i + 1 < arr.length && item + arr[i + 1] + '1' > res) {
            res = item + arr[i + 1] + '1'
        }
    })
    return res.length;
}