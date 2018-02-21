import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
    facaAlgumaCoisa, 
    facaAlgumaCoisa2 
} from '../../actions/cadastroPessoaActions'

class Index extends Component {

    constructor(props) {
        super(props)
        
    }

    componentWillMount() {
        //this.props.facaAlgumaCoisa()

        setTimeout(() => {
            this.props.facaAlgumaCoisa2()
        }, 5000)
    }

    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                <p>{this.props.cadastroPessoa.facaAlgumaCoisa}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({ cadastroPessoa: state.cadastroPessoa })
const mapDispatchToProps = dispatch => bindActionCreators({ 
    facaAlgumaCoisa, facaAlgumaCoisa2 }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
