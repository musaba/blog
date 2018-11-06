export class LoginAuthor{
    password: {
        type: String,
        required: [true, 'password error']
    }
    email: {
        type: String,
    }
}