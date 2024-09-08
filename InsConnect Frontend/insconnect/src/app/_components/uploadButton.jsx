"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import Tesseract from "tesseract.js";
import { UploadButton } from "@uploadthing/react";
import { useState } from "react";
import axios from "axios";
export default function UploadButtonComponent(props) {
  const [verificationStatus , SetVerificationStatus] = useState(false)
  const [ocrText,setOcrText] = useState('');
  const [status, setStatus] = useState('')
  const verify = async()=>{
     const response = await axios.post("http://localhost:4000/verify",{ institute : props.institute , ocrText});
     setStatus(response.data.message)
  }
  return (
    <main className="flex  flex-col items-center justify-between p-4">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ",res[0].url);
          alert("Upload Completed");
          SetVerificationStatus(true)
          Tesseract.recognize(
            res[0].url,
            'eng',
          ).then(async({ data: { text } }) => {
            console.log(text.toLowerCase());
            setOcrText(text.toLowerCase())
            const response = await verify();
            console.log(response)
            SetVerificationStatus(false)
          })
          
        }}
      />
      { verificationStatus && <h3 className="font-BOLD text-white">Verifying</h3>}
      <h2>{status}</h2>
    </main>
  );
}