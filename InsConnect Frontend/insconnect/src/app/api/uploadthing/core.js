import { createUploadthing } from "uploadthing/next";
const f = createUploadthing();
const fs = require('fs');
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async (req) => {
      // This code runs on your server before upload
       
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: 2 };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("file url", file);
      // async function query(url) {
      //   const response = await fetch(url);
      //   if (!response.ok) {
      //       throw new Error(`Failed to fetch the image. Status: ${response.status}`);
      //   }

      //   const data = await response.buffer();
      //   const apiresponse = await fetch(
      //     "https://api-inference.huggingface.co/models/jinhybr/OCR-Donut-CORD",
      //     {
      //       headers: { Authorization: "Bearer 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" },
      //       method: "POST",
      //       body: data,
      //     }
      //   );
      //   const result = await apiresponse.json();
      //   return result;
      // }
      // query(file.url).then((response) => {
      //   console.log(JSON.stringify(response));
      // });
    }),
};
 
