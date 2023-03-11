const mongoose = require("mongoose");
const validator = require("validator");
const topicSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: [true, "Please provide a name!"],
  },
    description: {
    type: String,
    },
    subject: {
    type: String,
    },
    standard: {
    type: String,
    },
    resources: {
    video: {
    type: String,
    },
    pdf: {
    type: String,
    }
    },
    teacher: {
    type: String,
    },
    stars: {
    type: Number,
    default: 0,
    }
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
