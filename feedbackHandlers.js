const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks)
};

const createFeedback = (req, res) => {
  const {sender, message, rating} = req.body;
  const newFeedback = Feedback.addOne(sender, message, rating);
  if (newFeedback) {
    res.json(newFeedback);
  } else {
    res.status(500).json({message: "Invalid data"});
  }
};

const getFeedbackById = (req, res) => {
  const id = req.params.feedbackId;
  const feedback = Feedback.findById(id);
  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({message: "Not found"});
  }
};

const updateFeedback = (req, res) => {
  const id = req.params.feedbackId;
  const {sender, message, rating} = req.body;
  const updatedFeedback = Feedback.updateById(id, {sender, message, rating});
  if (updatedFeedback) {
    res.json(updatedFeedback);
  } else {
    res.status(404).json({message: "Not found"});
  }
};

const deleteFeedback = (req, res) => {
  const id = req.params.feedbackId;
  const deleted = Feedback.deleteById(id);
  if (deleted) {
    res.json({message: "Feedback deleted"});
  } else {
    res.status(404).json({message: "Not found"})
  }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
