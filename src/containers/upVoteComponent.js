import React from "react";
import { Glyphicon } from 'react-bootstrap';
export class Triangelup extends React.PureComponent {
    render() {
      return (
        <span style={{
          marginTop: "8px",
          marginLeft: "8px",
          fontSize: "10px"
        }}>
          <Glyphicon glyph="triangle-top" />
        </span>
      );
    }
  }