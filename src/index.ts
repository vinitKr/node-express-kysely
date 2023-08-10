import Server from './server';

/**
 * Get port from environment and store in Express.
*/
const port = parseInt(process.env.PORT || '3000');

const starter = Server.start(port)
    .then(port => console.log(`Node app running on port ${port}`))
    .catch(error => {
        console.log(error)
    });

export default starter;