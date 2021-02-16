let state;

function changeState(state = { count: 0 }, action) {
  switch (action.type) {

    case 'INCREASE_COUNT':
      return { count: state.count + 1 }

    default:
      return state;
  }
}

function dispatch(action){
state = changeState(state, action)
render()
}

function render(){
document.body.textContent = state.count
}


//if we want our page to display 0 when it first loads, we can just add below at the end of the file:
dispatch({ type: '@@INIT' })