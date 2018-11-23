import strClean from "./strClean";

export default (text) => {
    if (text === '-h')
        return' ----------- Help Guide -------------------------------------------------------------------\n'+
            '|    Execute: ./firstCleanArg                                                                                      |\n'+
            '|    Expected Result: remove all spaces in argument starting with " ending with "! |\n'+
            ' --------------------------------------------------------------------------------------------';
    const regex = /^"[a-z ]+"/g;
    const string = text.match(regex);
    return strClean(string[0])
}