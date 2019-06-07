module.exports = (loopbackApplication, options) => {
  const swagger = options || {};
  loopbackApplication.set("swagger", swagger);
};
