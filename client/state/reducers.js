export const PromptInitalState = {
    prompt: '',
    showPrompt: false,
};

export const PromptReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_PROMPT':
        return {
          ...state,
          prompt: action.payload.prompt,
        };
      case 'SHOW_PROMPT':
        return {
          ...state,
          showPrompt: true,
        };
  };
}

export const QuestionState = {
    question: '',
    showQuestion: false,
};

export const QuestionReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_QUESTION':
        return {
          ...state,
          question: action.payload.question,
        };
      case 'SHOW_QUESTION':
        return {
          ...state,
          showQuestion: true,
        };
  };
}

export const ConsoleState = {
    console: '',
    showConsole: false,
};

export const ConsoleReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_CONSOLE':
        return {
          ...state,
          console: action.payload.console,
        };
      case 'SHOW_CONSOLE':
        return {
          ...state,
          showConsole: true,
        };
  };
}

export const winnerState = {
    winner: false
};

export const winnerReducer = (state, action) => {
  switch (action.type) {
      case 'UPDATE_WINNER':
        return {
          ...state,
          winner: action.payload.winner,
    }
  }
}

export const hostState = {
    host: false
};

export const hostReducer = (state, action) => {
  switch (action.type) {
      case 'UPDATE_HOST':
        return {
          ...state,
          host: action.payload.host,
    }
  }
}

export const hostState = {
    host: false
};

export const hostReducer = (state, action) => {
  switch (action.type) {
      case 'UPDATE_HOST':
        return {
          ...state,
          host: action.payload.host,
    }
  }
}

export const startGameState = {
    startGame: false
};

export const startGameReducer = (state, action) => {
  switch (action.type) {
      case 'UPDATE_STARTGAME':
        return {
          ...state,
          startGame: action.payload.startGame,
    }
  }
}

export const endGameState = {
    endGame: false
};

export const endGameReducer = (state, action) => {
  switch (action.type) {
      case 'UPDATE_ENDGAME':
        return {
          ...state,
          endGame: action.payload.endGame,
    }
  }
}

// export const CompletedAlgosInitialState = (state, action) => {
//     switch (action.type)
// }