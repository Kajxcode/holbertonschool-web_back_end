export default async function signUpUser(firstName, lastName) {
    const fullname = {
        firstName,
        lastName,
    }
    return fullname;
}