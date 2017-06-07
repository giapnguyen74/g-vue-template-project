
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: [],
    globals: {
        gql: true,
        Vue: true,
        it: true,
        JSON: true,
        $: true,
    },
    root: true,
    env: {
        browser: true,
    },
    "plugins": [
        "html",
        "graphql",
        "standard",
        "promise",
    ],

};