var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

const countryCodes = ['CR','MX','GT','PA','SV','HN','NI','BZ'];

const map = {
      lat: 17.816627,
      lng: -98.35669392677512,
      zoom: 4.809933245,
    }

var siteConfig = {
  version: 2,
  routes: {
    alwaysUseHrefs: true, // Update - there now is translations. since the site isn't translated we can use push for now. if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey',"datasetKey","datasetSearch", "literatureSearch"],
  },
  availableCatalogues: ['OCCURRENCE', 'COLLECTION', 'INSTITUTION', 'DATASET'],
  occurrence: {
    //highlightedFilters: ['taxonKey', 'verbatimScientificName', 'institutionKey'],
    //defaultTableColumns: ['features', 'institutionKey', 'collectionKey', 'country', 'year'],
    mapSettings: {
      lat: 17.816627,
      lng: -98.35669392677512,
      zoom: 4.809933245,
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "key": "country",
          "type": "in",
          "values": countryCodes
        },
        {
          "key": "notIssues",
          "type": "equals",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    }, 
    occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'DASHBOARD']
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },


  institution: {
//    highlightedFilters: ['taxonKey'],
//    defaultTableColumns: ['features', 'institutionKey', 'collectionKey', 'country', 'year'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: countryCodes
    },
    mapSettings: {
      enabled: true,
      lat: 17.816627,
      lng: -98.35669392677512,
      zoom: 4.809933245,
    }
  },


  collection: {
    rootFilter: {
      displayOnNHCPortal: true,
      country: countryCodes
    }
  },



  dataset: {
    rootFilter: {
      publishingCountry: countryCodes
    }
  },


  literature: {
    rootFilter: {
      predicate: {
        type: 'in',
        key: 'countriesOfResearcher',
        values: countryCodes
      }
    }
  },


  maps: {
    locale: 'es',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
    }
  }
};