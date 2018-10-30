import * as React from 'react'
import <%= upperCaseName %> from '../src/index'
import './index.scss'

interface StateTypes {
    content: React.ReactNode;
    styles: string;
}
export default class App extends React.Component<{}, StateTypes> {

    constructor(args, context){
        super(args);

        this.state = {
            content: 'Click and change color 😜',
            styles: 'active'
        }

        this.handleAc = this.handleAc.bind(this);
    }

    handleAc() {
        this.setState({
            styles: this.state.styles ? '' : 'active'
        })
    }


    render() {
        return (
            <section className="container">
                <<%= upperCaseName %> {...this.state} handle={this.handleAc} />
            </section>
        )
    }
}
