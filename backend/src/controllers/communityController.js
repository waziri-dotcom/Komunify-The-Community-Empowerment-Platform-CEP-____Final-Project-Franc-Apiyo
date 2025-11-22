// src/controllers/communityController.js
const Community = require('../models/Community');

async function listCommunities(req, res, next) {
  try {
    const { q, region, tag, limit = 50 } = req.query;
    const filter = {};
    if (region) filter.region = region;
    if (tag) filter.tags = tag;
    if (q) filter.name = { $regex: q, $options: 'i' };

    const communities = await Community.find(filter).limit(parseInt(limit)).sort({ impactScore: -1 });
    res.json(communities);
  } catch (err) { next(err); }
}

async function createCommunity(req, res, next) {
  try {
    const { name, description, region, tags } = req.body;
    const community = await Community.create({
      name,
      description,
      region,
      tags,
      admin: req.user._id
    });
    res.status(201).json(community);
  } catch (err) { next(err); }
}

async function joinCommunity(req, res, next) {
  try {
    const { id } = req.params;
    const community = await Community.findById(id);
    if (!community) return res.status(404).json({ error: 'Community not found' });

    if (!community.members.includes(req.user._id)) {
      community.members.push(req.user._id);
      await community.save();
    }
    res.json(community);
  } catch (err) { next(err); }
}

module.exports = { listCommunities, createCommunity, joinCommunity };
