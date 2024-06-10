import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
    const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
//   Use effect recibe 2 parametros, el primero es un callback
// que llama el codigo que queremos ejecutar
// El segundo es una lista de dependencias
// Se manda vacio si se quiere que se ejecute solo la primera vez
    useEffect(() => {
        getImages();
    }, []);
    //   useEffect( () => {
//     getGifs(category).then(newImages => setImages(newImages));
//   }, []);
  return {
    images,
    isLoading
  }
}

