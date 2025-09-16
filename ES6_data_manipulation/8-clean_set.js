export default function cleanSet(set, startString) {
    if (!startString) return '';
    
    const results = [];

    for (const value of set) {
        if (value.startsWith(startString)) {
            results.push(value.slice(startString.length));
        }
    }
    return results.join('-');
}