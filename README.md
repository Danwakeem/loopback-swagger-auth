# Loopback Swagger Auth

[![Build Status](https://travis-ci.com/Danwakeem/loopback-swagger-auth.svg?branch=master)](https://travis-ci.com/Danwakeem/loopback-swagger-auth)
[![Coverage Status](https://coveralls.io/repos/github/Danwakeem/loopback-swagger-auth/badge.svg?branch=master)](https://coveralls.io/github/Danwakeem/loopback-swagger-auth?branch=master)

This loopback component to add global authentication to your swagger spec file.

> Note: This does not implement authentication it simply updates your swagger spec with global metadata. You can also technically use this to implement anything globally but I created it to add authentication to my spec file :)

## Useage

## Install
`npm i loopback-swagger-auth --save`

## Integrate with Loopback
Include the mixin in your `component-config.json` file

```json
{
  "loopback-swagger-auth": {
    "securityDefinitions": {
      "BearerAuth": {
        "type": "apiKey",
        "name": "Authorization",
        "in": "header"
      }
    },
    "security": [
      {
        "BearerAuth": []
      }
    ]
  }
}
```

The example above is adding an Authorization header for bearer token authentication. If you need more info on `securityDefinitions` in swagger 2.0 check swaggers [README](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-definitions-object).


## Options
As mentioned above this component supports any global properties in the swagger 2.0 spec. Check the [README](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) for more info on what options are available.
