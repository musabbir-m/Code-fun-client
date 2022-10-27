import React from "react";

const Faq = () => {
  return (
    <div>
      <h2 className="text-5xl text-orange-500 p-10 ">
        Frequently asked questions
      </h2>

      <div className="mb-4 mx-3">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            How long I have the access?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>It depends on the plans you purchase</p>
          </div>
        </div>
      </div>
      <div className="mb-4 mx-3">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Do I get 24 ours support?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>We provide 24 hours email support</p>
          </div>
        </div>
      </div>
      <div className="mb-4 mx-3 rounded">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Are the courses beginner friendly?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>Some courses are beginner friendly, some intermediate and some are advanced.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
