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
    console.log('prop', this.first)
    console.log('Callback', this.changeHandler)
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Top Level Component {this.getText()}
    <sub-component></sub-component>
    </div>;
  }
}
