import express  from 'express'
import {USER_BBDD} from './DataBase/USERS_BBDD'

const accountRouter = express.Router();

accountRouter.use((req, res, next)=> {
    console.log(req.ip);
    next()
})

accountRouter.post('', (req, res) => {
    const { name, guid }  = req.body

    if (!name || !guid)  return res.status(400).send();
     
        const user = USER_BBDD.find( name => name.guid === guid)
        
        if(name) return res.status(409).send()
        
        USER_BBDD.push({
            name, guid
    })

    return res.send()
})
