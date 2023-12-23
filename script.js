function checkInput() {
    const userInput = document.getElementById('userInput').value;

    const result = checkAlphabetConditions(userInput);

    document.getElementById('output').innerText = result;
    
}

function checkAlphabetConditions(input) {
    let alphabetCount = 0;
    let alphabetSum = 0;
    let digitsum = 0;

    for(let i=0; i<input.length; i++){
        if(/[a-zA-Z]/.test(input[i])){
            const alphabetValue = input.toLowerCase().charCodeAt(i)-96;

            alphabetCount++;
            alphabetSum+=alphabetValue;
        }
        else if(/\d/.test(input[i])){
            digitsum += parseInt(input[i], 10);
        }
    }

    if (alphabetCount === 7){
        return "Thala For A Reason";
    }
    else if (alphabetSum === 7) {
        return "Thala For A Reason";
    }
    else if (digitsum === 7) {
        return "Thala For A Reason";
    }
    else{
        const alphabetDigitSum = getDigitSum(alphabetSum);
        if (alphabetDigitSum === 7) {
            return "Thala For A Reason";
        } else {
            const digitsumDigitSum = getDigitSum(getDigitSum(digitsum));
            if (digitsumDigitSum === 7) {
                return "Thala For A Reason";
            } else {
                return "You Are Not A Real Thala Fan";
            }
        }
    }
}

function getDigitSum(number) {
    return String(number).split('').map(Number).reduce((a,b) => a+b, 0);
}
