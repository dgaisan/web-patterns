import express from 'express';
import cors from 'cors';
import * as fs from 'fs';
import path from 'path';
import YAML from 'js-yaml';
import swaggerUi from 'swagger-ui-express';
import { middleware as OpenApiValidator } from 'express-openapi-validator';
import { v4 as uuidv4 } from 'uuid';
import { users, addUser, getUser } from './data/users';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Load OpenAPI document and set up Swagger UI
const apiSpecPath = path.join(__dirname, '..', 'openapi.yaml');
const openApiDoc = YAML.load(fs.readFileSync(apiSpecPath, 'utf8')) as any;
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDoc));

// Request validation against OpenAPI
app.use(
  OpenApiValidator({
    apiSpec: apiSpecPath,
    validateRequests: true, // validate incoming requests
    validateResponses: false // set true if you also want to validate outgoing responses
  })
);

// Health endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = getUser(id);
  if (!user) return res.status(404).send();
  res.json(user);
});

// Create user
app.post('/users', (req, res) => {
  const { name, email } = req.body as { name: string; email: string };
  const user = { id: uuidv4(), name, email };
  addUser(user);
  res.status(201).json(user);
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
  console.log(`Docs available at http://localhost:${PORT}/docs`);
});
