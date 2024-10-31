import user from './User.js'
class UserRepository  {
    constructor(){
        this.Users = [];
    }
    
    getAllUsers() {
        return this.Users;
    }

    addUser(name, email, password){
        const newUser = new User(name, email, password)
        this.Users.push(newUser);
        return newUser
    }
}

export default UsersRepository;