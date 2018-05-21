/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

// Add the locale-data for each language we support
// https://github.com/yahoo/react-intl/wiki#loading-locale-data
import caLocaleData from 'react-intl/locale-data/ca';
import deLocaleData from 'react-intl/locale-data/de';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';
import frLocaleData from 'react-intl/locale-data/fr';
import itLocaleData from 'react-intl/locale-data/it';
import jaLocaleData from 'react-intl/locale-data/ja';
import nlLocaleData from 'react-intl/locale-data/nl';
import ukLocaleData from 'react-intl/locale-data/uk';

addLocaleData([
  ...enLocaleData,
  ...nlLocaleData,
  ...caLocaleData,
  ...frLocaleData,
  ...esLocaleData,
  ...jaLocaleData,
  ...ukLocaleData,
  ...esLocaleData,
  ...deLocaleData,
  ...itLocaleData,
]);

// Import the translated messages and make them available to the application
import deDETranslationMessages from './json/de-de.json';
import enAUTranslationMessages from './json/en-au.json';
import enGBTranslationMessages from './json/en-gb.json';
import enUSTranslationMessages from './json/en-us.json';
import esESTranslationMessages from './json/es-es.json';
import esMXTranslationMessages from './json/es-mx.json';
import frCATranslationMessages from './json/fr-ca.json';
import frFRTranslationMessages from './json/fr-fr.json';
import itITTranslationMessages from './json/it-it.json';
import jaJPTranslationMessages from './json/ja-jp.json';
import nlNLTranslationMessages from './json/nl-nl.json';

export const translationMessages = {
  'de-de': deDETranslationMessages,
  'en-au': enAUTranslationMessages,
  'en-gb': enGBTranslationMessages,
  'en-us': enUSTranslationMessages,
  'es-es': esESTranslationMessages,
  'es-mx': esMXTranslationMessages,
  'fr-ca': frCATranslationMessages,
  'fr-fr': frFRTranslationMessages,
  'it-it': itITTranslationMessages,
  'ja-jp': jaJPTranslationMessages,
  'nl-nl': nlNLTranslationMessages,
};
