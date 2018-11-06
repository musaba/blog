export class RegisterUser{
    firstname: {
        type: String
    }
    lastname: {
        type: String,
    }
    nickname: {
        type: String,
    }
    password: {
        type: String,
        required: [true, 'password error']
    }
    email: {
        type: String,
    }
    
}