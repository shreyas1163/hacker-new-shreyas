import React from "react";

export class NewsListRow extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  
  render() {

    return (
      // border={"0px"}
      <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>Hello</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>Hello</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>Hello</td>
        <td>july@example.com</td>
      </tr>
    </tbody>

    );
  }
}
export default NewsListRow;