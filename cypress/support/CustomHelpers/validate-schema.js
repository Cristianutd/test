import Ajv from "ajv";

const getSchemaError = (getAjvError) => {
  return cy.wrap(
    `Field: ${getAjvError[0]["dataPath"]} is invalid. Cause: ${getAjvError[0]["message"]}`
  );
};

export const validateSchema = (jsonSchema, body) => {
  cy.fixture("./schemas/schema-definitions.json").then((defSchema) => {
    cy.fixture(`./schemas/${jsonSchema}`).then((schema) => {
      const ajv = new Ajv();
      const validate = ajv.addSchema(defSchema).compile(schema);
      const valid = validate(body);
      if (!valid) {
        getSchemaError(validate.errors).then((schemaError) => {
          throw new Error(schemaError);
        });
      } else {
        cy.log("Schema validated!");
      }
    });
  });
};
