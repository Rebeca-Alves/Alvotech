import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  BoxSearch,
  SearchInput,
} from "./styles";

import "../../pages/animation.css";

const MapComponent: React.FC<{ visible?: boolean; handleMenu: (value: boolean) => void }> = (
  props
) => {
  const [, setPosition] = useState([-8.047562, -34.877523]);

  let [count, setCount] = useState(0);

  const customIcon = new L.Icon({
    iconUrl: "https://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png",
    iconSize: [32, 50],
    iconAnchor: [16, 32],
  });

  useEffect(() => {
    console.log(navigator);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setPosition([latitude, longitude]);
        setCount(count++);
      });
    }
  }, []);

  return (
    <>
      <BoxSearch>
        {!props?.visible && (
          <svg
            width="40"
            height="36"
            viewBox="0 0 40 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => props?.handleMenu(true)}
          >
            <path
              d="M0 0V5.13041H40V0H0ZM0 15.2373V20.3677H40V15.2373H0ZM0 30.6286V35.759H40V30.6286H0Z"
              fill="#46177D"
            />
          </svg>
        )}

        <SearchInput />
        <svg
          width="40"
          height="40"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.5428 0.0958367C15.0464 0.0958367 0 15.1422 0 33.6387C0 52.1352 15.0464 67.1815 33.5428 67.1815C39.1972 67.1815 44.7557 65.8398 49.4517 63.2522C49.8279 63.7049 50.2449 64.1219 50.6976 64.4981L60.2813 74.0818C61.1662 75.0775 62.2453 75.8819 63.4524 76.4455C64.6594 77.0091 65.9689 77.32 67.3005 77.3592C68.6321 77.3984 69.9576 77.1651 71.1957 76.6734C72.4338 76.1818 73.5584 75.4423 74.5003 74.5003C75.4423 73.5584 76.1818 72.4338 76.6734 71.1957C77.1651 69.9576 77.3984 68.6321 77.3592 67.3005C77.32 65.9689 77.0091 64.6594 76.4455 63.4524C75.8819 62.2453 75.0775 61.1662 74.0818 60.2813L64.4981 50.6976C64.0312 50.2306 63.5174 49.8131 62.9647 49.4517C65.5523 44.7557 67.1815 39.293 67.1815 33.5428C67.1815 15.0464 52.1352 0 33.6387 0L33.5428 0.0958367ZM33.5428 9.67951C46.8641 9.67951 57.502 20.3174 57.502 33.6387C57.502 39.9639 55.2019 45.8099 51.1768 50.1226C51.081 50.2184 50.9851 50.3143 50.8893 50.4101C50.4366 50.7863 50.0196 51.2033 49.6434 51.656C45.4266 55.4894 39.6764 57.6937 33.447 57.6937C20.1257 57.6937 9.48783 47.0558 9.48783 33.7345C9.48783 20.4132 20.1257 9.77534 33.447 9.77534L33.5428 9.67951Z"
            fill="#46177D"
          />
        </svg>
      </BoxSearch>
    </>
  );
};

export default MapComponent;