import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { logger } from './Logger';

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

export function validateSchema(
  schema: object,
  data: unknown,
  schemaName = 'UnknownSchema'
): void {
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  if (!isValid) {
    const errors = validate.errors?.map(err => ({
      path: err.instancePath || '/',
      message: err.message,
      keyword: err.keyword
    }));

    logger.error('Schema validation failed', {
      schema: schemaName,
      errorCount: errors?.length,
      errors
    });

    throw new Error(
      `Schema validation failed for ${schemaName}:\n` +
        errors?.map(e => `${e.path} ${e.message}`).join('\n')
    );
  }

  logger.debug('Schema validation successful', {
    schema: schemaName
  });
}
