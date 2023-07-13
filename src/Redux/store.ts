import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./Reducers/_root.reducer";
import rootSaga from "./Sagas/_root.saga";


const sagaMiddleware : SagaMiddleware = createSagaMiddleware();

const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware,
      logger
    ]
    : [sagaMiddleware];

export const store = createStore(
        rootReducer,
        applyMiddleware(...middlewareList)
    );

    sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch