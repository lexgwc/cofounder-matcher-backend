import mongoose from "mongoose";

const Schema = mongoose.Schema

const ObjectId = mongoose.Types.ObjectId

const locationSchema = new Schema({
  country: {
    type: String,
  },
  state: {
    type: String
  },
  city: {
    type: String
  }
})

const socialMediaSchema = new Schema({
  linkedinUrl: {
    type: String
  },
  twitterUrl: {
    type: String
  },
  instagramUrl: {
    type: String
  }
})

const profileSchema = new Schema({
  userId: {
    type: {
      type: ObjectId,
      ref: 'user',
      required: true
    }
  },
  email: {
    type: String,
    required: true
  },
  lastSeen: {
    type: Date
  },
  aboutMe: {
    type: String,
    required: true
  },
  connectionInterest: {
    type: String,
    required: true
  },
  industryInterests: {
    type: [String],
    required: true
  },
  interestedInBeingACofounder: {
    type: Boolean,
    required: true
  },
  currentSchool: {
    type: String
  },
  programType: {
    type: String
  },
  birthDate: {
    type: Date
  },
  profilePicture: {
    type: String
  },
  previousEducation: {
    type: String
  },
  employmentHistory: {
    type: String
  },
  schedulingUrl: {
    type: String
  },
  hasIdea: {
    type: Boolean
  },
  potentialIdeas: {
    type: [String]
  },
  areasOfResponsibility: {
    type: [String]
  },
  cofounderDesiredQualities: {
    type: [String]
  },
  technical: {
    type: Boolean
  },
  impressiveAccomplishmnet: {
    type: String,
  },
  location: {
    type: locationSchema
  },
  socialMedia: {
    type: socialMediaSchema
  }
}, {timestamps: true})

const Profile = mongoose.model('Profile', profileSchema)

export default Profile