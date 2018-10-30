/**
 * Created by <%= author %><<%= email %>>.
 * ComponentName <%= upperCaseName %>
 * Desc <%= desc %>
 * GroupName <%= groupName %>
 */
import * as React from 'react'
import './index.scss';

interface <%= upperCaseName %>Props {
    content: React.ReactNode;
    styles: string;
}
interface DefaultProps {
    handle?: React.ReactEventHandler<HTMLParagraphElement>;
}

const defaultProps: DefaultProps = {
    handle: () => {console.log('handle action');}
};

const <%= upperCaseName %>: React.SFC<<%= upperCaseName %>Props & DefaultProps> = ({
                content,
                styles,
                handle,
             }) => {

    return (

        <div>
            <p className={`btn ${styles}`} onClick={handle}> {content} </p>
        </div>

    )

};

<%= upperCaseName %>.defaultProps = defaultProps;

export default <%= upperCaseName %>;
