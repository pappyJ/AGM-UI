import React from "react";
import axios from "axios";
import Slide from "../images/slide3.jpg";

export const LayoutProvider = () => {
  const [layout, setLayout] = React.useState({
    offers: ["good house", "machines"],
    banner: [
      {
        image:
          "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "JLN BUILDERS NIG LTD",
        description: "JLN Builders",
      },
    ],
    title: "jln",
    bannerSecondary: Slide,
    layoutDescription: "jln is good",
    footerDescription: "jln footer",
  });

  // api call with axios in useEffect hook

  const URL = "https://jln-api.herokuapp.com/api/v1/";

  React.useEffect(() => {
    (async () => {
      await axios
        .get(`${URL}layouts`)

        .then((res) => {
          if (res.data.status.toLowerCase() === "success") {
            setLayout(res.data.layouts.layouts[0]);
          }
        });
    })();
  }, []);

  return React.createContext({
    layout,
  });
};
