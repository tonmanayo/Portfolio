export default (args) => {
    if (args === '-h')
        return' ----------- Help Guide ----------- \n'+
              '|    Execute: ./hello                        |\n'+
              '|    Expected Result: Hello World! |\n'+
              ' ---------------------------------- ';
    return 'Hello World!'
};