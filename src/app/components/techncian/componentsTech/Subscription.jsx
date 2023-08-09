import { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
function Subscription({ handler }) {
  const { hasSubscription, handleCheckboxChange } = handler;
console.log(hasSubscription)
  return (
    <div className="mt-3 w-100 d-flex align-items-center py-3 justify-content-center ">
      <p className="ml-2">اشتراک: </p>
        <BootstrapSwitchButton
          onlabel="دارم"
          offlabel="ندارم"
          checked={hasSubscription}
          onChange={handleCheckboxChange}
          style={"w-100 rounded-pill"}
        />

    </div>
  );
}

export default Subscription;
