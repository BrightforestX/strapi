'use strict';
//const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */


 const { sanitizeEntity } = require('strapi-utils');
 


 

 module.exports = {
    async find(ctx) {

      let entities;
      if (ctx.query._q) {
        entities = await strapi.services.post.search(ctx.query);
      } else {
        entities = await strapi.services.post.find(ctx.query);
      }
      
      console.log("entities: ", entities);

      return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.post }));
    },
  };
 

  /*
  module.exports = {
    async find(ctx) {
      let entities;
      if (ctx.query._q) {
        entities = await strapi.services.restaurant.search(ctx.query);
      } else {
        entities = await strapi.services.restaurant.find(ctx.query);
      }
  
      return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.restaurant }));
    },
  };

  */
  
 
  