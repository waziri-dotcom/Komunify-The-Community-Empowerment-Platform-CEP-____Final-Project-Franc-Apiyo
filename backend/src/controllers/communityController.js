const Community = require('../models/Community');

exports.createCommunity = async (req, res, next) => {
  try {
    const data = req.body;
    const community = await Community.create(data);
    res.status(201).json({ community });
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    const communities = await Community.find().sort({ impactScore: -1 }).limit(50);
    res.json({ communities });
  } catch (err) {
    next(err);
  }
};
