import { useEffect, useState } from "react";
import { Image } from "../models/Image";

const ImageCard = () => {
  const [image, setImage] = useState<Partial<Image>>({});
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random?client_id=G3Qi3kEiHFEBHgPPR5mlI78Ctlea8XMr2o-AHtECbeQ`
    )
      .then((d) => d.json())
      .then((d) => setImage(d as Partial<Image>));
    console.log(image);
  }, [image]);
  return <div>{JSON.stringify(image)}</div>;
};

export default ImageCard;
