// renderData()
const usersJson = [
    {
        username: 'trinhdoan2602',
        password: '123'
    },
    {
        username: 'trinhdoan',
        password: '123'
    }
]
const handleLogin = () => {
    const usernameInput = document.querySelector('#username')
    const passwordInput = document.querySelector('#password')
    const submitLogin = document.querySelector('.form-submit')

    //Save usersJson to LocalStorage
    window.localStorage.setItem('usersLocalStrorage', JSON.stringify(usersJson))
    //compare usersJson and object
    submitLogin.onclick = () => {
        
        const arrayUsersJson = JSON.parse(window.localStorage.getItem('usersLocalStrorage'));
        const isUser = arrayUsersJson.some(arrayUserJson => {
            return (arrayUserJson.username == usernameInput.value && arrayUserJson.password == passwordInput.value) ? true : false

        })
        if (isUser) {
            const userLogin = {
                username: usernameInput.value,
                password: passwordInput.value
            }
            window.localStorage.setItem('currentUser', JSON.stringify(userLogin))
            window.location.href = "index.html"
        } else {
            document.querySelector('.login-alert').style.display = 'block'
            document.querySelector('.login-alert').innerText = 'Thông tin đăng nhập không hợp lệ!'
        }
    }
}
handleLogin()