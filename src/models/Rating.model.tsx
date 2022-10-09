import { UserModel } from "./User.model";

export interface RatingModel {
    ratingId: number;
    rating: number;
    votes: number;
    ratingUser: UserModel;
}