import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { RootState } from "../../redux/store";
import styles from "../pages.module.css";
import PageMain from "../../components/pageMain/PageMain";
import PageTitle from "../../components/pageTitle/PageTitle";
import SourceInfo from "../../components/sourceInfo/SourceInfo";
import PageInfo from "../../components/pageInfo/PageInfo";

function Arctic() {
  const data = useSelector((state: RootState) => state.data.arctic);

  if (data.length === 0) return <Loader />;

  return (
    <div className={styles.pageContainer}>
      <PageTitle>
        The Arctic is warming three times as fast and the global average.
      </PageTitle>
      <PageMain data={data} infoTitle={"arctic"}>
        This provides the average monthly arctic sea ice extent each September
        since 1979, derived from satellite observations.
      </PageMain>
      ;
      <PageInfo buttonText="Learn More About Arctic Warming">
        <h3>Climate components in the Arctic</h3>
        <p>
          The Arctic is characterised by distinct components consisting of water
          in frozen form: glaciers, snow, permafrost and iced-over water. These
          components together form the cryosphere. All parts of the cryosphere
          are sensitive to climate change, and they all play important roles in
          the global climate system.
        </p>
        <h3>Accelerated Arctic Warming and its Consequences</h3>
        <p>
          The arctic is warming around twice as fast as global average. Some of
          the reasons for this are: The arctic amplification, the albedo effect,
          and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic
          ice cover. From 2010 to present we are losing 12.85% per decade!
        </p>
        <p>
          Another consequence is permafrost thawing. This is a process in which
          large amounts of methane is released to the atmosphere, fueling more
          the process of global warming.
        </p>
        <SourceInfo>
          <br />
          <a
            href="https://www.npolar.no/en/themes/climate-change-in-the-arctic/#toggle-id-8"
            target="_blank"
          >
            npolar.no
          </a>
        </SourceInfo>
      </PageInfo>
    </div>
  );
}

export default Arctic;
