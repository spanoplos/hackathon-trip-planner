require('coffee-script/register');

const Translations = require('translations-runtime');
const path = require('path');
const vfs = require('vinyl-fs');

/* eslint-disable */
Translations().inject(function(TranslationsClient, TranslationsDownloadStream) {
  const i18nRoot = path.resolve('./src/translations');

  TranslationsDownloadStream.download(i18nRoot).pipe(vfs.dest(i18nRoot));
});
