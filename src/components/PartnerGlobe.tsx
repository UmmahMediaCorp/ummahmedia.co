import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { feature } from "topojson-client";
import { MeshPhongMaterial, MeshBasicMaterial } from "three";

// ─── Partner locations (add a new partner = add one line) ───
export const PARTNERS = [
  { city: "Edmonton", country: "Canada", lat: 53.5461, lng: -113.4937 },
  { city: "Red Deer", country: "Canada", lat: 52.2681, lng: -113.8112 },
  { city: "Halifax", country: "Canada", lat: 44.6488, lng: -63.5752 },
  { city: "Gujranwala", country: "Pakistan", lat: 32.1877, lng: 74.1945 },
  { city: "Toba Tek Singh", country: "Pakistan", lat: 30.9709, lng: 72.4826 },
];

const COLORS = {
  land: "#1A5E51",
  water: "#FAF8F3",
  atmosphere: "#C9A961",
  ring: (t: number) => `rgba(255,212,117,${Math.max(0, 1 - t * 1.1)})`,
};

const globeMat = new MeshBasicMaterial({
  color: COLORS.water,
});

const filterPolygons = (features: any[]) =>
  features.filter((f: any) => f.id !== "304" && f.properties?.name !== "Greenland");

const createMarkerEl = (city: string, country: string) => {
  const wrapper = document.createElement("div");
  wrapper.style.cssText = "pointer-events: auto; cursor: pointer; position: relative; display: flex; flex-direction: column; align-items: center;";

  const dot = document.createElement("div");
  dot.style.cssText = `
    width: 12px; height: 12px; border-radius: 50%;
    background: #FFD475;
    box-shadow: 0 0 14px 5px rgba(255,212,117,0.5);
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    flex-shrink: 0;
  `;

  const nameTag = document.createElement("div");
  nameTag.style.cssText = `
    font-family: 'Bebas Neue', sans-serif;
    font-size: 11px; letter-spacing: 2px; color: #FFD475;
    margin-top: 6px; white-space: nowrap; text-align: center;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  `;
  nameTag.textContent = city.toUpperCase();

  const card = document.createElement("div");
  card.style.cssText = `
    position: absolute;
    bottom: 24px; left: 50%;
    transform: translateX(-50%) translateY(8px) scale(0.85);
    opacity: 0;
    pointer-events: none;
    background: rgba(26,94,81,0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(201,169,97,0.5);
    border-radius: 6px;
    padding: 12px 20px;
    white-space: nowrap;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 0 12px 32px rgba(0,0,0,0.3), 0 0 20px rgba(201,169,97,0.15);
    z-index: 10;
  `;

  const arrow = document.createElement("div");
  arrow.style.cssText = `
    position: absolute;
    bottom: -6px; left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px; height: 10px;
    background: rgba(26,94,81,0.95);
    border-right: 1px solid rgba(201,169,97,0.5);
    border-bottom: 1px solid rgba(201,169,97,0.5);
  `;

  const cityEl = document.createElement("div");
  cityEl.style.cssText = "font-family: 'Bebas Neue', sans-serif; font-size: 18px; letter-spacing: 3px; color: #FFD475; line-height: 1.2;";
  cityEl.textContent = city;

  const countryEl = document.createElement("div");
  countryEl.style.cssText = "font-family: 'DM Sans', sans-serif; font-size: 11px; letter-spacing: 2px; color: rgba(255,255,255,0.75); text-transform: uppercase; line-height: 1.4; margin-top: 2px;";
  countryEl.textContent = country;

  card.appendChild(cityEl);
  card.appendChild(countryEl);
  card.appendChild(arrow);

  wrapper.appendChild(card);
  wrapper.appendChild(dot);
  wrapper.appendChild(nameTag);

  wrapper.addEventListener("mouseenter", () => {
    dot.style.width = "16px";
    dot.style.height = "16px";
    dot.style.boxShadow = "0 0 20px 8px rgba(255,212,117,0.7)";
    card.style.opacity = "1";
    card.style.transform = "translateX(-50%) translateY(0) scale(1)";
    nameTag.style.opacity = "0";
  });

  wrapper.addEventListener("mouseleave", () => {
    dot.style.width = "12px";
    dot.style.height = "12px";
    dot.style.boxShadow = "0 0 14px 5px rgba(255,212,117,0.5)";
    card.style.opacity = "0";
    card.style.transform = "translateX(-50%) translateY(8px) scale(0.85)";
    nameTag.style.opacity = "1";
  });

  return wrapper;
};

const PartnerGlobe = () => {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [polygons, setPolygons] = useState<any[]>([]);
  const [globeSize, setGlobeSize] = useState(500);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((r) => r.json())
      .then((topo) => {
        const geo = feature(topo, topo.objects.countries) as any;
        setPolygons(filterPolygons(geo.features));
      });
  }, []);

  useEffect(() => {
    const sync = () => {
      if (containerRef.current) {
        setGlobeSize(Math.min(containerRef.current.offsetWidth, 600));
      }
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const ctrl = globeRef.current.controls();
    ctrl.autoRotate = true;
    ctrl.autoRotateSpeed = 0.5;
    ctrl.enableZoom = false;
    globeRef.current.pointOfView({ lat: 30, lng: 50, altitude: 2.2 }, 0);
  }, [polygons]);

  const htmlData = PARTNERS.map((p) => ({ ...p, id: p.city }));

  const rings = PARTNERS.map((p) => ({
    lat: p.lat,
    lng: p.lng,
    maxR: 6,
    propagationSpeed: 1,
    repeatPeriod: 2000,
  }));

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Globe
        ref={globeRef}
        width={globeSize}
        height={globeSize}
        backgroundColor="rgba(0,0,0,0)"
        globeMaterial={globeMat}
        atmosphereColor={COLORS.atmosphere}
        atmosphereAltitude={0.18}
        polygonsData={polygons}
        polygonCapColor={() => COLORS.land}
        polygonSideColor={() => COLORS.land}
        polygonStrokeColor={() => "rgba(0,0,0,0)"}
        polygonAltitude={0.02}
        htmlElementsData={htmlData}
        htmlLat={(d: any) => d.lat}
        htmlLng={(d: any) => d.lng}
        htmlAltitude={0.04}
        htmlElement={(d: any) => createMarkerEl(d.city, d.country)}
        ringsData={rings}
        ringColor={() => COLORS.ring}
        ringMaxRadius={6}
        ringPropagationSpeed={1}
        ringRepeatPeriod={2000}
        ringAltitude={0.015}
        animateIn={true}
      />
    </div>
  );
};

export default PartnerGlobe;
