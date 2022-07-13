import { all } from "@redux-saga/core/effects";

import authSaga from "./auth/saga";
import movieSaga from "./movie/saga";
import librarySaga from "./library/saga";

export default function* rootSaga() {
  yield all([
    ...authSaga, 
    ...movieSaga,
    ...librarySaga
])}
