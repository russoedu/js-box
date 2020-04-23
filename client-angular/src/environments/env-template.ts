export const environment = {
  production: Boolean('${JS_BOX_ANGULAR_PRODUCTION}'),
  JS_BOX_CLIENT: 'angular',
  JS_BOX_ENVIRONMENT: '${JS_BOX_ENVIRONMENT}',
  JS_BOX_ACCESS_PORT: Number('${JS_BOX_ACCESS_PORT}'),
  JS_BOX_ACCESS_HOST: '${JS_BOX_ACCESS_HOST}',
};
