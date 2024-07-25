import { Fragment } from "react";

export default function Title({ locked }) {
  console.log(locked);
  return (
    <Fragment>
      {locked ? (
        <h1 className="title">
          <p>Limit!</p>
          <p>
            Buy <strong>PRO</strong> for &gt;5
          </p>
        </h1>
      ) : (
        <h1 className="title">Fancy Counter</h1>
      )}
    </Fragment>
  );
}
