/**
 * Created by <%= author %><<%= email %>>.
 * ComponentName <%= upperCaseName %>
 * Desc <%= desc %>
 * GroupName <%= groupName %>
 */

import * as React from 'react'
import { CSSProperties, MouseEventHandler } from 'react'
import * as PropTypes from 'prop-types'

import classNames from 'classnames'
import './index.scss'


/**
 * @class <%= upperCaseName %>
 * @extends React.Component
 * @desc <%= upperCaseName %> Component for mobile
 */

interface <%= upperCaseName %>Props {
    content: string;
    styles ?: CSSProperties;
    handle ?: MouseEventHandler<HTMLDivElement>;
}

interface <%= upperCaseName %>States {
    isActive: boolean;
}

export default class <%= upperCaseName %> extends React.Component <<%= upperCaseName %>Props, <%= upperCaseName %>States> {

    static propTypes = {
        /**
         * 主内容
         */
        content: PropTypes.string.isRequired
    };

    static defaultProps = {
        content: 'React test demo'
    };

    /**
     * @constructor
     */
    constructor(props: <%= upperCaseName %>Props) {
        super(props);

        this.state = {
            isActive: false
        }

        this.handle = this.handle.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handle(){
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render () {

        let {
            content
        } = this.props;
        let {
            isActive
        } = this.state;

        let customClassName = classNames({
            active: isActive,
            btn: true,
        });

        return (
            <div>
                <div className={customClassName} onClick={this.handle}> {content} </div>
            </div>
        )
    }

}
