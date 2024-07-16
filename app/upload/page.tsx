"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface CloudinaryResult{
    public_id:string
}

const UploadPage = () => {
    const [publicId,setPublicId] = useState('')
  return (
    //to get pxjibhkg from cloudinary
    <>
    {publicId && <CldImage src={publicId} width={280} height={180} alt="photo"/>}
    <CldUploadWidget uploadPreset="pxjibhkg" options={
        {sources:['local'],
            multiple:false,
            maxFiles:5,
            styles:{
                
            }
        }
    } onSuccess={(result,widget) =>
    
    {if(result.event !== 'success') return
        const info =result.info as CloudinaryResult
        setPublicId(info.public_id)}
     }>
        {/* to see screen foto */}
        
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
    </>
  );
};

export default UploadPage;
