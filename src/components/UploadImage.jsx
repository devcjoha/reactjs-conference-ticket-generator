import ImageUploading from "react-images-uploading";

const UploadImage = ({ currentAvatar, onImageUpdate }) => {
  const maxNumber = 1;
  // console.log("avatar", avatar);
  // const handleAvatarOnChange = (imageList) => {
  //   setAvatar(imageList);
  // };
  const handleAvatarOnChange = (imageList) => {
    onImageUpdate(imageList);
  };

  return (
    <ImageUploading
      single
      value={currentAvatar}
      onChange={handleAvatarOnChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          {imageList.length === 0 && (
            <button 
              type="button"
              className="drop-button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
          )}
          &nbsp;
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image["data_url"]} alt="" width="80" />
              <div className="image-item__btn-wrapper">
                <button type="button" onClick={() => onImageUpdate(index)}>Update</button>
                <button type="button" onClick={() => onImageRemove(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
};
export default UploadImage;
