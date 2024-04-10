import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    _id:{
      type:String,
      default:process.env.AUTHOR_ID  
    },
  projectList :[{
    title:String,
    subtitle:String,
    description:{
        type:String,
        default:"",
    },
    image:String,
    linkUrl:String
  }]
})

export default mongoose.models.projects  || mongoose.model("projects",ProjectSchema)