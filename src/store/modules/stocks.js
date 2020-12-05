import stocks from '../../data/stocks';

//ToDo: Create const called state that is a data object{}
const state = {
  //ToDo: Create an array called stocks inside the state object
  stocks: []
}

//ToDo: Create const called mutations that is a data object{}
const mutations = {
//ToDo: Inside mutations object create a vuex method called 'SET_STOCKS' that takes two parameters (state, stocks)
SET_STOCKS: (state, stocks) => {
  //ToDo: Inside 'SET_STOCKS' set state.stocks equal to stocks
  state.stocks = stocks
},
//ToDo: Inside mutations object create a vuex method called 'RND_STOCKS' that takes one parameter (state)
RND_STOCKS: (state) => {
  //ToDo: Inside 'RND_STOCKS' you will create a state.stocks.forEach that is a pointer (arrow) function that passes stock as a parameter
  state.stocks.forEach((state) => {
    //ToDo: Set stock.price equal to Math.round() passing stock.price * (1 + Math.random() - 0.5)
    stock.price = stock.price * (1 + Math.random() - 0.5)
  }) 
}


}



const actions = {
  // Note: Use buyStock as reference for the comments below within actions
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  //ToDo: Create initStocks that is a pointer function that passes {commit}
  initStocks: ({ commit }, stocks) => {
    //ToDo: Use the commit method passing 'SET_STOCKS'  and stocks
    commit('SET_STOCKS', stocks)
  },

  //ToDo: Create randomizeStocks that is a pointer function that passes {commit}
  randomizeStocks: ({ commit }) => {
    //ToDo: Use the commit method passing 'RND_STOCKS'
    commit('RND_STOCKS')
  }
};

//ToDo: Create const called getters that is a data object{}
const getters = {
  //ToDo: Inside getters object create stocks that is a pointer function that passes the state
  Stocks: (state) => {
    //ToDo: Return state.stocks
    return state.stocks
  }
}


export default {
  //ToDo: Export the const state, mutations, actions, and getters
  state,
  getters,
  mutations,
  actions
};
