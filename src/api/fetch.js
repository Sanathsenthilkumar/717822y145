export const getDetails = async() => {
    const response = await fetch('http://20.244.56.144/test/users', {
        method : "GET"
        })
    return await response.json();
}