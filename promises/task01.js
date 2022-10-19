async function getResponse() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
    );
    const data = await response.json();
    return data;
}

async function render() {
    const users = await getResponse();
    document.getElementById('root').innerHTML += users.map(item => (`
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.address.street}</td>
            <td>${item.phone}</td>
            <td>${item.website}</td>
            <td>${item.company.name}</td>
        </tr>
        `)).join(' ');
};

render();

async function userById() {
    const userId = document.getElementById("user").valueAsNumber;
    console.log(userId);
    const users = await getResponse();
    const user = users.find(value => value.id === userId);
    document.getElementById('person').innerHTML = `
    <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>${user.company.name}</td>
    </tr>
    `;
}
