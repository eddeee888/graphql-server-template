import { graphql } from "../../../../gql";

graphql(`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      ...ProjectData
    }
  }

  fragment ProjectData on Project {
    id
    myWorkflow {
      id
      nextTask {
        id
        assignedTo {
          id: uuid
          fullName
        }
      }
    }
    ...GetActionButtonsData
  }

  fragment GetActionButtonsData on Project {
    id
    ...IsAssignedToMeData
  }

  fragment IsAssignedToMeData on Project {
    id
    myWorkflow {
      id
      nextTask {
        id
        assignedTo {
          id
          fullName
        }
      }
    }
  }
`);
