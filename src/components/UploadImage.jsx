import ImageUploading from "react-images-uploading";
import iconUpload from "../assets/icon-upload.svg";

const MAX_SIZE_IMAGE = 2097152; //Bytes
const UploadImage = ({ currentAvatar, onImageUpdate, errorState }) => {
  const maxNumber = 1;
  // console.log("avatar", avatar);

  const handleAvatarOnChange = (imageList) => {
    if (imageList.length > 0) {
      const imageFile = imageList[0].file;
      if (imageFile && imageFile.size > MAX_SIZE_IMAGE) {
        // const sizeMB = (imageFile.size / MAX_SIZE_IMAGE).toFixed(2);
        const errorMsg = `File to large. Please upload a photo under 2MB.`; // ${sizeMB}
        onImageUpdate(currentAvatar, errorMsg);   
        return;
      }
    }
    onImageUpdate(imageList, "");
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
        <div 
        className={!errorState ? "upload__image- flex flex-col items-center justify-center w-full h-28 border border-gray-400 rounded-lg  focus:ring-gray-300 focus:border-gray-200 transition duration-100"
        : "upload__image- flex flex-col items-center justify-center w-full h-28 border border-red-500 rounded-lg  focus:ring-gray-300 focus:border-gray-200 transition duration-100"}>
       {imageList.length === 0 && (
            <button
              type="button"
              className="drop-button text-white absolute cursor-pointer w-88 h-26 flex flex-col justify-center border border-dashed rounded-lg border-gray-400 focus:ring-gray-300 focus:border-gray-200 transition duration-200 ease-in-out"
              style={isDragging ? { color: "red" } : undefined}
         
              onClick={onImageUpload}
              {...dragProps}
            >
              <div className=" relative text-gray-400 flex flex-col items-center">
                <div className="bg-gray-600 border border-gray-500 rounded-md w-9 h-9 flex items-center justify-center focus:ring-1 focus:outline-2 hover:bg-gray-300 transition duration-200">
                <img
                  className="flex border-transparent w-6 rounded-md"
                  src={iconUpload}
                  alt="icon-upload"
                />
                </div>
              </div>
                <label className="cursor-pointer pt-4 text-[.8rem] text-gray-400 ">
              Drag and drop or click to upload
              </label>
            </button>
          )}
          &nbsp;
          {imageList.map((image, index) => (
            <div 
              key={index} 
              className="image-item absolute flex flex-col w-88 h-26 items-center justify-center space-y-2 border border-gray-400 rounded-lg border-dashed ">
              <img
                key={index}
                className="flex w-15 h-14 border rounded-md border-transparent object-cover"
                src={image["data_url"]}
                alt=""
                width="60"
              />
              <div className="image-item__btn-wrapper ">
                <button
                  className="ml-2 bg-[hsla(0,0%,100%,0.280)] text-[.7rem] pl-1.5 pr-1.5 font-extralight border-transparent rounded-xs  hover:hover:bg-gray-300 hover:text-black hover:font-bold cursor-pointer"
                  type="button"
                  onClick={() => onImageUpdate(index)}
                >
                  Change Image
                </button>
                <button
                  className="ml-6 bg-[hsla(0,0%,100%,0.280)] text-[.7rem] pl-1.5 pr-1.5 font-extralight border-transparent rounded-xs focus:ring-1 focus:outline-1 hover:hover:bg-gray-300 hover:text-black hover:font-bold cursor-pointer"
                  type="button"
                  onClick={() => onImageRemove(index)}
                >
                  Remove Image
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
};
export default UploadImage;
