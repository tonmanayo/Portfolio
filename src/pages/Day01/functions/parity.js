export default (setState, text) => {
    if (text === '-h') {
        return ' ----------- Help Guide -------------------------------- \n'+
            '|    Execute: ./parity                                                  |\n'+
            '|    Args: exit, integer                                                |\n'+
            '|    Expected exit - leave loop, integer - odd | even |\n'+
            ' --------------------------------------------------------- ';
    }
    const stepLines = text.split('Enter a number: ');
    if (stepLines.length > 1) {
        const number = stepLines[stepLines.length - 1];

        if (number === 'exit') {
            setState('\nTonys-MBP:~ tonymack$ ', 'notActive');
            return
        }

        if (isNaN(number)) {
            setState('\n\'' +number+ '\' is not a number\nEnter a number: ');
            return
        }

        if (number.length > 0) {
            setState(number % 2 === 0 ? '\nThe number '+number+' is Even\nEnter a number: ' : '\nThe number ' +number+ ' is Odd\nEnter a number: ')
        }
    } else {
        setState('\nEnter a number: ')
    }
}