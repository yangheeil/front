import axios from 'axios';

export default {
  actions: {
    signup(content, payload) {
      console.log(content, payload);
      axios
        .post('/sing_up', null, {
          parmas: {
            userId: payload.userId,
            password: payload.password,
            email: payload.email,
            userName: payload.userName,
            userNickname: payload.userNickname,
          },
        })
        .then((result) => {
          console.log(result);
        });
    },
    signin(content, payload) {
      console.log(content, payload);
      axios
        .post('/sing_in', null, {
          parmas: {
            userId: payload.userId,
            password: payload.password,
          },
        })
        .then((result) => {
          console.log(result);
        });
    },
  },
};
