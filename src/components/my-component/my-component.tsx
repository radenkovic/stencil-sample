import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})


export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() changeHandler: any;

  private getText(): string {
    // This will be logged few times, because in index.html I am changing changeHandler, and it triggers re-renders
    console.log('prop', this.first)
    console.log('Callback', this.changeHandler)
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="my-component"> This is Top level component (my-component) {this.getText()}
    <br/>
    <br/>
    <sub-component></sub-component>
    </div>;
  }
}
