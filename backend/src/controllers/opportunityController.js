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
  res.json({
    message: "Create opportunity controller working",
  });
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
