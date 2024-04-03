import axios from 'axios';
import { userActions } from '../reducers/user';
import { BASE_URL } from '../helper';
export const getUser = () => {
  return async (dispatch) => {
    const getUserData = async () => {
      const response = await axios.get(`${BASE_URL}/api/user`);
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data.user;
    };
    try {
      dispatch(userActions.getUserRequest());

      const userData = await getUserData();
      dispatch(userActions.getUserSuccess(userData));
    } catch (err) {
      dispatch(userActions.getUserFailure(err.response.data.message));
    }
  };
};
