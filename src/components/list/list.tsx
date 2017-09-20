import * as React from 'react';
import noop from '../../utils/noop';
import {Item} from '../item';

export class List extends React.Component {
    public render() {
        noop();
        return (
            <ul data-automation-id="LIST">
                <Item />
                <Item />
                <Item />
            </ul>
        );
    }
}
