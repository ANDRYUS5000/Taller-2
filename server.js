import express from 'express';
import router from './Routes/routes.js';
import { sequelize } from './database/database.js';
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.set('port',3000);

const test=async()=>{
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test()

app.listen(app.get('port'), () => {
    console.log(`Servidor Escuchando por puerto ${app.get('port')}`);
});