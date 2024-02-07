const db = require('../db');

const getLoggings = async () => {
    const dbInfo = await db.watchLoggings();
    return dbInfo;
}

const saveLogging = async (req, action) => {
    let logging = {
        action: action,
        header: JSON.stringify(req.headers),
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    }

    await db.saveLogging(logging);
}

module.exports = { getLoggings, saveLogging }