import mongoose from "mongoose";


export const AboutMe = new mongoose.Schema({
    _id: {
        type: String,
        default: process.env.AUTHOR_ID,
      },
    name:String,
    profetion:String,
    description:{
        type:String,
        default:""
    },
    profileImage:String,
    links:{
        type:[
            {
                url:String,
                urlType:String
            }
        ],
        default:[]
    },
   footerLinks:{
    type:[
        {
            url:String,
            urlType:String
        }
    ],
    default:[]
}
})

export default mongoose.models.AboutMe || mongoose.model("AboutMe", AboutMe);