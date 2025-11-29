const Community = require("../models/community.model");

// @desc Get all communities
// @route GET /api/community
exports.getCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.status(200).json({ success: true, data: communities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Create new community
// @route POST /api/community
exports.createCommunity = async (req, res) => {
  try {
    const community = await Community.create(req.body);
    res.status(201).json({ success: true, data: community });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get single community
// @route GET /api/community/:id
exports.getCommunityById = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community)
      return res.status(404).json({ success: false, message: "Community not found" });

    res.status(200).json({ success: true, data: community });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Update community
// @route PUT /api/community/:id
exports.updateCommunity = async (req, res) => {
  try {
    const community = await Community.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!community)
      return res.status(404).json({ success: false, message: "Community not found" });

    res.status(200).json({ success: true, data: community });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete community
// @route DELETE /api/community/:id
exports.deleteCommunity = async (req, res) => {
  try {
    const community = await Community.findByIdAndDelete(req.params.id);
    if (!community)
      return res.status(404).json({ success: false, message: "Community not found" });

    res.status(200).json({ success: true, message: "Community deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
