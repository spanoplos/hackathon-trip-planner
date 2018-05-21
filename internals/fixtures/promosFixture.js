const penaltySpecification = {
  specification: {
    cancellationPenalty: {
      isStrict: true,
      amount: 25,
      dayOfReservationCutoff: {
        time: '19:00',
      },
    },
    guestCountChangePenalty: {
      isStrict: true,
      amount: 10,
      timeSpanCutoff: {
        days: 8,
      },
    },
  },
  schemaVersion: 1,
};

module.exports = {
  fetchStatus: 'init',
  flashMessage: null,
  saveStatus: 'init',
  metroId: 4,
  primaryLanguage: 'string',
  creditCardEnabled: true,
  currentPromoId: null,
  promos: [
    {
      // Seasonal promo, previously joined
      id: 1,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-09-20T00:00:00',
          end: '2017-11-23T00:00:00',
        },
        eventDates: {
          start: '2017-11-22T00:00:00',
          end: '2017-11-23T00:00:00',
        },
        selfServeDetails: {
          name: 'Thanksgiving',
          placeHolder:
            'Do you offer a special Thanksgiving menu? Tell us why your restaurant is the place to book for this holiday.',
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: {
        message: 'We are offering an awesome Thanksgiving dinner!',
        isActive: false,
        language: 'en-US',
        rank: 1,
        updatedBy: 'aselbie@opentable.com',
        updatedOn: '2017-04-17T00:00:00',
      },
    },
    {
      // Seasonal promo, not joined
      id: 4,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-10-17T00:00:00',
          end: '2018-01-01T00:00:00',
        },
        eventDates: {
          start: '2017-12-31T00:00:00',
          end: '2018-01-01T00:00:00',
        },
        selfServeDetails: {
          name: "New Year's Eve",
          placeHolder:
            "Do you offer a special New Year's Eve menu? Tell us why your restaurant is the place to book for this holiday.",
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      // Seasonal promo, currently joined
      id: 5,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-10-17T00:00:00',
          end: '2017-12-25T00:00:00',
        },
        eventDates: {
          start: '2017-12-24T00:00:00',
          end: '2017-12-25T00:00:00',
        },
        selfServeDetails: {
          name: 'Christmas Eve',
          placeHolder:
            'Do you offer a special Christmas menu? Tell us why your restaurant is the place to book for this holiday.',
          details: '',
          photoId: '',
        },
      },
      creditCardDay: {
        effectiveDate: '2017-12-25',
        startTime: '16:30:00',
        endTime: '22:30:00',
        createdDateTime: '2017-03-23 17:17:29.923',
        createdBy: 'aselbie@opentable.com',
        version: 1,
        partySize: 1,
        Specification: penaltySpecification,
      },
      promoRestaurant: {
        message: 'We are offering an awesome Christmas Eve dinner!',
        isActive: true,
        language: 'en-US',
        rank: 1,
        updatedBy: 'aselbie@opentable.com',
        updatedOn: '2017-04-17T00:00:00',
      },
    },
    {
      id: 6,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-10-17T00:00:00',
          end: '2017-12-26T00:00:00',
        },
        eventDates: {
          start: '2017-12-25T00:00:00',
          end: '2017-12-26T00:00:00',
        },
        selfServeDetails: {
          name: 'Christmas Day',
          placeHolder:
            'Do you offer a special Christmas menu? Tell us why your restaurant is the place to book for this holiday.',
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      // Featured category, currently joined
      id: 14,
      promo: {
        type: 'Featured',
        displayLinkDates: {
          start: '2009-01-01T10:00:00',
          end: '9999-12-31T00:00:00',
        },
        eventDates: {
          start: '2009-01-01T10:00:00',
          end: '9999-12-31T00:00:00',
        },
        selfServeDetails: {
          name: 'Al Fresco',
          placeHolder: 'Tell us why your outdoor dining options attract diners.',
          details:
            "When the weather is warm—or not and you have heat lamps!—your restaurant's patio, terrace, or other outdoor space is a destination for dining outside.",
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: {
        message: 'We have the best patios',
        isActive: true,
        language: 'en-US',
        rank: 1,
        updatedBy: 'aselbie@opentable.com',
        updatedOn: '2017-04-17T00:00:00',
      },
    },
    {
      id: 77,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-03-01T00:00:00',
          end: '2017-05-15T00:00:00',
        },
        eventDates: {
          start: '2017-05-14T00:00:00',
          end: '2017-05-15T00:00:00',
        },
        selfServeDetails: {
          name: "Mother's Day",
          placeHolder:
            "Do you offer a special Mother's Day menu? Tell us why your restaurant is the place to book for this holiday.",
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 85,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-05-01T10:00:00',
          end: '2017-06-19T00:00:00',
        },
        eventDates: {
          start: '2017-06-18T00:00:00',
          end: '2017-06-19T00:00:00',
        },
        selfServeDetails: {
          name: "Father's Day",
          placeHolder:
            "Do you offer a special Father's Day menu? Tell us why your restaurant is the place to book for this holiday.",
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 102,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-01-02T00:00:00',
          end: '2017-02-15T00:00:00',
        },
        eventDates: {
          start: '2017-02-14T00:00:00',
          end: '2017-02-15T00:00:00',
        },
        selfServeDetails: {
          name: "Valentine's Day",
          placeHolder:
            "Do you offer a special Valentine's Day menu? Tell us why your restaurant is the place to book for this holiday.",
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 212,
      promo: {
        type: 'Featured',
        displayLinkDates: {
          start: '2009-01-01T00:00:00',
          end: '2019-12-31T00:00:00',
        },
        eventDates: {
          start: '2009-01-01T00:00:00',
          end: '2019-01-01T00:00:00',
        },
        selfServeDetails: {
          name: 'Brunch',
          placeHolder: 'Tell us why your brunch menu rocks.',
          details:
            'Eggs, pancakes, duck confit hash, you name it—guests will love weekend mornings at your restaurant.',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 228,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-03-01T00:00:00',
          end: '2017-04-17T00:00:00',
        },
        eventDates: {
          start: '2017-04-16T00:00:00',
          end: '2017-04-17T00:00:00',
        },
        selfServeDetails: {
          name: 'Easter',
          placeHolder:
            'Do you offer a special Easter menu? Tell us why your restaurant is the place to book for this holiday.',
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 243,
      promo: {
        type: 'Featured',
        displayLinkDates: {
          start: '2009-06-08T10:00:00',
          end: '9999-12-31T00:00:00',
        },
        eventDates: {
          start: '2009-06-08T10:00:00',
          end: '9999-12-31T00:00:00',
        },
        selfServeDetails: {
          name: 'Theatre Dining',
          placeHolder: 'Tell us why your restaurant is a great choice for theatre-goers.',
          details:
            'From speedy service to proximity to cultural centers, your restaurant is an ideal spot for theatre-goers and other diners where dining is not the main event.',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 355,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-04-05T00:00:00',
          end: '2017-05-06T00:00:00',
        },
        eventDates: {
          start: '2017-05-05T00:00:00',
          end: '2017-05-06T00:00:00',
        },
        selfServeDetails: {
          name: 'Cinco de Mayo',
          placeHolder:
            'Does your restaurant do anything special for Cinco de Mayo? Tell us why your restaurant is the place to book for this holiday.',
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 369,
      promo: {
        type: 'Featured',
        displayLinkDates: {
          start: '2009-05-13T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        eventDates: {
          start: '2009-05-13T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        selfServeDetails: {
          name: 'Cocktail Culture',
          placeHolder: 'Tell us why people who love craft cocktails will flock to your bar.',
          details:
            'From craft cocktails to bustling happy hours and extensive wine lists, your restaurant sets a high bar for those who love a great drink.',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 370,
      promo: {
        type: 'Featured',
        displayLinkDates: {
          start: '2009-05-13T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        eventDates: {
          start: '2009-05-13T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        selfServeDetails: {
          name: 'BYOB',
          placeHolder: 'Tell us why your BYOB status will enhance any meal.',
          details:
            "Offer free corkage? Don't have a liquor license? Spread the news that guests can bring their own bottles to enjoy at your restaurant.",
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 371,
      promo: {
        type: 'Featured',
        displayLinkDates: {
          start: '2009-05-13T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        eventDates: {
          start: '2009-05-13T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        selfServeDetails: {
          name: 'Power Meals',
          placeHolder: 'Tell us why you attract business diners.',
          details:
            'Business lunches, dinners, and entertaining work groups are your specialty especially if your restaurant is located in a business district.',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 630,
      promo: {
        type: 'Featured',
        displayLinkDates: {
          start: '2012-07-24T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        eventDates: {
          start: '2012-07-24T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        selfServeDetails: {
          name: 'Gluten-Free',
          placeHolder: 'Tell us why your gluten-free menu is the best thing around town.',
          details:
            'Got gluten-free pasta or alternative grains? If your menu contains a number of dishes that are specifically tailored to wheat- and gluten-free dining, let customers know.',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 631,
      promo: {
        type: 'Featured',
        displayLinkDates: {
          start: '2012-07-24T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        eventDates: {
          start: '2012-07-24T00:00:00',
          end: '9999-12-31T00:00:00',
        },
        selfServeDetails: {
          name: 'Veg-Friendly',
          placeHolder: "Tell us why your plant-forward menu will satisfy diners who don't eat meat.",
          details: 'Does your menu contain a number of dishes that would satisfy a hungry vegetarian or vegan?',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 728,
      promo: {
        type: 'Seasonal',
        displayLinkDates: {
          start: '2017-10-17T00:00:00',
          end: '2018-01-02T00:00:00',
        },
        eventDates: {
          start: '2017-12-24T00:00:00',
          end: '2018-01-02T00:00:00',
        },
        selfServeDetails: {
          name: 'Hanukkah',
          placeHolder:
            'Do you offer a special Hanukkah menu? Tell us why your restaurant is the place to book for this holiday.',
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
    {
      id: 99,
      promo: {
        type: 'something_else',
        displayLinkDates: {
          start: '2017-03-01T00:00:00',
          end: '2017-04-02T00:00:00',
        },
        eventDates: {
          start: '2017-04-02T00:00:00',
          end: '2017-04-03T00:00:00',
        },
        selfServeDetails: {
          name: 'Cthulu Day',
          placeHolder:
            'Do you offer a special Cthulu menu? Tell us why your restaurant is the place to book for this holiday.',
          details: '',
          photoId: '',
        },
      },
      creditCardDay: null,
      promoRestaurant: null,
    },
  ],
};
