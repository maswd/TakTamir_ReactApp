import { useState } from "react";

function Subscription({handler}) {
const {hasSubscription,
  handleCheckboxChange}=handler

  return (
    <div className="mt-3 d-flex justify-content-around py-3 ">
      <div className="form-check">
        
        <input
          className="form-check-input "
          type="checkbox"
          id="hasSubscription"
          checked={hasSubscription}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label mr-3" htmlFor="hasSubscription">
          اشتراک دارم
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="noSubscription"
          checked={!hasSubscription}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label mr-3" htmlFor="noSubscription">
          اشتراک ندارم
        </label>
      </div>
    </div>
  );
}

export default Subscription;