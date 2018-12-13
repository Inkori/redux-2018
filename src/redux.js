import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';

const createId = () => Math.random();

// const INIT = {
//   books: [],
//   readers: []
// };

//************ */middlewere

// const logger = function(store) {
//   return function(next) {
//     return function(action) {
//       console.log("-------store----", store.getState());
//       console.log(action);
//       next(action);
//     };
//   };
// };



/////////////////////

const readers = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_READERS":
      return [...state, { id: createId(), title: payload }];

    case "UPDATE_READERS":
      return state.map(item => {
        if (item.id === payload.id) {
          return { ...item, title: payload.newReaderName };
        }
        return item;
      });

    case "REMOVE_READERS":
      return state.filter(reader => reader.id !== payload);

    default:
      return state;
  }
};

const books = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_BOOK":
      return [...state, { id: createId(), title: payload }];

    case "UPDATE_BOOK":
      return state.map(item => {
        if (item.id === payload.id) {
          return { ...item, title: payload.bookName };
        }
        return item;
      });

    case "REMOVE_BOOK":
      return state.filter(reader => reader.id !== payload);

    default:
      return state;
  }
};

// const logger = createLogger({
	
	
// });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  books,
  readers
});

// const initialState = {
//   books: [],
//   readers: []
// };

const store = createStore(reducer, /* preloadedState, */ composeEnhancers( 
	 applyMiddleware(thunk, logger) //(reducer, initialState)
))

const addBook = bookName => ({ type: "ADD_BOOK", payload: bookName });
const removeBook = id => ({ type: "REMOVE_BOOK", payload: id });
const updateBook = (id, bookName) => ({
  type: "UPDATE_BOOK",
  payload: { id, bookName }
});
const addReaders = readerName => ({ type: "ADD_READERS", payload: readerName });
const removeReaders = id => ({ type: "REMOVE_READERS", payload: id });
const updateReaders = (id, newReaderName) => ({
  type: "UPDATE_READERS",
  payload: { id, newReaderName }
});

store.subscribe(() => {
  console.log("Form subscribe", store.getState());
});

console.log("---- initial state");

console.log(store.getState());

console.log("---------- add");
store.dispatch(addBook("Book 1"));
store.dispatch(addBook("Book 2"));
store.dispatch(addBook("Book 3"));
store.dispatch(addBook("Book 4"));
store.dispatch(addBook("Book 5"));

console.log("------- update");

store.dispatch(updateBook(store.getState().books[0].id, "Somsing book"));

console.log("--------- remove");

store.dispatch(removeBook(store.getState().books[0].id));
store.dispatch(removeBook(store.getState().books[0].id));
store.dispatch(removeBook(store.getState().books[0].id));

// store.dispatch(action);
// store.dispatch(action);
// store.dispatch(action);
// store.dispatch(action);

console.log("----- add reader");

store.dispatch(addReaders("Book 1"));
store.dispatch(addReaders("Book 2"));
store.dispatch(addReaders("Book 3"));

console.log("----- update reader");

store.dispatch(
  updateReaders(store.getState().readers[0].id, "Somsing readers")
);

console.log("----- remove reader");

store.dispatch(removeReaders(store.getState().readers[0].id));
store.dispatch(removeReaders(store.getState().readers[0].id));
