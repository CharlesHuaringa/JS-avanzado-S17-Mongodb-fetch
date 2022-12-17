function getUsers(){
    fetch("http://localhost:9000/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function getUsers(id){
    fetch(`http://localhost:9000/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getUsers();
getUsers("639c017a99bc263d6d385579");