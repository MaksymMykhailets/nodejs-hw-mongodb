const parseType = (contactType) => {
  if (typeof contactType !== 'string') {
    return undefined;
  }

  const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') {
    return undefined;
  }
  const isIsFavourite = (isFavourite) =>
    ['true', 'false'].includes(isFavourite);
  if (isIsFavourite(isFavourite)) {
    return isFavourite;
  }
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
