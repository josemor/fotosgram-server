
import { Schema, Document, model } from 'mongoose';

const postSchema = new Schema({

    created:{
        type: Date
    },
    mensaje: {
        type: String
    },
    imgs: [{
        type: String
    }],
    coords: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [ true, 'Debe de existir una referencia a un usuario' ]
    }
});

interface Ipost extends Document {
    created: Date;
    mensaje: string;
    img: string[];
    coords: string;
    usuario: string;
}

postSchema.pre<Ipost>('save', function( next ){
    this.created = new Date();
    next();
});

export const Post = model<Ipost>('Post', postSchema);