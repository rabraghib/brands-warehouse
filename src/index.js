/**
 * @param {string} slug
 * @returns {import('./index').IBrandInfo | undefined}
 */
module.exports.getBrandInfo = function (slug) {
  try {
    return require(`../brands/${slug.toLowerCase().replace(":", "/")}.json`);
  } catch (error) {}

  return undefined;
};
