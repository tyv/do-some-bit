import * as React from 'react';
import {stylable} from 'wix-react-tools';
import style from './item.st.css';

/**
 * Awesome and stateless item component.
 */
export const Item: React.SFC = stylable(style)(
    () => <li>I am Item</li>
);
