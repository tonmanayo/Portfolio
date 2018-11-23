export default (text) => {
    if (text === '-h') {
        return ' ----------- Help Guide -------------------------------- \n'+
            '|    Execute: ./split                                                    |\n'+
            '|    Args: required string                                           |\n'+
            '|    Expected: sorted split array.                               |\n'+
            ' --------------------------------------------------------- ';
    }
    const words = text.split(' ').sort();
    let allArgs = '';
    for (let wordIndex in words) {
        allArgs += `[${wordIndex}] => ${words[wordIndex]}\n`;
    }
    return allArgs
}