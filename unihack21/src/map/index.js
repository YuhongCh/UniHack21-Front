
import Header from "../header";
import {MapWrapper} from "../style";
import MapImage from "../map.png";
import AnalysisImage from "../analysis.png";

const Map= () => {

  return (
    <div>
      <Header/>
      <MapWrapper>
        <img width={700} height={500} src={MapImage}/>
        <img width={700} height={500} src={AnalysisImage}/>
      </MapWrapper>
    </div>
  )

}

export default Map;