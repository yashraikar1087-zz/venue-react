import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53669.932330400414!2d-96.81218865732754!3d32.78242689988463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9921f122aee1%3A0x2a0c3e75dc490c94!2sDowntown%2C+Dallas%2C+TX!5e0!3m2!1sen!2sus!4v1546393719639"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
