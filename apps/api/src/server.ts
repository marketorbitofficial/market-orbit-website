import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const portEnv: string | undefined = process.env.PORT;
const port: number = portEnv ? Number(portEnv) : 3000;

app.listen(port, (): void => {
    console.log(`Server is ready! & running on port ${port}`);
});
