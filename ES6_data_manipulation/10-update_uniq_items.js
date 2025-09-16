export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) throw Error('Cannot Process')

    for (const [item,quantity] of map) {
        if (quantity === 1) {
            map.set(item, quantity + 99);
        } else {
            map.set(item, quantity);
        }
    }
    return map;
}