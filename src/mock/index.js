import Route from 'koa-router';

const mockRoute = new Route();

mockRoute.get('*', function *(next) {
  this.body = "Hello World!";
});

export default mockRoute;
