/**
 * @param {string} slug
 * @returns {import('./index').IBrandInfo | undefined}
 */
export function getBrandInfo(slug) {
  try {
    return require(`../brands/${slug.toLowerCase().replace(":", "/")}.json`);
  } catch (error) {}

  return undefined;
}
