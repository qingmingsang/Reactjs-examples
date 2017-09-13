
'use strict';
import React from 'react';
import FactorSelector from './factors/factor-selector';

class Factor extends React.Component {
    render() {
        return <FactorSelector factorId={Number(this.props.params.id)} />;
    }
}

export default Factor;