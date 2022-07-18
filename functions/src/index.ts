import * as express from "express";
import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import { https } from "firebase-functions";
import { v4 as uuidv4 } from "uuid";

import {
  account_key as ACCOUNT_KEY,
  database_url as DATABASE_URL,
} from "./database_environment.json";

/* eslint-disable */
const { ApolloServer, gql } = require("apollo-server-express");
/* eslint-enable */

import { createRecipe, getRecipes, isNewRecipe, removeRecipe, updateRecipe } from "./core";
import { ExistingRecipe, NewRecipe } from "./type";

admin.initializeApp({
  credential: admin.credential.cert(ACCOUNT_KEY as ServiceAccount),
  databaseURL: DATABASE_URL,
});

// Create your own typeDefs
const typeDefs = gql`
  type Recipe {
    # for new recipe id will be undefined
    id: String
    title: String!
    description: String!
    imagesSrc: [String!]!
    markdownSrc: String!
    type: String!
  }

  input RecipeInput {
    id: String
    title: String!
    description: String!
    imagesSrc: [String!]!
    markdownSrc: String!
    type: String!
  }

  # the schema allows the following query:
  type Query {
    recipes: [Recipe]
  }

  # this schema allows the following mutation:
  type Mutation {
    createRecipe(input: RecipeInput!): [Recipe]
    updateRecipe(input: RecipeInput!): [Recipe]
    removeRecipe(input: String!): String
  }
`;

const resolvers = {
  // this resolvers allows the following query recipes operation:
  Query: {
    recipes: getRecipes,
  },

  // this resolvers allows the following mutation recipes operation:
  Mutation: {
    createRecipe: async (_: unknown, { input: newRecipe }: { input: NewRecipe }) => {
      if (!isNewRecipe(newRecipe)) throw new Error("ID exists inside recipe. Please make sure use endpoint with new recipes.");
      const recipe = { ...newRecipe, id: uuidv4() };
      await createRecipe(recipe);
      return getRecipes();
    },
    updateRecipe: async (_: unknown, { input: recipe }: { input: ExistingRecipe }) => {
      if (isNewRecipe(recipe)) throw new Error("ID is missing from recipe. Please make sure use endpoint with existing recipes.");
      await updateRecipe(recipe);
      return getRecipes();
    },
    removeRecipe: async (_: unknown, { input: id }: { input: string }) => {
      if (!id) throw new Error("ID is missing from recipe. Please make sure calling endpoint with valid id");
      await removeRecipe(id);
      return id;
    },
  },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server
    .start()
    .then(() => server.applyMiddleware({ app, path: "/", cors: true }));

export const graphql = https.onRequest(app);
