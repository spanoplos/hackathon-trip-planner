/**
 *
 * MOCK API ROUTES
 *
 * Add any mock endpoints neeed for the front end to this file.
 *
 *
 */

/* eslint-disable max-len */

const express = require('express');
const path = require('path');

module.exports = app => {
  const cdnPath = path.resolve(__dirname, '../../../dist/');

  app.use('/microapps/:env/:appName/:appVersion/', express.static(cdnPath));
  app.use('/gc-microapps/:env/:appName/:appVersion/', express.static(cdnPath));
  app.use('/gc-microapps/:env/:appName/:appVersion/translations/:locale', express.static(cdnPath));

  app.use('/admin/user-accounts/:rid/microapps/:env/:appName/:appVersion/', express.static(cdnPath));

  app.get('/setup/api/featureToggles', (req, res) => {
    const features = [
      'gcaProfilePhotos',
      'gcaBusinessHours',
      'gcaMarketingPromos',
      'featureGcaMarketingPrivateDining',
      'gcaMarketingGuestCampaigns',
      'navigationRedesign',
      'featureGcaPrivateDiningV2',
      'rebrandingFonts',
      'featureGcaPiGuestCampaigns',
      'featureGcaPiSpecials',
      'featureGcaPiCustomPromotions',
    ];

    const featuresObj = features.reduce((acc, curr) => {
      acc[curr] = true; // eslint-disable-line no-param-reassign
      return acc;
    }, {});
    res.json(featuresObj);
  });

  app.get('/api/restaurant/:rid/orphanedReservationsSummary/:date', (req, res) => {
    const orphanResos = {
      ridRangeStart: 10000,
      default: {
        rid: 76972,
        name: '@Siam Restaurant',
        languageCode: 'en-GB',
        street1: null,
        street2: null,
        city: 'San Francisco',
        state: 'California',
        province: null,
        provinceCode: null,
        country: 'United Kingdom',
        countryCode: 'GB',
        isTestRestaurant: false,
        timeZone: null,
        productType: 'Guest_Center',
        user: null,
      },
    };

    res.json(orphanResos);
  });

  app.get('/setup/api/currentContext', (req, res) => {
    const user = {
      id: '54efd1d76f8435051cca9877',
      role: 'Internal_User',
      userName: 'bogusemail186218@mailinator.com',
      firstName: 'John',
      lastName: 'Doe',
    };

    const restaurant = {
      rid: 158701,
      name: 'A Test Restaurant',
      isClaimedListing: false,
      productType: 'Guest_Center',
      address: {
        street1: null,
        street2: null,
        city: 'San Francisco',
        province: 'California',
        provinceCode: 'CA',
        country: 'United States',
        countryCode: 'US',
        postalCode: null,
      },
    };

    res.json({ user, restaurant });
  });

  if (process.env.MOCK) {
    app.get('/admin/api/restaurant/:rid/promos', (req, res) => {
      res.json(require('../../fixtures/promosFixture'));
    });

    app.post('/admin/api/restaurant/:rid/private-dining', (req, res) => {
      res.status(200).json({});
    });

    app.post('/admin/api/restaurant/:rid/guest-campaigns', (req, res) => {
      res.status(200).json({});
    });
  }
};
