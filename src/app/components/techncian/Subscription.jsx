import { useState } from "react";

function Subscription() {
  const [hasSubscription, setHasSubscription] = useState(false);

  const handleCheckboxChange = (event) => {
    setHasSubscription(event.target.checked);
  };

  return (
    <div className="d-flex">
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