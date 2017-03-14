module.exports = {
    port: process.env.PORT || 8090,
    mongo: 'mongodb://vaithwee:3a24ca224c@ds131320.mlab.com:31320/wee-blog',
    session: {
        secret: 'wee-blog',
        key: '12fa213edf2',
        maxAge: 2592000000
    }
}