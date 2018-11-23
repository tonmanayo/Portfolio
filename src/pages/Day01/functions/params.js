export default (text) => {
    if (text === '-h') {
        return ' ----------- Help Guide -------------------------------- \n'+
            '|    Execute: ./param                                                  |\n'+
            '|    Args: string                                                           |\n'+
            '|    Expected displays all params                              |\n'+
            ' --------------------------------------------------------- ';
    }
    const words = text.split(' ');
    let allArgs = '';
    for (let wordIndex in words) {
        allArgs += `${words[wordIndex]}\n`;
    }
    return allArgs
}