import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //jo subscribe kar raha hai
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, //jisko subscribe kara hai
        ref: "User"
    }
},
{timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema) 