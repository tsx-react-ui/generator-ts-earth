/**
 * Created by <%= author %><<%= email %>>.
 * ComponentName <%= upperCaseName %>
 * Desc <%= desc %>
 * GroupName <%= groupName %>
 */

import * as React from 'react'
import classNames from 'classnames'
import './index.scss'


/**
 * @class <%= upperCaseName %>
 * @extends React.Component
 * @desc <%= upperCaseName %> Component for mobile
 */

interface <%= upperCaseName %>Props {
    content: React.ReactNode;
}
interface DefaultProps {
    styles?: React.CSSProperties;
}


interface <%= upperCaseName %>States {
    isActive: boolean;
}

export default class <%= upperCaseName %> extends React.Component <<%= upperCaseName %>Props & DefaultProps, <%= upperCaseName %>States> {

    static defaultProps: DefaultProps = {};

    /**
     * @constructor
     */
    constructor(props: <%= upperCaseName %>Props & DefaultProps) {
        super(props);

        this.state = {
            isActive: false
        }

        this.handle = this.handle.bind(this);
    }

    componentDidMount(): void {
        console.log('componentDidMount');
    }

    componentWillUnmount(): void {
        console.log('componentWillUnmount');
    }

    handle(): void{
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render(): JSX.Element {

        let {
            content,
            styles
        } = this.props;
        let {
            isActive
        } = this.state;

        let customClassName = classNames({
            active: isActive,
            btn: true,
        });

        return (
            <div style={styles}>
                <div className={customClassName} onClick={this.handle}> {content} </div>
            </div>
        )
    }

}
