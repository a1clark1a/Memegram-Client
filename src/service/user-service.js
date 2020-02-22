import config from "../config";

const UserService = {
  getUserByUserName(userName) {
    return fetch(`${config.API_ENDPOINT}/users/${userName}`).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  getListOfImageUploadedByUser(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}/memes`).then(res => {
      return !res.ok ? res.json().then(e => Promise(e)) : res.json();
    });
  }
};

export default UserService;
