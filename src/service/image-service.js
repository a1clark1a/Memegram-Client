import config from "../config";
import TokenService from "./token-service";

//Functions to communicate with the API
const ImageService = {
  getListOfImage() {
    return fetch(`${config.API_ENDPOINT}/memes`).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  getClickedImage(imageId) {
    return fetch(`${config.API_ENDPOINT}/memes/${imageId}`).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  getCommentsForClickedImage(imageId) {
    return fetch(`${config.API_ENDPOINT}/memes/${imageId}/comments`).then(
      res => {
        return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
      }
    );
  },
  getImagePoster(userId) {
    return fetch(`${config.API_ENDPOINT}/memes/${userId}/users`).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  postComment(imageId, comment) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        memes_id: imageId,
        comment
      })
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  updateImage(imageId, newImage) {
    return fetch(`${config.API_ENDPOINT}/memes/${imageId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newImage)
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  }
};

export default ImageService;
