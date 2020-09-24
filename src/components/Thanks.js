import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const Thanks = () => {
  const history = useHistory();
  const { name } = useParams();

  return (
    <React.Fragment>
      <div className="thanks">
        <p>
          Thanks <strong>{name} !!</strong>
        </p>
        <p>
          You joined <strong>{history.location.state}</strong>
        </p>
        <hr />
        <p>
          <strong>Disclaimer : </strong>Lacus laoreet non curabitur gravida arcu
          ac tortor dignissim convallis. Sit amet facilisis magna etiam tempor
          orci eu. Adipiscing at in tellus integer. Nunc sed velit dignissim
          sodales ut eu. Tincidunt vitae semper quis lectus nulla at volutpat
          diam. Proin nibh nisl condimentum id venenatis a. Nunc faucibus a
          pellentesque sit amet. Libero justo laoreet sit amet cursus sit. Leo
          vel orci porta non pulvinar neque laoreet suspendisse interdum. Eu
          nisl nunc mi ipsum faucibus vitae. Scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi tristique senectus et. Egestas
          tellus rutrum tellus pellentesque.
        </p>
      </div>
    </React.Fragment>
  );
};
export default Thanks;
