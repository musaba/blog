export class LoginUser{
    password: {
        type: String,
        required: [true, 'password error']
    }
    email: {
        type: String,
    }
}