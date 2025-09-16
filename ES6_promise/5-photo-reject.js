export default async function uploadPhoto(filename) {
    try {
        console.log(filename);
    } catch {
        throw Error(`${filename} cannot be processed`)
    }
}