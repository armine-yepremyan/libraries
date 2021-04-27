type Book {
    id: Int!
    title: String!
    created: String!
    libraryId: Int!
}

type BookUpdate {
    title: String!
    created: String!
    libraryId: Int!
}

type Query {
    books: [Book!]!
}

type Library {
    id: Int!
    title: String!
}

type Mutation {
    updateBook(id: Int!, input: BookUpdate!): Book
}
