export default (text) => {
    if (text === '-h') {
        return ' ----------- Help Guide -------------------------------- \n'+
            '|    Execute: ./rostring ...args                                                  |\n'+
            '|    Expected rotate last to first                              |\n'+
            ' --------------------------------------------------------- ';
    }
    const sentanceSplit = text.split(' ');
    const lastWord = sentanceSplit.pop();
    let revSentance = lastWord;
    for (let word in sentanceSplit) {
        revSentance += ' ' + sentanceSplit[word]
    }
    return revSentance
}