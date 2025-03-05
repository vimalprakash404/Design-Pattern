class MongoDB{ 
    connect() { 
        console.log("connect MongoDB")
    }
}


class MySql{
    connect() { 
        console.log("connect MySql")
    }
}



class FireBase{ 
    connect() { 
        console.log("connect FireBase")
    }
}


module.exports = {MongoDB, MySql, FireBase}