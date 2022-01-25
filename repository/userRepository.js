const fs = require("fs");
class UserRepository{
    constructor(){
        this.onloadeddata();
    }
    loadData(){
        try {
            console.log("__dirname", __dirname);
            console.log("current working directory", process.cwd());
            let users = fs.readFileSync(process.cwd() + '/data/users.json');
            this.users = JSON.parse(usersJson);
        }
        catch(ex){
            console.log(ex);
        }
    }

    getById() {
        let user = null;

        try{
            if(this.users){
                this.users.foreach(u =>{
                    if(u.id == id){
                        user = u;
                    }
                });
            }
        }
        catch(ex){
            
        }
    }
}