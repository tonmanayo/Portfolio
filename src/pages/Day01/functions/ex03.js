export default (text) => {

    const words = text.split(' ').sort();
    let allArgs = '';
    for (let wordIndex in words) {
        allArgs += `[${wordIndex}] => ${words[wordIndex]}\n`;
    }
    return allArgs
}