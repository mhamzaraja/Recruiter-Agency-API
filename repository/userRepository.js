const fs = require('fs');
class UserRepository{
    constructor(){
        // this.users = [];
        this.loadData();
    }

    loadData(){
        try {
            // console.log("__dirname", __dirname);
            // console.log("current working directory", process.cwd());
            let usersJson = fs.readFileSync(process.cwd() + '/data/users.json');
            this.users = JSON.parse(usersJson);
        }
        catch(ex){
            console.log(ex);
        }
    }

    getUserById(id) {
        let user = null;
        try{
            if(this.users){
                this.users.forEach(u =>{
                    if(u.id == id){
                        user = u;
                    }
                });
            }
            else{
                console.log("user object is empty!");
            }
        }
        catch(ex){
            console.log("users-getById", ex);
        }
        return user;
    }

    getAllUsers(){
        return this.users;
    }

    getUserByEmail(email){
        let user = null;
        this.users.forEach(u => {
            if (u.email == email){
                user = u;
            }
        })
        return user;
        console.log("----------");
    }
    
    saveUser(user){
        //recieve user
        this.users.push(user);
        //json stringify
        console.log("this users", this.users);
        console.log("stringified", JSON.stringify(this.users));
        // write users to users.json
        //reload data after update
        this.loadData();
    }

}
module.exports = UserRepository;