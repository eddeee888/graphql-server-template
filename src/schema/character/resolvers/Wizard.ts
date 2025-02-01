import type { WizardResolvers } from "./../../types.generated";
export const Wizard: WizardResolvers = {
  screenName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
  mostRelatedCharacter: () => {
    return null;
  },
  relatedCharacters: () => {
    return [];
  },
};
