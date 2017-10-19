import * as React from 'react';
import {properties, stylable} from 'wix-react-tools';
import noop from '../../utils/noop';
import {Item} from '../item';
import styles from './list.st.css';

/**
 * Awesome List React component.
 */
@stylable(styles)
@properties
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
