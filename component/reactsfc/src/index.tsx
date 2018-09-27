/**
 * Created by <%= author %><<%= email %>>.
 * ComponentName <%= upperCaseName %>
 * Desc <%= desc %>
 * GroupName <%= groupName %>
 */
import * as React from 'react'
import { CSSProperties, MouseEventHandler } from 'react'
import * as PropTypes from 'prop-types'

import classNames from 'classnames';
import './index.scss';

interface <%= upperCaseName %>Props {
    content: string;
    style ?: CSSProperties;
    handle ?: MouseEventHandler<HTMLDivElement>;
}

const propTypes = {
    content: PropTypes.string.isRequired,
    styles: PropTypes.string,
    handle: PropTypes.func
};

const defaultProps = {
    content: 'React test <%= upperCaseName %>',
    styles: '',
    handle: () => {console.log('handle action');}
};

const <%= upperCaseName %>: React.SFC<<%= upperCaseName %>Props> = ({
                content,
                styles,
                handle,
                ...others
             }) => {

    return (

        <div>
            <div className={`btn ${styles}`} onClick={() => {handle()}}> {content} </div>
        </div>

    )

};

<%= upperCaseName %>.propTypes = propTypes;
<%= upperCaseName %>.defaultProps = defaultProps;

export default <%= upperCaseName %>;
