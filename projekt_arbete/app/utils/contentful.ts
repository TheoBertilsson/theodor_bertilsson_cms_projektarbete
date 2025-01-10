export const getAbsoluteImageUrl = (relativeUrl: string) => {
  if (relativeUrl.startsWith('//')) {
    return `https:${relativeUrl}`;
  }
  return relativeUrl;
};
