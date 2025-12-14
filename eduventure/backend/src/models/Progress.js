const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProgressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  quest: {
    type: Schema.Types.ObjectId,
    ref: 'Quest',
  },
  activity: {
    type: Schema.Types.ObjectId,
    ref: 'Activity',
  },
  progressPercentage: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Create a compound index to ensure one progress record per user-subject-quest-activity combo
ProgressSchema.index(
  { user: 1, subject: 1, quest: 1, activity: 1 },
  { unique: true }
);

module.exports = mongoose.model('Progress', ProgressSchema);
