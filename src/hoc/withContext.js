import React from 'react';

import AppContext from '../context';

const WithContext = Component => {
    return function (props) {
        return (
            <AppContext.Consumer>
                {(context) => {
                    return <Component {...props} context={context} />
                }
                }
            </AppContext.Consumer>
        )
    }
}

export default WithContext;