var promise = () => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/ricardomarino');
        xhr.send(null);

        xhr.onreadystatechange = () =>{
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

promise()
    .then((response) => console.log(response))
    .catch((error) => console.error(error))