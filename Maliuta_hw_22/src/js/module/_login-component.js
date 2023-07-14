 export function login(inputEmailLogin, inputPass, succsesAuthorization, messageFinal){

    const infoToLogin = {
        email: inputEmailLogin.value,
        password: inputPass.value,
    };
    fetch('https://reqres.in/api/login', {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(infoToLogin)
    })
    .then((response)=>{
        const responsLog = response.status;
        checkLogInfo(responsLog, succsesAuthorization,
            messageFinal, inputEmailLogin, inputPass);
        return response.json()
    })
    .then((response)=>{
        const responsToken = response.token;
        localStorage.setItem('token', responsToken);
    })
    .catch(error => console.log(error))
};


function checkLogInfo(responInfo, succsesAuthorization,
     messageFinal, inputEmailLogin, inputPass) {
    if (responInfo === 200) {
        succsesAuthorization();
    } else{
        messageFinal.classList.add('message-fail');
        messageFinal.textContent = `Error: User not found! Check Email or password`
        inputEmailLogin.value  = '';
        inputPass.value = '';
    }
};