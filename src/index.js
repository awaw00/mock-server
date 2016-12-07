import Koa from 'koa';
import mockRoutes from './mock';

const app = new Koa();

app.use(mockRoutes.routes());

export default app;
