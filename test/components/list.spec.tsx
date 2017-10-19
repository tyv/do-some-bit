import * as React from 'react';
import {ClientRenderer, expect} from 'test-drive-react';
import {List} from '../../src';

describe('<List/>', function() {
    const clientRenderer = new ClientRenderer();

    afterEach(() => {
        clientRenderer.cleanup();
    });

    describe('Component / Demo test', function() {
        it('Basic demo', async function() {
            const {select, waitForDom} = clientRenderer.render(<List />);

            await waitForDom(() => {
                const element = select('LIST');
                expect(element).to.be.present();
            });
        });

    });
});
