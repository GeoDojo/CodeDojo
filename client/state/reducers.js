export const initialAppState = {
    prompt: 'dummy prompt',
    function:  'dummy function',
    winner: 'dummy winner',
    completedAlgos: {},
    totalRows: 0,
    test_cases: ["dummy test case 1", "dummy test case 2"],
    username: '',
    userFxn: '',
    time: '',
    endGame: "",
    // algoID: '',
    // algoName: '',
    // algoStart: FALSE,
    // algoPrompt: '',
};

//from react hook, return hook which is a general state and general dispatch (is reducer)
export const appReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PROMPT':
      return {
        ...state,
        prompt: action.payload.prompt,
      };
    }
    switch (action.type) {
        case 'UPDATE_FUNCTION':
      return {
        ...state,
        function: action.payload.function,
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
        completedAlgos: action.payload.completedAlgos,
      };
    }
    switch (action.type) {
        case 'UPDATE_TOTALROWS':
      return {
        ...state,
        totalRows: action.payload.totalRows,
      };
    }
    switch (action.type) {
        case 'UPDATE_TEST_CASES':
      return {
        ...state,
        test_cases: action.payload.test_cases,
      };
    }
    switch (action.type) {
        case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.payload.userName,
      };
    }
    switch (action.type) {
        case 'UPDATE_TIME':
      return {
        ...state,
        time: action.payload.time,
      };
    }
    switch (action.type) {
        case 'UPDATE_EndGame':
      return {
        ...state,
        endGame: action.payload.endGame,
      };
    }
}

