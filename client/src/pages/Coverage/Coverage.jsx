import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🎨 Styled Custom Pin: Custom SVG markup to create a premium, brand-matching marker
const customIcon = L.divIcon({
  html: `
    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-accent border-2 border-secondary shadow-lg relative animate-pulse">
      <div class="w-2.5 h-2.5 rounded-full bg-secondary"></div>
      <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-[6px] border-t-accent"></div>
    </div>
  `,
  className: "custom-leaflet-icon",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Coverage = () => {
  // Center coordinates to frame Bangladesh beautifully
  const centerPosition = [23.85, 90.3];

  // 📥 Fetch location data directly from your route loader setup
  const hubLocations = useLoaderData() || [];

  return (
    <div className="rounded-2xl bg-primary my-6">
      <div className="md:p-16 p-8">
        <h1 className="text-secondary font-extrabold text-3xl">
          We are available in 64 districts
        </h1>
        <div className="relative flex items-center max-w-sm my-8">
          <label className="input input-bordered flex items-center gap-3 w-full pr-24 rounded-full">
            <FaSearch className="text-base-content/50" />
            <input
              type="text"
              placeholder="Search here..."
              className="grow bg-transparent outline-none border-none"
              required
            />
          </label>
          <button className="btn btn-accent btn-sm absolute right-1.5 rounded-full text-secondary px-8">
            Search
          </button>
        </div>
        <div className="border-t border-dashed border-neutral"></div>
        <h1 className="text-secondary font-extrabold text-xl my-8">
          We deliver almost all over Bangladesh
        </h1>
        {/* Leaflet Map Box Container */}
        <div className="w-full rounded-2xl overflow-hidden border border-neutral/20 z-0 h-112.5 mt-4 shadow-inner bg-base-100 p-1">
          <MapContainer
            center={centerPosition}
            zoom={7}
            scrollWheelZoom={false}
            className="h-full w-full rounded-xl"
          >
            {/* 💎 Premium Minimal Light Map Tile Theme */}
            <TileLayer
              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {/* 🔄 Map through fetched locations array dynamically from route loader */}
            {hubLocations.map((hub, index) => {
              if (!hub.latitude || !hub.longitude) return null;

              return (
                <Marker
                  key={index}
                  position={[hub.latitude, hub.longitude]}
                  icon={customIcon}
                >
                  <Popup className="custom-popup">
                    <div className="font-sans p-1">
                      <h4 className="text-secondary font-bold text-sm m-0">
                        {hub.city || hub.district} Hub
                      </h4>
                      <p className="text-neutral text-xs m-0 mt-1">
                        District: {hub.district} ({hub.region} Region)
                      </p>
                      {hub.covered_area && (
                        <p className="text-neutral/80 text-[11px] m-0 mt-1 max-w-[180px] leading-tight">
                          <strong>Covered Areas:</strong>{" "}
                          {hub.covered_area.join(", ")}
                        </p>
                      )}
                      <span className="inline-block mt-2 text-[10px] bg-accent/20 text-secondary font-medium px-2 py-0.5 rounded-full capitalize">
                        {hub.status}
                      </span>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
export default Coverage;
