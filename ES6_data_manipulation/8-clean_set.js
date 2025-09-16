export default function cleanSet(set, startString) {
    const results = [];

    for (const value of mySet) {
        if (value.startsWith(startString)) {
            results.push(value.slice(startString.length));
        }
    }
    return results.join('-');
}