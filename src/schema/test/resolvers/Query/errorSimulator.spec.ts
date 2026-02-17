import { graphql } from "../../../../gql";

graphql(/* GraphQL */ `
  query ErrorSim {
    errorSimulator {
      resolve2(delay: 500, err: false) {
        field
        ... on ErrorSimulatorResult @defer {
          failed: resolve2(delay: 1000, err: true) {
            field
          }
        }
      }
    }
  }
`);
