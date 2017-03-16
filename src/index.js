/* eslint-disable import/imports-first */
import './config/preStartServer';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { version } from '../package.json';
import './config/mongoose';
import * as errorHandlers from './util/errorHandlers';
import passport from './config/passport';
import * as jwt from './config/jwt';

import leads from './v1/services/leads';
import auth from './v1/services/auth';
import users from './v1/services/users';
import brokers from './v1/services/brokers';
/* eslint-enable import/imports-first */

const app = express();
const UNLESS_ENDPOINTS = {
  path: [
    { url: /\/auth\/*/i },
    { url: /\/users\/login/ },
    { url: /\/health/ },
    { url: /\/leads/, methods: ['POST'] },
  ]
};
const dateOfBirth = new Date();

// express set up
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/health', (req, res) => res.status(200).json({ version, dateOfBirth }));

app.use('/auth', auth);
app.use(jwt.decodeJWT.unless(UNLESS_ENDPOINTS));
app.use(jwt.hydrateUser.unless(UNLESS_ENDPOINTS));

// services
app.use('/leads', leads);
app.use('/users', users);
app.use('/brokers', brokers);

// error handlers
app.use(errorHandlers.validationError);
app.use(errorHandlers.boomErrors);
app.use(errorHandlers.internalError);

app.listen(process.env.PORT || 8000, () =>
  console.log(`~> Magic happens on port ${process.env.PORT || 8000}`)
);

export default app;
