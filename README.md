# rxdb-websocket-problem-backend

Backend for reproducing [rxdb issue #6141](https://github.com/pubkey/rxdb/issues/6141).

## Commands

First, start the database.

```sh
docker compose up
```

Then execute the following commands in the terminal one by one:

```sh
npm i
npx prisma migrate dev  # This will create the database schema.
npx prisma db seed  # This will insert the test data.
npm run start:dev  # This will start the server.
```