'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

 const { sanitizeEntity } = require('strapi-utils');
 const axios = require('axios');

 module.exports = {

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.product.search(ctx.query);
    } else {
      entities = await strapi.services.product.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.product }));
  },

   /*
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.product.search(ctx.query);
    } else {
      entities = await strapi.services.product.find(ctx.query);
    }

  

    // Call to Upward servers
    let result;
    axios.get('http://api.l5srv.net/job_search/api/web/find_jobs.srv?CID=4502&format=json&l=95054&r=25&s=relevance&a=2014-09-30&start=1&limit=8&highlight=off&userip=25.158.22.121&useragent=Mozilla%2F5.0&cid=4502&q=Sales')
    .then(response => {
      console.log(response.data.url);
      //console.log(response.data.explanation);
      //console.log(response.data);
      //console.log("response.data[0]: ", response.data[0]);
      console.log("response.data[0]['response']: ", response.data[0]['response']['results']);
      //console.log(response.data.response);
      // console.log(response.data.response.result);
      result = response.data[0]['response']['results'];
    })
    .catch(error => {
      console.log(error);
    });

    let products = entities.map(entity => sanitizeEntity(entity, { model: strapi.models.product }));
    products['jobs'] = result

    // return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.product }));

    return products;
  },
  */

  async findAnd(ctx) {

    console.log("ctx query: ", ctx.query);
    return "hi"

  },

  async findArbitrary(ctx) {

    console.log("findArbitrary: ctx query: ", ctx.query);
    //const products = await strapi.services.products.search(ctx.query);

      let entities;
      if (ctx.query._q) {
        /*
        console.log(
          "ctx.query._q: ",
          ctx.query._q
        );
        */
        entities = await strapi.services.product.search(ctx.query);
      } else {

        console.log(
          "ctx.query: ",
          ctx.query
        );
        // entities = await strapi.services.products.search(ctx.query);
        //entities = await strapi.services.search(ctx);
        entities = await strapi.services.product.find(ctx.query)
      }



      let products = entities.map(entity => sanitizeEntity(entity, { model: strapi.models.product }));

      // console.log("products['jobs']: ", products);
      // console.log("final result: ", await this.addJobs(products));

      //const final = await this.addJobs(products);

      //return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.product }));
      //return products;
      return await this.addJobs(products);
  },

  async addJobs(products) {

    let result;
    const response = await axios.get('http://api.l5srv.net/job_search/api/web/find_jobs.srv?CID=4502&format=json&l=95054&r=25&s=relevance&a=2014-09-30&start=1&limit=8&highlight=off&userip=25.158.22.121&useragent=Mozilla%2F5.0&cid=4502&q=Sales')
    .then(response => {
      // console.log(response.data.url);
      //console.log(response.data.explanation);
      //console.log(response.data);
      //console.log("response.data[0]: ", response.data[0]);
      // console.log("response.data[0]['response']: ", response.data[0]['response']['results']);
      //console.log(response.data.response);
      // console.log(response.data.response.result);
      result = response.data[0]['response']['results'];
      //products['jobs'] = response.data[0]['response']['results'];
      // console.log("result: ", result);
    })
    .catch(error => {
      console.log(error);
    });

    // const response = await fetch('http://api.l5srv.net/job_search/api/web/find_jobs.srv?CID=4502&format=json&l=95054&r=25&s=relevance&a=2014-09-30&start=1&limit=8&highlight=off&userip=25.158.22.121&useragent=Mozilla%2F5.0&cid=4502&q=Sales');

    // const { data } = await axios.get('http://api.l5srv.net/job_search/api/web/find_jobs.srv?CID=4502&format=json&l=95054&r=25&s=relevance&a=2014-09-30&start=1&limit=8&highlight=off&userip=25.158.22.121&useragent=Mozilla%2F5.0&cid=4502&q=Sales');
    // console.log(data[0]['response']['results']);
    // products['jobs'] = data[0]['response']['results'];
    products['jobs'] = result;

    //return products;
    return result;
    //return result;

  },
 };

