import ex05 from "./strClean";

export default (text) => {
    const regex = /^"[a-z ]+"/g;
    const string = text.match(regex);
    return ex05(string[0])
}