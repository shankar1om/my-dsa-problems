/*
**compression string III

https://leetcode.com/problems/string-compression-iii/description/?envType=daily-question&envId=2024-11-04
*/
var compressedString = function (word) {
    let count = 0
    let comp = "";

    for (let i = 0; i < word.length; i++) {
        count++;
        if (i == word.length - 1 || word[i] !== word[i + 1]) {
            while(count > 9) {
                let temp = count;
                count = count - 9;
                comp += `${ temp-count}` + word[i];

            }
            if(count <= 9) {
                comp += `${count + word[i]}`
            }
            count = 0;
        }
    }
    return comp;
};