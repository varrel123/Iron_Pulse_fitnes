import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../global/navbar-logged-in.js";
import CoverImage from "../global/common-section.js";
import Card from "../shared/cardHome.js";

const HomePage1 = () => {
  const navigate = useNavigate();

  const onSBDGroupF6Click = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onWorkoutClick = useCallback(() => {
    navigate("/Workout");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <CoverImage title={"Select Workout"} />
      <section className="bg-white">
        <section className="h-screen flex flex-wrap justify-center gap-8 mt-8">
          {/* Render multiple card components */}
          <Card
            title="Shoes!"
            description="If a dog chews shoes, whose shoes does he choose?"
          />
          <Card
            title="Shoes!"
            description="If a dog chews shoes, whose shoes does he choose?"
          />
          <Card
            title="Shoes!"
            description="If a dog chews shoes, whose shoes does he choose?"
          />
          <Card
            title="Shoes!"
            description="If a dog chews shoes, whose shoes does he choose?"
          />
          <Card
            title="Shoes!"
            description="If a dog chews shoes, whose shoes does he choose?"
          />
          <Card
            title="Shoes!"
            description="If a dog chews shoes, whose shoes does he choose?"
          />
        </section>
      </section>
    </>
  );
};

export default HomePage1;
