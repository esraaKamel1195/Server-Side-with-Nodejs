import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
    deleteContact 
} from '../controllers/crmController';

import {
    LoginRequired,
    Register,
    Login
} from '../controllers/userController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, LoginRequired, getContacts )
    
    // POST endpoint
    .post( LoginRequired, addNewContact );

    app.route('/contact/:contactId')
    // get specific contact
    .get( LoginRequired, getContactWithID )
    
    // put request
    .put( LoginRequired, updateContact )

    // delete request
    .delete( LoginRequired, deleteContact );

    // register request
    app.route('/auth/register')
    .post( Register );

    // login Request
    app.route('login')
    .post( Login );
}

export default routes;
