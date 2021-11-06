# Next.js + Hasura Boilerplate

Boilerplate setup for Next.js / Now + Hasura + GraphQL Codegen + TypeScript + next-auth

## Getting started

- Run `yarn` from root
- Run `yarn setup` from root
- Create .env files from templates
- Set up your schemas in Hasura cloud
  - For auth to work, add a data type `user` with `email` and `id`
  - For demo CRUD to work:
    - add a data type `post` with `content` and `id`
    - Make `post` SELECT publicly available by allowing role `anonymous` access
    - Add `HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous` to Hasura Env Vars
- Add your graphql queries in `packages/data-lib/data-sources/hasura/graphql/queries`

## TODO

- i18n - https://github.com/isaachinman/next-i18next
- Testing - Testcafe / cypress
- Metatags / SEO - https://github.com/garmeeh/next-seo
- State - redux / mobx state tree ? context api? hookstate looks good but might not be maintained
