import { all, call, put, takeLatest } from "redux-saga/effects";
import history from "../history";
import { AuthService, UserService } from "../services";
import { AuthTypes, UserTypes } from "../types";
const authService = new AuthService();
const userService = new UserService();

export function* login(action) {
  try {
    const res = yield call(authService.login, action.payload);
    if (res.error) {
      yield put({
        type: AuthTypes.LOGIN_ERROR,
        error: res.message,
      });
    } else {
      history.push("/");
      yield put({ type: AuthTypes.LOGIN_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}

export function* signup(action) {
  try {
    const res = yield call(authService.signup, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: AuthTypes.LOGIN_ERROR,
        error: res.message,
      });
    } else {
      history.push("/dash");
      yield put({ type: AuthTypes.SIGNUP_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}

export function* update(action) {
  try {
    const res = yield call(userService.update, action.payload);

    if (res.error) {
      yield put({
        type: AuthTypes.LOGIN_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.SIGNUP_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}

// export function* loading(action) {
//   yield put({
//     type: AuthTypes.TOGGLE_LOADING,
//   });
// }

export default function* allSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
    takeLatest(UserTypes.USER_REQUEST, update),
  ]);
}
