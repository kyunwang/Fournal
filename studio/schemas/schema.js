// We will be using the GraphQL API - https://www.sanity.io/docs/data-store/graphql

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import { Author, FoodSpot } from './documents';
import { OrderItem, VisitPost, Picture } from './objects';
// import * as Documents from './documents';
// import * as Objects from './objects';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	types: schemaTypes.concat([Author, FoodSpot, OrderItem, VisitPost, Picture]),
});
