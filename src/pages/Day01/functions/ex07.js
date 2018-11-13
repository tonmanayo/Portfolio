export default (text) => {

    const sentanceSplit = text.split(' ');
    const lastWord = sentanceSplit.pop();
    let revSentance = lastWord;
    for (let word in sentanceSplit) {
        revSentance += ' ' + sentanceSplit[word]
    }
    return revSentance
}