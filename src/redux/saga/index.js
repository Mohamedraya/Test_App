import { spawn } from "@redux-saga/core/effects";
import contactSaga from "./users-saga";


export default function* rootSaga() {
    yield spawn(contactSaga);
}