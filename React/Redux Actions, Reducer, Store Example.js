console.clear()
//Actions
const createPolicy = (name, amount) => {
  return{
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amountToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountToCollect: amountToCollect
    }
  }
}

//Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
  switch(action.type){
    case 'CREATE_CLAIM':
      return [...oldListOfClaims, action.payload];
    default:
      return oldListOfClaims;
  }
    
}

const accounting = (bagOfMoney = 100, action) => {
  switch(action.type){
    case 'CREATE_CLAIM':
      return (bagOfMoney - action.payload.amountToCollect);
    case 'CREATE_POLICY':
      return (bagOfMoney + action.payload.amount);
    default:
      return bagOfMoney;
  }
    
}

const policies = (listOfPolicies = [], action) => {
  switch(action.type){
    case 'CREATE_POLICY':
      return [...listOfPolicies, action.payload.name];
    case 'DELETE_POLICY':
      return (listOfPolicies.filter((name) => name!==action.payload.name));
    default:
      return listOfPolicies;
  }
}

//Store
const { createStore, combineReducers } = Redux;

const Departments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})

const store = createStore(Departments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Alexa', 30));
store.dispatch(createPolicy('Alan', 40));
console.log(store.getState())

store.dispatch(createClaim('Alan', 20))
console.log(store.getState())
store.dispatch(deletePolicy('Alan'));
console.log(store.getState())