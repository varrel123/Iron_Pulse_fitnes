import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage1 = () => {
  const navigate = useNavigate();

  const onSBDGroupF6Click = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1400px] overflow-hidden text-left text-21xl text-white font-urbanist">
      <img
        className="absolute top-[118px] left-[0px] w-[1920px] h-[461px] object-cover"
        alt=""
        src="/bg-image1@2x.png"
      />
      <div className="absolute top-[-124px] left-[-35px] bg-black w-[2026px] h-[242px] flex flex-col py-[50.2808837890625px] px-[353.4893798828125px] box-border items-end justify-end">
        <div />
      </div>
      <div className="absolute bottom-[-13px] left-[calc(50%_-_995px)] bg-black w-[2026px] h-[101px] flex flex-col py-[33px] px-[225px] box-border items-start justify-start">
        <div className="flex flex-row items-end justify-between">
          <div className="relative tracking-[0.24em] font-semibold flex items-center w-[341px] h-[27px] shrink-0">
            Iron Pulse
          </div>
          <div className="flex flex-row items-center justify-end text-[22.98px]">
            <div
              className="relative font-medium flex items-center w-[244.51px] h-[17.98px] shrink-0 cursor-pointer"
              onClick={onSBDGroupF6Click}
            >
              © SBD Group F6
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[392px] left-[190px] w-[520px] flex flex-col items-start justify-start text-[81.62px]">
        <div className="self-stretch relative font-semibold">Hello, tarjo.</div>
        <div className="relative text-[44.68px] font-light">Welcome back</div>
      </div>
      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_770px)] w-[1540px] flex flex-row items-center justify-between text-xl">
        <div className="w-[1540px] flex flex-row items-center justify-between">
          <div className="relative shadow-[13px_12px_42px_rgba(0,_0,_0,_0.4)] w-[251px] h-[503px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image6@2x.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0)_93.4%)]" />
            <div className="absolute h-[5.57%] w-[74.5%] top-[41.15%] right-[12.75%] bottom-[53.28%] left-[12.75%]" />
            <div className="absolute h-[28.63%] w-[74.5%] top-[49.11%] right-[12.75%] bottom-[22.27%] left-[12.75%]" />
            <div className="absolute h-[11.13%] w-[77.69%] top-[82.5%] right-[11.16%] bottom-[6.36%] left-[11.16%]" />
            <b className="absolute w-[51%] top-[40.76%] left-[12.75%] leading-[28px] inline-block">
              Workout #1
            </b>
            <div className="absolute w-[70.92%] top-[48.91%] left-[12.75%] text-base leading-[24px] inline-block">
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[9.54%] w-[51.79%] top-[83.3%] right-[23.9%] bottom-[7.16%] left-[24.3%]">
              <div className="relative text-sm leading-[14px] uppercase font-semibold font-urbanist text-black text-center inline-block w-24">
                Get Started
              </div>
            </button>
          </div>
          <div className="relative shadow-[13px_12px_42px_rgba(0,_0,_0,_0.4)] w-[251px] h-[503px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image7@2x.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0.1%] bottom-[0%] left-[-0.1%] [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0)_93.4%)]" />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <div className="absolute h-[5.57%] w-[74.5%] top-[41.15%] right-[12.75%] bottom-[53.28%] left-[12.75%]" />
            <div className="absolute h-[28.63%] w-[74.5%] top-[49.11%] right-[12.75%] bottom-[22.27%] left-[12.75%]" />
            <div className="absolute h-[11.13%] w-[77.69%] top-[82.5%] right-[11.16%] bottom-[6.36%] left-[11.16%]" />
            <b className="absolute w-[51%] top-[40.76%] left-[12.75%] leading-[28px] inline-block">
              Workout #2
            </b>
            <div className="absolute w-[70.92%] top-[48.91%] left-[12.75%] text-base leading-[24px] inline-block">
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </div>
            <div className="absolute h-[9.54%] w-[51.79%] top-[83.3%] right-[24%] bottom-[7.16%] left-[24.2%] rounded-lg bg-gold-200 flex flex-col py-0 px-[16.5px] box-border items-start justify-center text-center text-sm text-black">
              <div className="relative leading-[14px] uppercase font-semibold inline-block w-24">
                Get Started
              </div>
            </div>
          </div>
          <div className="relative shadow-[13px_12px_42px_rgba(0,_0,_0,_0.4)] w-[251px] h-[503px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image4@2x.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <div className="absolute h-full w-full top-[0%] right-[-0.2%] bottom-[0%] left-[0.2%] [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0)_93.4%)]" />
            <div className="absolute h-[5.57%] w-[74.5%] top-[41.15%] right-[12.75%] bottom-[53.28%] left-[12.75%]" />
            <div className="absolute h-[28.63%] w-[74.5%] top-[49.11%] right-[12.75%] bottom-[22.27%] left-[12.75%]" />
            <div className="absolute h-[11.13%] w-[77.69%] top-[82.5%] right-[11.16%] bottom-[6.36%] left-[11.16%]" />
            <div className="absolute h-[9.54%] w-[51.79%] top-[83.3%] right-[24.1%] bottom-[7.16%] left-[24.1%] rounded-lg bg-gold-200" />
            <b className="absolute w-[51%] top-[40.76%] left-[12.75%] leading-[28px] inline-block">
              Workout #3
            </b>
            <div className="absolute w-[70.92%] top-[48.91%] left-[12.75%] text-base leading-[24px] inline-block">
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </div>
            <div className="absolute w-[38.25%] top-[86.68%] left-[30.98%] text-sm leading-[14px] uppercase font-semibold text-black text-center inline-block">
              Get Started
            </div>
          </div>
          <div className="relative shadow-[13px_12px_42px_rgba(0,_0,_0,_0.4)] w-[251px] h-[503px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image8@2x.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <div className="absolute h-full w-full top-[0%] right-[-0.1%] bottom-[0%] left-[0.1%] [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0)_93.4%)]" />
            <div className="absolute h-[5.57%] w-[74.5%] top-[41.15%] right-[12.75%] bottom-[53.28%] left-[12.75%]" />
            <div className="absolute h-[28.63%] w-[74.5%] top-[49.11%] right-[12.75%] bottom-[22.27%] left-[12.75%]" />
            <div className="absolute h-[11.13%] w-[77.69%] top-[82.5%] right-[11.16%] bottom-[6.36%] left-[11.16%]" />
            <b className="absolute w-[51%] top-[40.76%] left-[12.75%] leading-[28px] inline-block">
              Workout #4
            </b>
            <div className="absolute w-[70.92%] top-[48.91%] left-[12.75%] text-base leading-[24px] inline-block">
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </div>
            <div className="absolute h-[9.54%] w-[51.79%] top-[83.3%] right-[24.2%] bottom-[7.16%] left-[24%] rounded-lg bg-gold-200 flex flex-col items-center justify-center text-center text-sm text-black">
              <div className="relative leading-[14px] uppercase font-semibold inline-block w-24">
                Get Started
              </div>
            </div>
          </div>
          <div className="relative shadow-[13px_12px_42px_rgba(0,_0,_0,_0.4)] w-[251px] h-[503px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image6@2x.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0)_93.4%)]" />
            <div className="absolute h-[5.57%] w-[74.5%] top-[41.15%] right-[12.75%] bottom-[53.28%] left-[12.75%]" />
            <div className="absolute h-[28.63%] w-[74.5%] top-[49.11%] right-[12.75%] bottom-[22.27%] left-[12.75%]" />
            <div className="absolute h-[11.13%] w-[77.69%] top-[82.5%] right-[11.16%] bottom-[6.36%] left-[11.16%]" />
            <b className="absolute w-[51%] top-[40.76%] left-[12.75%] leading-[28px] inline-block">
              Workout #5
            </b>
            <div className="absolute w-[70.92%] top-[48.91%] left-[12.75%] text-base leading-[24px] inline-block">
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </div>
            <div className="absolute h-[9.54%] w-[51.79%] top-[83.3%] right-[23.9%] bottom-[7.16%] left-[24.3%] rounded-lg bg-gold-200 flex flex-col items-center justify-center text-center text-sm text-black">
              <div className="relative leading-[14px] uppercase font-semibold inline-block w-24">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[32.5px] right-[190px] flex flex-row items-center justify-end gap-[76px] text-right text-[22.98px]">
        <div className="flex flex-row items-center justify-end gap-[44px]">
          <div className="relative font-medium">Log Out</div>
          <div className="relative font-medium flex items-center w-[173px] h-[18px] shrink-0">
            Personal Trainers
          </div>
          <div className="relative font-medium flex items-center w-[130px] h-[18px] shrink-0">
            My Courses
          </div>
        </div>
        <img
          className="relative rounded-[50%] w-[54px] h-[54px] object-cover"
          alt=""
          src="/ellipse-12@2x.png"
        />
      </div>
      <div className="absolute top-[27px] left-[190px] flex flex-row items-center justify-start text-center text-[53.77px]">
        <b className="relative">Iron Pulse</b>
      </div>
    </div>
  );
};

export default HomePage1;