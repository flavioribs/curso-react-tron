import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import cadastroPessoaReducer from './cadastroPessoaReducer'

const rootReducer = combineReducers({
    cadastroPessoa: cadastroPessoaReducer
})

export default rootReducer