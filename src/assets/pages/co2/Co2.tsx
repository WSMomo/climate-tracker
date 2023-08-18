import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";
import PageMain from "../../components/pageMain/PageMain";
import PageTitle from "../../components/pageTitle/PageTitle";
import PageInfo from "../../components/pageInfo/PageInfo";
function Co2() {
  const data = useSelector((state: RootState) => state.data.co2);

  if (data.length === 0) return <Loader />;

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <PageTitle>
        The concentration of CO2 in the atmosphere could reach 550 parts per
        million by 2050.
        <br />A 32 % increase compared to 2021.
      </PageTitle>
      <PageMain data={data} infoTitle="co2">
        ds
      </PageMain>
      <PageInfo buttonText="Learn More About Co2">
        <h3 className="text-xl font-bold text-center p-2">
          Global CO2 concentrations is going up
        </h3>
        <br />
        <p>
          If nothing changes, global atmospheric CO2-concentrations could reach
          550 parts per million (ppm) in 2050 - the “business as usual”
          scenario.
          <br />
          CO2 is a greenhouse gas that traps heat from the sun and therefore
          makes the Earth warmer.
          <br />
          Historically, the concentration of CO2 in the atmosphere has been
          2-300 ppm. This was the level for tens of thousands of years. But
          since the beginning of the industrial revolution around 1760,
          CO2-levels have skyrocketed, reaching almost 420 ppm in 2021. The
          highest level of CO2 in 14 million years.
        </p>
        <br />
        <h3 className="text-xl font-bold text-center p-2">
          Why is the concentration of
        </h3>
        <br />
        <p>
          CO2 going up? The reason for the increase in atmospheric CO2
          concentrations? Well, take a wild guess. Despite good intentions and
          ambitious goals, human generated CO2-emissions keep going up.
        </p>
        <br />
        <p>
          In a business-as-usual scenario, global CO2 emissions are projected to
          reach 43 billion tons in 2050 (compared to 35 billion tons in 2018).
        </p>
      </PageInfo>
    </div>
  );
}

export default Co2;
