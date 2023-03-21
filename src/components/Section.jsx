import React from 'react';
import { Component } from 'react';

export class Section extends Component {
  render() {
    const { title } = this.props
    return (
      <section className="statistics">
        <h1>{title}</h1>
      </section>
    );
  }
}
