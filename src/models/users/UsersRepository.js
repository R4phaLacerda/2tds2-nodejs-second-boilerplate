import user from './User.js'

class UserRepository  {
    constructor(){
        this.Users = []
    }
    
    getAllUsers() {
        return this.Users;
    }
}

export default UsersRepository;