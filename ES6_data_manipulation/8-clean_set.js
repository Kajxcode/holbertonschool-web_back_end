export default function cleanSet(set, startString = '') {
    const results = [];

    for (const value of set) {
        if (value.startsWith(startString)) {
            results.push(value.slice(startString.length));
        }
    }
    return results.join('-');
}