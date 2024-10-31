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

    getUserById(id) {
        const User = this.Users.find(u => u.id == id);
        return User
    }

    updateUser(id, name email, password){
        const user = this.getUserById(id)


        if(!user){
            return null
        }

        user.name = name;
        user.email = email;
        user.password =password;

        return user
    }

    deleteUser(id) {
        const user = this.getUserById(id);

        if(!user) {
            return null
        }
        
        this.Users = this.Users.filter(u => u.id != id)
        return user
    }
}
   
export default UsersRepository;