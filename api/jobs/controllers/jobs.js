'use strict';
//const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

 const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
 
 module.exports = {

    // find
    async find(ctx) {

      let entities;
      if (ctx.query._q) {
        entities = await strapi.services.jobs.search(ctx.query);
      } else {
        entities = await strapi.services.jobs.find(ctx.query);
      }
      
      console.log("entities: ", entities);

      return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.jobs }));
    },

   // create
    /*
   async create(ctx) {

    console.log("create triggered");

    console.log(
        "Print cxt: \n", 
        ctx.query,
        "\n",
        ctx.query._q,
        "\n",
        ctx
        );

    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.jobs.search(ctx.query);
    } else {
      entities = await strapi.services.jobs.find(ctx.query);
    }
    
    //console.log("entities: ", entities);

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.jobs }));
  },
  */

  async create(ctx) {
      /*
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      console.log("data: ", data);
      entity = await strapi.services.jobs.create(data, { files });
    } else {
     const { data, files } = parseMultipartData(ctx);
     console.log("data: ", data);
      entity = await strapi.services.jobs.create(ctx.request.body);
    }
    */

    return ctx.request.body
    // return ctx
    //return entity;
    //return sanitizeEntity(entity, { model: strapi.models.jobs });
  },

  };
 

  
 
  