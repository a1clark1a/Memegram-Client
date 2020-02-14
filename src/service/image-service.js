import config from "../config";

//Functions to communicate with the API
const ImageService = {
  getListOfImage() {
    return fetch(`${config.API_ENDPOINT}/v2/list?limit=16`).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  }
};

export default ImageService;
