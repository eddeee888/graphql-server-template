import { graphql } from "../../../../gql";

graphql(/* GraphQL */ `
  query ErrorSim {
    t3: errorSimulator {
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
