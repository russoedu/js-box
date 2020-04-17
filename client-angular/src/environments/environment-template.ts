export const environment = {
  production: Boolean('${JS_BOX_ANGULAR_PRODUCTION}'),
  JS_BOX_CLIENT: 'angular',
  JS_BOX_ENVIRONMENT: '${JS_BOX_ENVIRONMENT}',
  JS_BOX_NGINX_PORT: Number('${JS_BOX_NGINX_PORT}'),
  JS_BOX_NGINX_HOST: '${JS_BOX_NGINX_HOST}',
};
