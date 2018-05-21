require('coffee-script/register');

const Translations = require('translations-runtime');
const path = require('path');

/* eslint-disable */
Translations().inject(function(TranslationsClient) {
  const i18nRoot = path.resolve('./src/translations');

  TranslationsClient.upload(i18nRoot);
});
