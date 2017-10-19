import * as React from 'react';
import {stylable} from 'wix-react-tools';
import {ListDemo} from './components/list';
import styles from './index.st.css';

@stylable(styles)
export class ComponentsDemo extends React.Component {
    public render() {
        return (
            <div>
                <ListDemo />
            </div>
        );
    }
}
