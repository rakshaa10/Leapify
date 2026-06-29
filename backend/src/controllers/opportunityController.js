const prisma = require("../lib/prisma");

const getAllOpportunities = async (req, res) => {
  res.json({
    message: "Get all opportunities controller working",
  });
};

const getOpportunityById = async (req, res) => {
  res.json({
    message: "Get opportunity by id controller working",
  });
};

const createOpportunity = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      deadline,
      registrationLink,
      bannerUrl,
    } = req.body;

    const opportunity = await prisma.opportunity.create({
      data: {
        title,
        description,
        category,
        deadline: new Date(deadline),
        registrationLink,
        bannerUrl,
        organizerId: req.user.id,
      },
    });

    res.status(201).json({
      message: "Opportunity created successfully",
      opportunity,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateOpportunity = async (req, res) => {
  res.json({
    message: "Update opportunity controller working",
  });
};

const deleteOpportunity = async (req, res) => {
  res.json({
    message: "Delete opportunity controller working",
  });
};

const getMyOpportunities = async (req, res) => {
  res.json({
    message: "Get my opportunities controller working",
  });
};

module.exports = {
  getAllOpportunities,
  getOpportunityById,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
  getMyOpportunities,
};
