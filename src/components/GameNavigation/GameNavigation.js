import React from 'react';

import NavigationButton from './NavigationButton';

const GameNavigation = ({ nextMoveFn, prevMoveFn }) => {
    return (
        <div>
            <NavigationButton onClick={prevMoveFn}> {'<<<'} </NavigationButton>
            <NavigationButton onClick={nextMoveFn}> >>> </NavigationButton>
        </div>
    );
}

export default GameNavigation;
