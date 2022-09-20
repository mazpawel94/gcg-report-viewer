import React from 'react';
import '../../css/rack.css';
const Rack3d = ({ top }) => {
  return (
    <>
      <div className={top ? 'tridiv top' : 'tridiv '}>
        <div className="scene">
          <div className="shape prism-1 pri-1">
            <div className="face ft">
              <div className="photon-shader bcg1"></div>
            </div>
            <div className="face bk">
              <div className="photon-shader bcg2"></div>
            </div>
            <div className="face-wrapper rt">
              <div className="face">
                <div className="photon-shader bcg2"></div>
              </div>
            </div>
            <div className="face-wrapper lt">
              <div className="face">
                <div className="photon-shader bcg2"></div>
              </div>
            </div>
            <div className="face bm">
              <div className="photon-shader bcg2"></div>
            </div>
          </div>
          <div className="shape cuboid-1 cub-1">
            <div className="face ft">
              <div className="photon-shader bcg2"></div>
            </div>
            <div className="face bk">
              <div className="photon-shader bcg2"></div>
            </div>
            <div className="face rt">
              <div className="photon-shader bcg2"></div>
            </div>
            <div className="face lt">
              <div className="photon-shader bcg2"></div>
            </div>
            <div className="face bm">
              <div className="photon-shader bcg2"></div>
            </div>
            <div className="face tp">
              <div className="photon-shader bcg2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rack3d;
