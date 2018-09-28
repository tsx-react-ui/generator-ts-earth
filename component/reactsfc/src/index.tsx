/**
 * Created by <%= author %><<%= email %>>.
 * ComponentName <%= upperCaseName %>
 * Desc <%= desc %>
 * GroupName <%= groupName %>
 */
import * as React from 'react'
import { ReactEventHandler } from 'react'

import './index.scss';

interface <%= upperCaseName %>Props {
    content: string;
    styles ?: string;
    handle ?: ReactEventHandler<HTMLParagraphElement>;
}

const defaultProps: <%= upperCaseName %>Props = {
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
            <p className={`btn ${styles}`} onClick={handle}> {content} </p>
        </div>

    )

};

<%= upperCaseName %>.defaultProps = defaultProps;

export default <%= upperCaseName %>;
