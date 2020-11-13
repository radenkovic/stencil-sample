import { Component, h } from '@stencil/core';

@Component({
    tag: 'test-component',
    styleUrl: 'test-component.css',
    shadow: true,
})


export class TestComponent {
    render() {
        return <div>TEST COMPONENT Content</div>;
    }
}
