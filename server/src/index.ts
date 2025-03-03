import express from 'express';

class Server {
    public app: express.Application;
    constructor() {
      this.app = express();
      this.config();
      this.routes();
    }
  
    config(): void {
      this.app.set('port', process.env.PORT || 3000);
    }
  
    routes(): void {}
  
    start(): void {
      this.app.listen(this.app.get('port'), () => {
        console.log('Server on port', this.app.get('port'));
      });
    }
  }
  
  const server = new Server();
  server.start();
  