// import  from 'userService';
app.post('/user-login', (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    res.send()
})

app.post('/user-registrate', (req, res, next) => {
    res.send('API is working')
})