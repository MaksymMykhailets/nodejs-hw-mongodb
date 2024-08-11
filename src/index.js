import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const myApp = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error('Failed to start application:', error);
  }
};

myApp();
