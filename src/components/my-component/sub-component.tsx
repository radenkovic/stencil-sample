import { Component,  h } from '@stencil/core';

@Component({
    tag: 'sub-component',
    styleUrl: 'sub-component.css',
    shadow: true,
})


export class SubComponent {
    render() {
        return <div>This is sub component (sub-component)</div>;
    }
}
