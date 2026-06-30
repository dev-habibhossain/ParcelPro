import { FaSearch } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🎨 Styled Custom Pin: Custom SVG markup to create a premium, brand-matching marker
const customIcon = L.divIcon({
  html: `
    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-accent border-2 border-secondary shadow-lg relative animate-pulse">
      <div class="w-2.5 h-2.5 rounded-full bg-secondary"></div>
      <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-accent"></div>
    </div>
  `,
  className: "custom-leaflet-icon",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// 📍 Array of 10 key hubs across Bangladesh districts
const hubLocations = [
  {
    id: 1,
    name: "Dhaka Central Hub",
    district: "Dhaka",
    coords: [23.8103, 90.4125],
  },
  {
    id: 2,
    name: "Chittagong Port Hub",
    district: "Chittagong",
    coords: [22.3569, 91.7832],
  },
  {
    id: 3,
    name: "Sylhet Town Hub",
    district: "Sylhet",
    coords: [24.8949, 91.8687],
  },
  {
    id: 4,
    name: "Khulna City Hub",
    district: "Khulna",
    coords: [22.8456, 89.5403],
  },
  {
    id: 5,
    name: "Rajshahi Express Hub",
    district: "Rajshahi",
    coords: [24.3745, 88.6042],
  },
  {
    id: 6,
    name: "Barisal Distribution Point",
    district: "Barisal",
    coords: [22.701, 90.3535],
  },
  {
    id: 7,
    name: "Rangpur Main Hub",
    district: "Rangpur",
    coords: [25.7558, 89.2444],
  },
  {
    id: 8,
    name: "Mymensingh Delivery Point",
    district: "Mymensingh",
    coords: [24.7471, 90.4203],
  },
  {
    id: 9,
    name: "Comilla Junction Hub",
    district: "Comilla",
    coords: [23.4682, 91.1788],
  },
  {
    id: 10,
    name: "Bogra Express Hub",
    district: "Bogra",
    coords: [24.8481, 89.373],
  },
];

const Coverage = () => {
  // Center coordinates to frame Bangladesh beautifully
  const centerPosition = [23.85, 90.3];

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
        <div className="w-full rounded-2xl overflow-hidden border border-neutral/20 z-0 h-[450px] mt-4 shadow-inner bg-base-100 p-1">
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

            {/* 🔄 Map through the 10 custom locations */}
            {hubLocations.map((hub) => (
              <Marker key={hub.id} position={hub.coords} icon={customIcon}>
                <Popup className="custom-popup">
                  <div className="font-sans p-1">
                    <h4 className="text-secondary font-bold text-sm m-0">
                      {hub.name}
                    </h4>
                    <p className="text-neutral text-xs m-0 mt-1">
                      District: {hub.district}
                    </p>
                    <span className="inline-block mt-2 text-[10px] bg-accent/20 text-secondary font-medium px-2 py-0.5 rounded-full">
                      Active Hub
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
