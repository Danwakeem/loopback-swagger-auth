const sandbox = require("sinon").createSandbox();
const Swagger = require("./index");

describe("loopback-swagger-auth", () => {
  let loopbackApplication;
  let setSpy;
  beforeEach(() => {
    loopbackApplication = {
      set: (key, val) => {
        this[key] = val;
      }
    };
    setSpy = sandbox.spy(loopbackApplication, "set");
  });

  afterEach(() => sandbox.restore());

  it("should add blank object to loopback application", () => {
    Swagger(loopbackApplication);

    sandbox.assert.calledOnce(setSpy);
    sandbox.assert.calledWith(setSpy, "swagger", {});
  });

  it("should add a swagger object to the loopback application", () => {
    const customSwaggerStuff = { swaggerStuff: true };
    Swagger(loopbackApplication, customSwaggerStuff);

    sandbox.assert.calledOnce(setSpy);
    sandbox.assert.calledWith(setSpy, "swagger", customSwaggerStuff);
  });
});
