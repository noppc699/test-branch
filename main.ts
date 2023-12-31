import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsString,
} from "class-validator";

export class Post {
  @IsInt()
  rating: number;

  @IsEmail()
  email: string;

  @IsString()
  name: string;
}

let post = new Post();
post.rating = 10.1; // should not pass

validate(post).then((errors) => {
  if (errors.length > 0) {
    console.log("validation failed. errors: ", errors);
  } else {
    console.log("validation succeed");
  }
});


// }
