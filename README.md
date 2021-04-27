## Description

GraphQL backend service using NestJS & Typescript

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## DB

```bash
  Dummy data:
    Books: ./src/mocks/books.mock.ts
    Libraries: ./src/mocks/libraries.mock.ts
```

## Search books by title (case-sensitive) and Get all books without using "search" argument
```bash
query {
  books(search: "book") {
    id,
    title,
    createdDate,
    library {
      id,
      title
    }
  }
}


query {
  books {
    id,
    title,
    createdDate,
    library {
      id,
      title
    }
  }
}
```

##  Get total number of how many books added - starting from specific starting date

```bash
  query {
    count(startingDate: "06/07/2010")  
  }
```

## GraphQL mutation that can change book title for specific book id

```bash
  mutation {
    update(input: { id: 1, title: "First Book" }) {
      id,
      title,
      createdDate,
      library {
        id, title
      }
    } 
  }
```