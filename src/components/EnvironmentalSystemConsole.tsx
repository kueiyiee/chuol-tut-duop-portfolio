import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  Radio,
  Download,
  Maximize2,
  Layers,
  RefreshCw,
  Terminal,
  MapPin,
  FileSpreadsheet,
  ZoomIn,
  X,
  Gauge,
  Sparkles,
  CheckCircle2,
  Laptop
} from 'lucide-react';
import { projects } from '../data/portfolioData';

interface TelemetryMetric {
  label: string;
  value: string;
  unit: string;
  status: 'optimal' | 'warning' | 'nominal';
  benchmark: string;
}

export const EnvironmentalSystemConsole: React.FC = () => {
  const [activeSystemIdx, setActiveSystemIdx] = useState<number>(0);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [activeLayers, setActiveLayers] = useState<{ [key: string]: boolean }>({
    topography: true,
    drainage: true,
    ndvi: true,
    sensors: true,
  });
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; lat: string; lon: string; elev: string }>({
    x: 0,
    y: 0,
    lat: "06°44'28\" N",
    lon: "44°16'10\" E",
    elev: "510m ASL",
  });
  const [isHoveringImage, setIsHoveringImage] = useState<boolean>(false);
  const [fullscreenModal, setFullscreenModal] = useState<boolean>(false);
  const [utcTime, setUtcTime] = useState<string>('');
  
  // Real terminal logs state
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[16:06:01 UTC] EIS Kernel Initialized. Station Node: KDU-NRM-04 (Kebri Dahar, Ethiopia).",
    "[16:06:02 UTC] Satellite Uplink Active: Sentinel-2 Multi-Spectral (10m Res) & Landsat-9 TIRS.",
    "[16:06:04 UTC] Hydrological Drainage Vectors loaded for Wabe Shebelle sub-basin.",
    "[16:06:05 UTC] Telemetry status: NOMINAL. 4 Research Systems synced with senior academic records.",
  ]);

  const currentProject = projects[activeSystemIdx] || projects[0];
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // UTC digital clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC+03:00');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // System telemetry metrics tailored per active system
  const getMetrics = (): TelemetryMetric[] => {
    switch (activeSystemIdx) {
      case 0:
        return [
          { label: "Catchment Area", value: "1,420", unit: "km²", status: "nominal", benchmark: "Sub-basin Baseline" },
          { label: "Mean Slope Angle", value: "4.8", unit: "deg", status: "nominal", benchmark: "Low-Gradient Plateau" },
          { label: "Peak Runoff Coeff", value: "0.38", unit: "C", status: "warning", benchmark: "High Erosion Risk > 0.35" },
          { label: "Soil Infiltration", value: "14.2", unit: "mm/hr", status: "nominal", benchmark: "Loamy Sand Rate" },
          { label: "Hydrologic Response", value: "3.2", unit: "hrs", status: "optimal", benchmark: "Peak Concentration" },
        ];
      case 1:
        return [
          { label: "Weekly Mass Audit", value: "3.42", unit: "tons", status: "nominal", benchmark: "Campus Generation" },
          { label: "Organic Fraction", value: "54.2", unit: "%", status: "optimal", benchmark: "Compostable Stream" },
          { label: "Plastic Debris Mass", value: "26.8", unit: "%", status: "warning", benchmark: "Recyclable Target: <15%" },
          { label: "Source Diversion", value: "65.0", unit: "%", status: "optimal", benchmark: "Goal: 70% by 2027" },
          { label: "Leaching Risk Score", value: "Low", unit: "Cat 1", status: "optimal", benchmark: "Impervious Drainage" },
        ];
      case 2:
        return [
          { label: "Quadrat Area Sampled", value: "5x5", unit: "m²", status: "nominal", benchmark: "Standardized Field Plot" },
          { label: "Canopy Density", value: "34.6", unit: "%", status: "nominal", benchmark: "Semi-Arid Bushland" },
          { label: "Shannon-Wiener H'", value: "2.14", unit: "Index", status: "optimal", benchmark: "Moderate Diversity" },
          { label: "Volumetric Soil Moist.", value: "18.2", unit: "%", status: "nominal", benchmark: "Dry Season Range: 15-22%" },
          { label: "Botanical Taxa Logged", value: "48", unit: "Species", status: "optimal", benchmark: "Herbarium Catalog" },
        ];
      case 3:
      default:
        return [
          { label: "Vegetation Index NDVI", value: "0.48", unit: "NDVI", status: "nominal", benchmark: "Seasonal Shrubland" },
          { label: "Drought SPEI (3-Mo)", value: "-1.18", unit: "SPEI", status: "warning", benchmark: "Moderate Aridity Stress" },
          { label: "Land Surface Temp", value: "32.4", unit: "°C", status: "nominal", benchmark: "Thermal Infrared Band" },
          { label: "Soil Water Index", value: "41.0", unit: "%", status: "nominal", benchmark: "Root-zone Storage" },
          { label: "Sensor Signal Link", value: "99.8", unit: "%", status: "optimal", benchmark: "Direct Satellite Uplink" },
        ];
    }
  };

  // Simulated coordinate inspector on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pctX = x / rect.width;
    const pctY = y / rect.height;

    // Simulate coordinates based on Somali Region Kebri Dahar center
    const baseLat = 6.7412;
    const baseLon = 44.2708;
    const currentLat = (baseLat + (0.5 - pctY) * 0.05).toFixed(4);
    const currentLon = (baseLon + (pctX - 0.5) * 0.05).toFixed(4);
    const simulatedElev = Math.round(510 + (pctY * 45) - (pctX * 20));

    setCursorPos({
      x: Math.round(x),
      y: Math.round(y),
      lat: `${currentLat}° N`,
      lon: `${currentLon}° E`,
      elev: `${simulatedElev}m ASL`,
    });
  };

  // Run telemetry scan simulation
  const handleTriggerScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    const now = new Date().toUTCString().slice(17, 25);
    setTerminalLogs((prev) => [
      `[${now} UTC] Initiating automated environmental telemetry scan for ${currentProject.title.slice(0, 32)}...`,
      `[${now} UTC] Calibrating field sensors against Kebri Dahar Weather Station 04 telemetry...`,
      ...prev.slice(0, 6),
    ]);

    setTimeout(() => {
      setIsScanning(false);
      const finishedTime = new Date().toUTCString().slice(17, 25);
      setTerminalLogs((prev) => [
        `[${finishedTime} UTC] Scan complete: Radiometric verification nominal. All 4 layers synchronized.`,
        ...prev,
      ]);
    }, 2000);
  };

  // Export structured CSV data file
  const handleExportData = () => {
    const metrics = getMetrics();
    const headers = "System,Parameter,Value,Unit,Benchmark,Station,Coordinates,Timestamp\n";
    const rows = metrics
      .map(
        (m) =>
          `"${currentProject.systemMeta?.systemName || currentProject.title}","${m.label}","${m.value}","${m.unit}","${m.benchmark}","KDU-NRM-04","06°44'28\" N 44°16'10\" E","${new Date().toISOString()}"`
      )
      .join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `EIS_Telemetry_Dataset_${currentProject.number}_${Date.now()}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const now = new Date().toUTCString().slice(17, 25);
    setTerminalLogs((prev) => [
      `[${now} UTC] EXPORT: Generated structured scientific CSV dataset for research archive.`,
      ...prev,
    ]);
  };

  const toggleLayer = (layerKey: string) => {
    setActiveLayers((prev) => ({
      ...prev,
      [layerKey]: !prev[layerKey],
    }));
  };

  return (
    <section
      id="eis-portal"
      aria-label="Environmental Information System & Telemetry Portal"
      className="py-20 lg:py-28 bg-blue-950/20 dark:bg-black/50 text-slate-800 dark:text-slate-100 border-t border-b border-blue-900/15 dark:border-blue-900/40 relative overflow-hidden"
    >
      {/* Background Matrix & Topo Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb08_1px,transparent_1px),linear-gradient(to_bottom,#2563eb08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#38bdf810_1px,transparent_1px),linear-gradient(to_bottom,#38bdf810_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-slate-200 dark:border-blue-900/40 text-left">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-sky-300 border border-blue-600/30">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-1.5 animate-ping" />
                REAL SYSTEM TELEMETRY WORKSTATION
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
                STATION ID: KDU-NRM-04
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Environmental Information System (EIS)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl font-light">
              Interactive scientific console simulating real-time environmental telemetry, GIS watershed hydrology modeling, institutional circularity audits, and in-situ field sampling datasets.
            </p>
          </div>

          {/* Real-time Ticker */}
          <div className="mt-4 lg:mt-0 flex flex-col items-start lg:items-end font-mono text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-slate-900 dark:text-sky-300 font-bold">STATUS: OPERATIONAL</span>
              <span>·</span>
              <span>{utcTime}</span>
            </div>
            <div>SOMALI REGION, ETHIOPIA · 510m ELEVATION</div>
          </div>
        </div>

        {/* System Module Switcher Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-left">
          {projects.map((proj, idx) => {
            const isActive = activeSystemIdx === idx;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveSystemIdx(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 relative overflow-hidden group ${
                  isActive
                    ? 'bg-blue-600 text-white dark:bg-blue-950/80 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                    : 'bg-white/70 dark:bg-[#060b18]/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-blue-900/40 hover:border-blue-500 hover:bg-white dark:hover:bg-blue-950/30'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-2 h-2 bg-sky-400 rounded-bl-sm" />
                )}
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-sm ${
                      isActive
                        ? 'bg-black/30 text-sky-200'
                        : 'bg-blue-100/70 dark:bg-blue-950/40 text-blue-700 dark:text-sky-300'
                    }`}
                  >
                    SYS 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-75">
                    {proj.category}
                  </span>
                </div>
                <div
                  className={`text-xs font-bold line-clamp-1 ${
                    isActive ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {proj.title}
                </div>
                <div className="text-[10px] font-mono mt-1 opacity-70 truncate">
                  {proj.systemMeta?.systemName || "Analytical Suite"}
                </div>
              </button>
            );
          })}
        </div>

        {/* Workstation Chassis / Browser Chrome Frame */}
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-blue-900/60 bg-[#030712] text-white shadow-2xl">
          {/* OS Window Titlebar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#060b18] border-b border-blue-950 text-xs">
            <div className="flex items-center space-x-3">
              {/* macOS Style Window Controls */}
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-4 w-px bg-blue-900/40" />
              <div className="flex items-center space-x-2 font-mono text-[11px] text-sky-300">
                <Laptop className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-semibold">{currentProject.systemMeta?.systemName}</span>
                <span className="text-blue-400 hidden sm:inline">
                  [{currentProject.systemMeta?.version}]
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center space-x-2 mt-2 sm:mt-0 font-mono text-[11px]">
              <button
                type="button"
                onClick={handleTriggerScan}
                disabled={isScanning}
                className="px-3 py-1 rounded-sm bg-blue-900/40 hover:bg-blue-800 text-sky-200 border border-blue-700/50 flex items-center space-x-1.5 transition-all disabled:opacity-50"
                title="Simulate Real-Time Telemetry Radar Scan"
              >
                <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'SCANNING...' : 'TRIGGER SCAN'}</span>
              </button>

              <button
                type="button"
                onClick={handleExportData}
                className="px-3 py-1 rounded-sm bg-blue-950 hover:bg-blue-900 text-sky-300 border border-blue-700/40 flex items-center space-x-1.5 transition-all"
                title="Download Scientific Dataset in CSV Format"
              >
                <Download className="w-3 h-3" />
                <span className="hidden sm:inline">EXPORT CSV</span>
              </button>

              <button
                type="button"
                onClick={() => setFullscreenModal(true)}
                className="p-1 rounded-sm bg-black/40 hover:bg-blue-900 text-sky-300 border border-blue-800/50 transition-all"
                title="Inspect High-Resolution Screenshot Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sub-Header HUD Toolbar: Layer Toggles & Coordinates */}
          <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-[#02050e] border-b border-blue-950 text-[11px] font-mono">
            <div className="flex items-center space-x-2 py-1 overflow-x-auto">
              <span className="text-slate-400 flex items-center mr-1">
                <Layers className="w-3 h-3 mr-1 text-sky-400" />
                LAYERS:
              </span>
              <button
                type="button"
                onClick={() => toggleLayer('topography')}
                className={`px-2 py-0.5 rounded-xs transition-colors ${
                  activeLayers.topography
                    ? 'bg-blue-600 text-white border border-blue-400'
                    : 'bg-black/30 text-gray-500 border border-transparent'
                }`}
              >
                Topography DEM
              </button>
              <button
                type="button"
                onClick={() => toggleLayer('drainage')}
                className={`px-2 py-0.5 rounded-xs transition-colors ${
                  activeLayers.drainage
                    ? 'bg-blue-600 text-white border border-blue-400'
                    : 'bg-black/30 text-gray-500 border border-transparent'
                }`}
              >
                Drainage Basin
              </button>
              <button
                type="button"
                onClick={() => toggleLayer('ndvi')}
                className={`px-2 py-0.5 rounded-xs transition-colors ${
                  activeLayers.ndvi
                    ? 'bg-blue-600 text-white border border-blue-400'
                    : 'bg-black/30 text-gray-500 border border-transparent'
                }`}
              >
                NDVI Flora
              </button>
              <button
                type="button"
                onClick={() => toggleLayer('sensors')}
                className={`px-2 py-0.5 rounded-xs transition-colors ${
                  activeLayers.sensors
                    ? 'bg-blue-600 text-white border border-blue-400'
                    : 'bg-black/30 text-gray-500 border border-transparent'
                }`}
              >
                Sensors Geofence
              </button>
            </div>

            {/* Live cursor coordinate readout */}
            <div className="flex items-center space-x-3 text-sky-400 py-1">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-sky-300" />
                <span>{cursorPos.lat}</span>
                <span>{cursorPos.lon}</span>
              </div>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <span className="text-sky-300 hidden sm:inline">{cursorPos.elev}</span>
            </div>
          </div>

          {/* Main Visual Viewport: Authentic System Screenshot with HUD Overlays */}
          <div
            ref={imageContainerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
            className="relative aspect-[16/9] w-full overflow-hidden bg-black cursor-crosshair select-none"
          >
            <img
              src={currentProject.image}
              alt={currentProject.imageAlt}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isScanning ? 'scale-[1.02] filter brightness-110' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />

            {/* Simulated Animated Radar Scan Sweep */}
            {isScanning && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/25 to-transparent h-24 w-full animate-[bounce_2s_infinite] pointer-events-none border-b-2 border-sky-400" />
            )}

            {/* Grid Reticle Overlay Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#38bdf830_1px,transparent_1px),linear-gradient(to_bottom,#38bdf830_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Floating Top Left System Badge */}
            <div className="absolute top-4 left-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-blue-700/50 text-left font-mono space-y-1 max-w-sm hidden sm:block">
              <div className="flex items-center justify-between text-[10px] text-sky-400 font-bold">
                <span>GEO-STATION OVERLAY</span>
                <span className="text-sky-300">4K RES</span>
              </div>
              <div className="text-xs font-bold text-white leading-tight">
                {currentProject.title}
              </div>
              <div className="text-[10px] text-sky-300/80">
                {currentProject.systemMeta?.stationCoordinates}
              </div>
            </div>

            {/* Floating Top Right Resolution & Zoom Lens Trigger */}
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-blue-700/50 text-[10px] font-mono text-sky-300">
                RES: {currentProject.systemMeta?.resolution}
              </span>
              <button
                type="button"
                onClick={() => setFullscreenModal(true)}
                className="px-2.5 py-1 rounded-sm bg-blue-600/90 hover:bg-blue-600 text-white border border-blue-400 text-[10px] font-mono flex items-center space-x-1 transition-colors"
              >
                <ZoomIn className="w-3 h-3" />
                <span>INSPECT</span>
              </button>
            </div>

            {/* Interactive Target Crosshair following mouse */}
            {isHoveringImage && (
              <div
                className="absolute pointer-events-none transition-transform duration-75"
                style={{
                  left: `${cursorPos.x}px`,
                  top: `${cursorPos.y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="w-8 h-8 rounded-full border border-sky-400/80 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                </div>
                <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 px-2 py-0.5 rounded-xs border border-blue-500/60 font-mono text-[9px] text-sky-300 shadow-md">
                  {cursorPos.lat}, {cursorPos.lon}
                </div>
              </div>
            )}

            {/* Bottom HUD Strip: Active Telemetry String */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col sm:flex-row sm:items-center justify-between text-left font-mono text-xs text-white">
              <div className="space-y-0.5">
                <span className="text-[10px] text-sky-400 uppercase tracking-widest font-semibold block">
                  TELEMETRY READOUT
                </span>
                <p className="text-xs text-slate-300 max-w-2xl">
                  {currentProject.systemMeta?.telemetrySnippet}
                </p>
              </div>
              <div className="mt-2 sm:mt-0 text-[10px] text-sky-300 shrink-0">
                STATION SENSOR CALIBRATION: OK
              </div>
            </div>
          </div>

          {/* Environmental Sensor Telemetry Gauges Matrix */}
          <div className="p-4 sm:p-6 bg-[#060b18] border-t border-blue-950">
            <div className="text-left mb-3 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                <Gauge className="w-3.5 h-3.5" />
                <span>Live Environmental Telemetry Gauges</span>
              </div>
              <span className="text-[10px] font-mono text-gray-400">
                UPDATED: JUST NOW
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-left">
              {getMetrics().map((metric, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#030712] border border-blue-900/40 hover:border-blue-700/60 transition-colors"
                >
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {metric.label}
                  </div>
                  <div className="flex items-baseline space-x-1 my-1">
                    <span className="text-lg sm:text-xl font-bold font-mono text-white">
                      {metric.value}
                    </span>
                    <span className="text-xs font-mono text-sky-400">
                      {metric.unit}
                    </span>
                  </div>
                  <div className="text-[9px] font-mono text-gray-400 truncate">
                    {metric.benchmark}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time System Console Log Terminal */}
          <div className="p-4 bg-black/90 border-t border-blue-950 text-left font-mono text-xs">
            <div className="flex items-center space-x-2 text-[10px] text-sky-300 font-bold uppercase tracking-wider mb-2">
              <Terminal className="w-3 h-3 text-sky-400" />
              <span>Diagnostic System Event Log</span>
            </div>
            <div className="space-y-1 text-[11px] text-sky-300/90 font-mono max-h-24 overflow-y-auto pr-2">
              {terminalLogs.map((log, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-blue-500 select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen System Screenshot Inspector Modal */}
      {fullscreenModal && (
        <div
          id="system-fullscreen-modal"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-3 border-b border-blue-900/40 font-mono text-xs text-white">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="font-bold text-sky-300">
                {currentProject.systemMeta?.systemName} — FULLSCREEN WORKSTATION
              </span>
              <span className="text-gray-400 hidden sm:inline">
                [{currentProject.systemMeta?.resolution}]
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleExportData}
                className="px-3 py-1 rounded-sm bg-blue-600 text-white hover:bg-blue-500 text-[11px] flex items-center space-x-1"
              >
                <Download className="w-3 h-3" />
                <span>Export Data</span>
              </button>
              <button
                type="button"
                onClick={() => setFullscreenModal(false)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* High-Resolution Viewport */}
          <div className="flex-1 my-3 overflow-auto flex items-center justify-center relative bg-[#060b18] rounded-lg border border-blue-900/30">
            <img
              src={currentProject.image}
              alt={currentProject.imageAlt}
              className="max-h-full max-w-full object-contain rounded-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Modal Footer Telemetry */}
          <div className="pt-3 border-t border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left font-mono text-xs text-slate-400">
            <div>
              <span className="text-sky-300 font-bold">{currentProject.title}</span> — {currentProject.systemMeta?.stationCoordinates}
            </div>
            <div className="mt-1 sm:mt-0 text-sky-400">
              Active Layers: {currentProject.systemMeta?.activeLayers.join(', ')}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
