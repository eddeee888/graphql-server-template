import type { QueryResolvers } from "./../../../types.generated";
export const character: NonNullable<QueryResolvers["character"]> = async (
  _parent,
  { id },
  { data },
) => {
  const foundCharacter = data.characters[id];

  if (!foundCharacter) {
    return null;
  }

  if (foundCharacter.type === "Fighter") {
    return {
      __typename: "Fighter",
      id: foundCharacter.id,
      mostRelatedCharacter: null,
      relatedCharacters: [],
      screenName: foundCharacter.screenName,
      powerLevel: foundCharacter.power,
    };
  } else if (foundCharacter.type === "Wizard") {
    return {
      __typename: "Wizard",
      id: foundCharacter.id,
      firstName: foundCharacter.firstName,
      lastName: foundCharacter.lastName,
      spells: foundCharacter.spells,
    };
  } else if (foundCharacter.type === "ExtraCharacter") {
    return {
      __typename: "ExtraCharacter",
      id: foundCharacter.id,
      relatedCharacters: [],
      creditName: foundCharacter.creditName,
    };
  }

  return null;
};
