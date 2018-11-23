export default (args) => {
    if (args === '-h')
        return' ----------- Help Guide ----------- \n'+
            '|    Execute: ./xxx                                                      |\n'+
            '|    Expected Result: 10 rows of 100 X\'es total 1000 |\n'+
            ' ---------------------------------- ';
    let mlx = '';
    for (let row = 0; row < 10; row++) {
        mlx += 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n'
    }
    return mlx
}