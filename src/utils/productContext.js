import React from "react";
import axios from "axios";

export const ProductProvider = (name) => {
  const [product, setProduct] = React.useState({
    name: "livestock",
    description: "animal fo roads",
    business: "602bf21687335b0015c49685",
    image: "/static/media/Picture1.ed0e85f1.png",
    branches: ["Fish Farm", "Poultry", "Pig Farm", "Snail", "Goats"],
  });

  // api call with axios in useEffect hook

  const URL = `https://jln-api.herokuapp.com/api/v1/products/${name}`;

  React.useEffect(() => {
    (async () => {
      await axios
        .get(URL)

        .then((res) => {
          if (res.data.message.toLowerCase() === "success") {
            setProduct(res.data.product);
          }
        });
    })();
  }, [URL]);

  return React.createContext({
    product,
  });
};
