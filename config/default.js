module.exports = {
    port: 3000,
    mongo: 'mongodb://localhost:27017/wee-blog',
    session: {
        secret: 'wee-blog',
        key: '12fa213edf2',
        maxAge: 2592000000
    }
};