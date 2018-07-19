'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || "mongodb://jpmchase:chase123@ds163650.mlab.com:63650/jesper-first-mlab-db";
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/chase-schedule-test';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

