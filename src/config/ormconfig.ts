import { DataSource} from 'typeorm'
import User from '../Entity/User'
    const dataSource= new DataSource({
    name:"firstconnection",
    type: "mysql", 
    host: "localhost", 
    port: 3306, 
    username: "root", 
    password: "Password@12345", 
    database: "user_accounts",
    synchronize: true,
    logging:true,
    entities:[User]
    })
    // await dataSource.initialize()
        
    
export default dataSource
    

//}