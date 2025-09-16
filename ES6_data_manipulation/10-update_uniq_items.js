export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) throw Error('Cannot Process')

    const updmap = new Map();

    for (const [item,quantity] of map) {
        if (quantity === 1) {
            updmap.set(item, quantity + 99);
        } else {
            updmap.set(item, quantity);
        }
    }
    return updmap;
}