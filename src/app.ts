import express from 'express';
import { setupSwagger } from './swagger';
import routes from './routes';

const app = express();

setupSwagger(app);
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
