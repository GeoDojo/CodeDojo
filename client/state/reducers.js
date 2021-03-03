export const initialAppState = {
    prompt: ' dummy prompt ',
    function:  'dummy function',
    console: 'dummy console',
    winner: 'dummy winner',
    completedAlgos: {},
    totalRows: 0,
    test_cases: [],
    username: '',
    userFxn: '',
    time: '',
    // endGame: FALSE,
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
        case 'UPDATE_CONSOLE':
      return {
        ...state,
        console: action.payload.console,
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
        completedAlgos: action.payload.totalRows,
      };
    }
    switch (action.type) {
        case 'UPDATE_TESTCASES':
      return {
        ...state,
        testCases: action.payload.testCases,
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
        time: action.payload.time,
      };
    }
}

// completedAlgos: {},
//     totalRows: 0,
//     test_cases: [],
//     username: '',
//     userFxn: '',
//     time: '',
//     endGame: FALSE,