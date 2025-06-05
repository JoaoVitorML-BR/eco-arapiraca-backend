import connectionDB from '../database';
import { app } from '../index'

export function startServer() {
    const PORT = process.env.PORT_SERVER || 3000;

    // Start conection to the database
    connectionDB();
    
    app.listen(PORT, () => {
        console.log(`Server is running on port: http://localhost:${PORT}`);
    });
}