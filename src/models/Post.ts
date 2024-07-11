import mongoose, { Document, Schema } from 'mongoose';

export interface IPost extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  date: Date;
  imageUrl: string;
}

const PostSchema: Schema = new Schema({
  date: { type: Date },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  imageUrl: {type: String, required: true },
});

export default mongoose.model<IPost>('Post', PostSchema);
