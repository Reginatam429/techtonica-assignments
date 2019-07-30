function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    let consonants = [];
    for (let i = 0; i < s.length; i++) {
        let flag = false;
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] === vowels[j]) {
                console.log(s[i]);
                flag = true;
            }
        }
        if (!flag) {
            consonants.push(s[i]);

        }
    }
    for (let k = 0; k < consonants.length; k++) {
        console.log(consonants[k]);
    }
}
//vowelsAndConsonants("javascriptloops");

//alternate way of doing it:

function vowelsAndConsonants(word){
let vowels = ["a","e","i","o","u"];
let wordVowels = [];
let wordConsonants =[];

for(let i=0;i<s.length;i++){
        if (vowels.includes(word[i])){
           wordVowels.push(word[i]); 
        } else {
            wordConsonants.push(word[i]);
        }

    }
for (let j=0; j<wordVowels.length; j++){
    console.log(wordVowels[j]);
}
for (let k=0; k<wordConsonants.length; k++){
    console.log(wordConsonants[k]);
}

vowelsAndConsonants("javascript");