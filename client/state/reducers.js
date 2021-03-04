export const initialAppState = {
    prompt: '',
    function:  '',
    winner: 'dummy winner',
    completedAlgos: {},
    totalRows: 0,
    submissionTestStatus: "",
    currentPlayers: {},
    userFxn: '',
    time: '',
    endGame: '',
    test_cases: [],
    roomNumber: 123,
    currentPlayer: '',
    algoName: '',
    // algoStart: FALSE,
    // algoPrompt: '',
};

//from react hook, return hook which is a general state and general dispatch (is reducer)
export const appReducer = (state, action) => {
  switch (action.type) {
      case 'SET_PLAYER':
    return {
      ...state,
      currentPlayer: action.payload,
    };
  }
  switch (action.type) {
        case 'UPDATE_PROMPT':
      return {
        ...state,
        prompt: action.payload,
      };
    }
    switch (action.type) {
        case 'UPDATE_FUNCTION':
      return {
        ...state,
        function: action.payload,
      };
    }
    switch (action.type) {
      case 'UPDATE_USERFXN':
    return {
      ...state,
      userFxn: action.payload,
    };
  }
    switch (action.type) {
        case 'UPDATE_WINNER':
      return {
        ...state,
        winner: action.payload.winner,
      };
    }
    switch (action.type) {
        case 'UPDATE_COMPLETEDALGOS':
      return {
        ...state,
        completedAlgos: action.payload,
      };
    }
    switch (action.type) {
        case 'UPDATE_TOTALROWS':
      return {
        ...state,
        totalRows: action.payload,
      };
    }
    switch (action.type) {
        case 'UPDATE_SUBMISSIONTESTSTATUS':
      return {
        ...state,
        submissionTestStatus: action.payload,
      };
    }
    switch (action.type) {
        case 'UPDATE_USERNAME':
      return {
        ...state,
        currentPlayers: action.payload,
      };
    }
    switch (action.type) {
        case 'UPDATE_TIME':
      return {
        ...state,
        time: action.payload,
      };
    }
    switch (action.type) {
        case 'UPDATE_EndGame':
      return {
        ...state,
        endGame: action.payload,
      };
    }
    switch (action.type) {
      case 'STORE_TEST_CASES':
    return {
      ...state,
      test_cases: action.payload,
    };
  }
  switch (action.type) {
    case 'UPDATE_ALGONAME':
    return {
      ...state,
      algoName: action.payload,
    };
  }
  switch (action.type) {
    case 'ADD_USER':
    const newState = {...state}
    newState.currentPlayers[action.payload[0]] = action.payload[[1]]
    return newState;
  }
}

