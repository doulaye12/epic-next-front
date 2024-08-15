"use server";
import qs from "qs";

export async function updateProfileAction(
  userId: string,
  prevState: any,
  formData: FormData
) {
   const rawFormData = Object.fromEntries(formData);

   const query = qs.stringify({
      populate: "*",
   });

   const payload = {
      firstName: rawFormData.firstName,
      lastName: rawFormData.lastName,
      bio: rawFormData.bio
   }

   console.log("updatedProfileAction", userId);
   console.log("########################");
   console.log("payload", payload);
   console.log("########################");
   
   return {
      ...prevState,
      message: "Profile updated",
      data: payload,
      strapiErrors: null
   }
   
}
