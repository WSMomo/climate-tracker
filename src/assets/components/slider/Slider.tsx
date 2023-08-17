import ReactSlider from "react-slider";

interface Props {
  minYear: number;
  maxYear: number;
  handleChangeSlider: (value: number[]) => void;
}

function Slider({ minYear, maxYear, handleChangeSlider }: Props) {
  return (
    <div className="w-3/4 h-12">
      <ReactSlider
        className="cursor-pointer"
        thumbClassName="bg-red-500 h-12 w-12 flex justify-center items-center"
        thumbActiveClassName="bg-white text-black"
        trackClassName="bg-white h-2 top-5"
        defaultValue={[minYear, maxYear]}
        min={minYear}
        max={maxYear}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value) => handleChangeSlider(value)}
        pearling
        minDistance={15}
      />
    </div>
  );
}

export default Slider;
