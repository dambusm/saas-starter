const { HASURA_GRAPHQL_URL } = process.env;

module.exports = {
  "name": "Hasura",
  "schemaPath": "schema.graphql",
  "extensions": {
    "endpoints": {
      "Default GraphQL Endpoint": {
        "url": HASURA_GRAPHQL_URL,
        "headers": {
          "user-agent": "JS GraphQL"
        },
        "introspect": false
      }
    }
  }
}
