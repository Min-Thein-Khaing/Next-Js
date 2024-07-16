import React from "react";

interface Props{
    params:{id:number,photoId:number}
}

const UserPhotoId = ({params:{id,photoId}}:Props) => {
  return <div>UserPhotoId {id} photo {photoId} </div>;
};

export default UserPhotoId;
