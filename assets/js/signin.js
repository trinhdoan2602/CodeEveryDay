// renderData()
const usersJson = [
    {
        username: 'trinhdoan2602',
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
        const user = {
            username: usernameInput.value,
            password: passwordInput.value
        }
        
        const arrayUsersJson = JSON.parse(window.localStorage.getItem('usersLocalStrorage'));
        const isUser = arrayUsersJson.some(arrayUserJson => {
            return (arrayUserJson.username == user.username && arrayUserJson.password == user.password) ? true : false

        })
        if (isUser) {
            window.location.href = "index.html"
        } else {
            document.querySelector('.login-alert').style.display = 'block'
            document.querySelector('.login-alert').innerText = 'Thông tin đăng nhập không hợp lệ!'
        }
    }
}
handleLogin()