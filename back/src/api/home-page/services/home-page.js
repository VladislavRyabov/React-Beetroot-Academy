'use strict';

/**
 * home-page products
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-page.home-page');
