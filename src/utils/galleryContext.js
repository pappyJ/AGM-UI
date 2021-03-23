import React from "react";
import axios from "axios";

export const GalleryProvider = () => {
  const URL = `https://jln-api.herokuapp.com/api/v1/galleries?active=true`;

  const [gallery, setGalleryState] = React.useState([
    {
      title: "agriculture",
      description: "JLN services Are The Best",
      category: "agriculture",
      image: "/static/media/slide3.c90e7861.jpg",
      slug: "jjkwwj-1234",
      active: true,
    },
  ]);

  React.useEffect(() => {
    (async () => {
      await axios
        .get(URL)

        .then((res) => {
          if (res.data.message.toLowerCase() === "success") {
            setGalleryState(res.data.gallerys.gallerys);
          }
        });
    })();
  }, [URL]);

  return React.createContext({
    gallery,
  });
};
