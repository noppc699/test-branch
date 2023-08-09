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
  // errors is an array of validation errors
  if (errors.length > 0) {
    console.log("validation failed. errors: ", errors);
  } else {
    console.log("validation succeed");
  }
});

// validateOrReject(post).catch((errors) => {
//   console.log("Promise rejected (validation failed). Errors: ", errors);
// });
// // or
// async function validateOrRejectExample(input) {
//   try {
//     await validateOrReject(input);
//   } catch (errors) {
//     console.log(
//       "Caught promise rejection (validation failed). Errors: ",
//       errors
//     );
//   }
// }
