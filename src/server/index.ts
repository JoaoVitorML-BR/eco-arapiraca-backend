import { app } from '../index'

export function startServer() {
    const PORT = process.env.PORT_SERVER || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port: http://localhost:${PORT}`);
    });
}