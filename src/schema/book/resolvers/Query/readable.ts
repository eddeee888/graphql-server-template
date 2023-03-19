import type { QueryResolvers } from "./../../../types.generated";
export const readable: NonNullable<QueryResolvers["readable"]> = async (
  _parent,
  { id }, // id is something like this: Magazine:1, ShortNovel:2, etc.
  { data }
) => {
  const [readableType, readableId] = id.split(":");

  if (!readableType || !readableId) {
    return null;
  }

  if (readableType !== "Magazine" && readableType !== "ShortNovel") {
    return null;
  }

  if (readableType === "Magazine") {
    const readableObject = data.magazines[readableId];
    return {
      __typename: "Magazine",
      id: readableObject.id,
      issueNumber: readableObject.issueNumber,
    };
  } else if (readableType === "ShortNovel") {
    const readableObject = data.shortNovels[readableId];
    return {
      __typename: "ShortNovel",
      id: readableObject.id,
      summary: readableObject.summary,
    };
  } else {
    return null;
  }
};
