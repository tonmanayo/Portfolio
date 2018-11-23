export default (text) => {
    if (text === '-h') {
        return ' ----------- Help Guide -------------------------------- \n'+
            '|    Execute: ./strClean                                              |\n'+
            '|    Args: string                                                           |\n'+
            '|    Expected remove all additional spaces               |\n'+
            ' --------------------------------------------------------- ';
    }
    const words = text.replace(/["]+/g, '');
    return words
}