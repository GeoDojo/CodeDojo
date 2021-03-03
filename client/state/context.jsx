import React, { createContext, useContext } from 'react';

const PromptContext = createContext();
const QuestionContext = createContext();
const ConsoleContext = createContext();
const CompletedAlgosContext = createContext();//so users can solve different algo each time
const test_casesContext = createContext();
const totalRowsContext = createContext(); 
const startGameContext = createContext();
const endGameContext = createContext();
const WinnerContext = createContext();
const HostContext = createContext();