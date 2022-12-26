// // TODO: Sesuaikan dengan API yang digunakan
// import mediaApi from "lib/api/media";

export const handleErrorImage = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  const img = e.currentTarget;
  // @ts-ignore
  e.target.onerror = null;
  img.src = process.env.PUBLIC_URL + "/images/no-image.png";
};

// export const handleUploadImage = async (image: any, bucket?: string) => {
//   if (image && typeof image === "object") {
//     const res = await mediaApi.uploadSingle(image, bucket);

//     if (res.status === 200) {
//       const { data } = res.data;

//       return data?.image?.url;
//     }
//   }

//   if (image && typeof image === "string") {
//     return image;
//   }

//   return "";
// };

// const image = {} ;

// export default image;
