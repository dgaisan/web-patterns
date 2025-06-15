import express from 'express';

import userRouter from './routes/users';
import authRouter from './routes/auth';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from './utils/auth';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

function authMiddleware(req: any, res: any, next: any) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No Token.' });

  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    req.user = { id: payload.userId };
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid Token' });
  }
}

app.use("/api/auth", authRouter)
app.use('/api/users', authMiddleware, userRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});