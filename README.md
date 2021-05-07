# JWT PERN

A simple registration login using PERN with JWT auth following [this tutorial](https://www.youtube.com/watch?v=7UQBMb8ZpuE).

## Setup Server

```bash
cd server
cp .env.sample .env
npm install
```

## Configure database

Postgres is required, so edit the `/server/db.js` with your database configs.
You must run the sql commands that are in the `/server/database.sql` inside your database.

## Run Server

```bash
node index.js
```

## Setup Client

```bash
cd client
npm install
```

## Run Client

```bash
npm start
```
