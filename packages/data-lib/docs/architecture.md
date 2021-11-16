- Directus provides an endpoint that exposes as Swagger (OpenAPI) schema.
- `yarn introspect` downloads the schema
- `yarn generate` generates a TypeScript SDK based on the schema
- We write a simple interface on top of this SDK, to hide any complexity, ensure consistency and minimise lock-in by having an API that we control.

Why do we use the OpenAPI generated SDK instead of Directus' JS SDK?

Pros:

1. Cancelable requests
2. The Directus SDK requires manual input of type info. This should be fixed soon, ref: https://github.com/directus/directus/pull/8531

Cons:

1. Filter parameters are untyped
2. Slightly more verbose
3. Responses come out as optional
