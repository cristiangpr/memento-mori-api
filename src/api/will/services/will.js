'use strict';

/**
 * will service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::will.will');
