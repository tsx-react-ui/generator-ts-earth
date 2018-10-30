import * as React from 'react'
import <%= upperCaseName %> from '../src/index'
import './index.scss'

interface StateTypes {
    content: React.ReactNode
}

export default class App extends React.Component<{}, StateTypes> {
    constructor(args, context){
        super(args);

        this.state = {
            content: 'Click and change color 😜'
        }
    }


    render() {
        return (
            <section className="container">
                <<%= upperCaseName %> {...this.state} />
            </section>
        )
    }
}
