export const schemaTypeDefinition = `

type User {
    id: ID!
    firstName: String!
    lastName: String!
    maidenName: String!
    age: String!
    gender: String!
    email: String!
    phone: String!
    username: String!
    password: String!
}

type Burger {
    id: ID!
    name: String!
    description: String!
    price: Float!
    calories: Float!
    inStock: Boolean!
    patty: String!
    cheese: Boolean!
    lettuce: Boolean!
    tomato: Boolean!
    onion: Boolean!
    sauce: Boolean!
}

type Query {
    users: [User]
    user(id: ID!): User
    burgers: [Burger]
    burger(name: String!): Burger
}
`