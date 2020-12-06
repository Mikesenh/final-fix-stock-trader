//ToDo: Create const called state that is a data object{}
const state = {
  //ToDo: Create funds and set it to 10000
  funds: 10000,
  //ToDo: Create an array called stocks and leave it empty
  stocks: []
}

//ToDo: Create const called mutations that is a data object{}
const mutations = {
  //ToDo: Inside mutations object create a vuex method called 'BUY_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
  BUY_STOCK: (state, {stockId, quantity, stockPrice}) => {
    //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
    const record = state.stocks.find(element => element.id == stockId);
    //ToDo: If (record) then set record.quantity += quantity
    //ToDo: Else push id: stockId and quantity: quantity to state.stocks
    //ToDo: Set state.funds -= stockPrice * quantity
    if (record){
      record.quantity += quantity
    } else {
      state.funds -= stockPrice * quantity
    }
  },
  //ToDo: Inside mutations object create a vuex method called 'SELL_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
  SELL_STOCK: (state, {stockId, quantity, stockPrice}) => {
    //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
    const record = state.stocks.find(element => element.id == stockId)
    //ToDo: If (record.quantity > quantity) then set record.quantity -= quantity
    //ToDo: Else set state.stocks.splice(state.stocks.indexOf(record), 1)
    //ToDo: Set state.funds += stockPrice * quantity
    if(record.quantity > quantity){
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
      state.funds += stockPrice * quantity
    }
  },
  //ToDo: Inside mutations object create a vuex method called 'SET_PORTFOLIO' that takes two parameters (state, portfolio}
  SET_PORTFOLIO: (state, portfolio) => {
    //ToDo: Set state.funds equal to portfolio.funds
    state.funds = portfolio.funds
    //ToDo: Set state.stocks equal to portfolio.stockPortfolio if portfolio.stockPortfolio else [] (Use if else using ? and :)
    //condition ? exprIfTrue : exprIfFalse
    portfolio.stockPortfolio ? state.stocks = portfolio.stockPortfolio : state.stocks = []
  }
}

//ToDo: Create const called actions that is a data object()
const actions = {
  //ToDo: Create sellStock that passes ({commit}, order)
  sellStock: ({commit}, order) => {
    //  ToDo: Use the commit method passing 'SELL_STOCK' and order
    commit('SELL_STOCK', order)
  }
}

//ToDo: Create const called getters that is a data object{}
const getters = {
//ToDo: Inside getters object create stockPortfolio method that takes two parameters (state, getters)
stockPortfolio (state, getters) {
  //1.ToDo: return state.stocks.map() that is a pointer function that passes stock
  return state.stocks.map(stock => {
  //2.ToDo: Create const called record that is equal to getters.stocks.find(element => element.id == stock.id)
  const record = getters.stocks.find(element => element.id == stock.id);
    //3.ToDo: Return an object
      //ToDo: Set id to stock.id
      //ToDo: Set quantity to stock.quantity
      //ToDo: Set name to record.name
      //ToDo: Set price to record.price
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
        }
      });
    },
    //ToDo: Create funds method that passes state
    //ToDo: Return state.funds
    funds (state) {
      return state.funds;
      }
    };
//ToDo: Create funds method that passes state
  //ToDo: Return state.funds



export default {
  //ToDo: Export the const state, mutations, actions, and getters
  state,
  getters,
  mutations,
  actions
}
