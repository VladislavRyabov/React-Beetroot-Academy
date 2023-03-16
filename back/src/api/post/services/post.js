'use strict';

/**
 * post products
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post.post');
