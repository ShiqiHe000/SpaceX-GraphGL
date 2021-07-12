const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat,
} = require("graphql");
const axios = require("axios");

const lauchUrl = "https://api.spacexdata.com/v4/launches";
const rocketUrl = "https://api.spacexdata.com/v4/rockets";

// Launch type
const LaunchType = new GraphQLObjectType({
    name: "Launch",
    fields: () => ({
        id: { type: GraphQLString },
        flight_number: { type: GraphQLInt },
        name: { type: GraphQLString },
        date_local: { type: GraphQLString },
        success: { type: GraphQLBoolean },
        rocket: { type: GraphQLString },
    }),
});

const RocketHeightType = new GraphQLObjectType({
    name: "RocketHeightType",
    fields: () => ({
        meters: { type: GraphQLFloat },
    }),
});

const RocketMassType = new GraphQLObjectType({
    name: "RocketMassType",
    fields: () => ({
        kg: { type: GraphQLInt },
    }),
});

// const RocketImageType = new GraphQLObjectType({
//     name: "RocketImageType",
//     fields: () => ({
//         kg: { type: GraphQLInt },
//     }),
// });

const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        country: { type: GraphQLString },
        height: { type: RocketHeightType },
        mass: { type: RocketMassType },
        flickr_images: { type: new GraphQLList(GraphQLString) },
    }),
});

// Root query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve: async (parent, args) => {
                try {
                    const res = await axios.get(lauchUrl);
                    return res.data;
                } catch (err) {
                    console.log(err);
                }
            },
        },
        launch: {
            type: LaunchType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: async (parent, args) => {
                try {
                    const res = await axios.get(`${lauchUrl}/${args.id}`);

                    return res.data;
                } catch (err) {
                    console.log(err);
                }
            },
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve: async (parent, args) => {
                try {
                    const res = await axios.get(rocketUrl);
                    return res.data;
                } catch (err) {
                    console.log(err);
                }
            },
        },
        rocket: {
            type: RocketType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: async (parent, args) => {
                try {
                    const res = await axios.get(`${rocketUrl}/${args.id}`);

                    return res.data;
                } catch (err) {
                    console.log(err);
                }
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
