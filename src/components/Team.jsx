import React from "react";

import Client1 from "../assets/client-1.jpg";
import Teamcard from "./common/Teamcard";

const Team = () => {
  return (
    <div className="bg-[#f4f4f4] pt-[134px] pb-[72px]    ">
      <div className="container">
        <Teamcard
          image={Client1}
          text={
            "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma - which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice."
          }
          name={"- John Smith. Okler"}
        />
      </div>
    </div>
  );
};

export default Team;
