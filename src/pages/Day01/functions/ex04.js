export default (text) => {

    const words = text.split(' ');
    let allArgs = '';
    for (let wordIndex in words) {
        allArgs += `${words[wordIndex]}\n`;
    }
    return allArgs
}