// src/config/aws.js
// AWS client placeholder. Use if you store media in S3.

const AWS = require('aws-sdk');

const region = process.env.AWS_REGION || 'us-east-1';
AWS.config.update({ region });

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
});

module.exports = { s3 };
