// Event Enter Login
document.getElementById('password').onkeypress=function(e){
    if(e.keyCode==13){
        document.getElementById('form-submit').click();
    }
}

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

    //Lưu usersJson đến LocalStorage và dùng stingify để chuyển đổi kiểu dữ liệu js qua json
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
            alert("Đăng nhập thành công")
            window.location.href = "index.html"
        } else {
            document.querySelector('.login-alert').style.display = 'block'
            alert("Thông tin tài khoản hoặc mật khẩu không đúng. Vui lòng nhập lại!")
            document.querySelector('.login-alert').innerText = 'Thông tin đăng nhập không hợp lệ!'
        }
    }
}
handleLogin()