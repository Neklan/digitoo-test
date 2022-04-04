## Description

Digitoo homework

## Installation

```bash
# Install node_modules
$ yarn install

# Install postgres and pg admin and dockerize it in background
$ cd docker && docker-compose up -d

# Create test database, password for connection is 'root'
$ yarn init:testdb
```

## Running the app

```bash
$ npm run start
```

## Test

```bash
# unit tests
$ yarn test
```

## License

[MIT licensed](LICENSE).
