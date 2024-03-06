import type { WizardResolvers } from "./../../types.generated";
export const Wizard: WizardResolvers = {
  screenName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
  appearsIn: () => {
    return [];
  },
  lastAppearsIn: () => {
    return null;
  },
  mostRelatedCharacter: () => {
    return null;
  },
  relatedCharacters: () => {
    return [];
  },
};
