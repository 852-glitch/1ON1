export default function LiquidBanner() {
  return (
    <div className="w-full h-[200px] md:h-[300px] relative overflow-hidden bg-surface-low border-y border-outline-variant/10">
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-label text-[10px] uppercase tracking-[0.2em] text-outline pointer-events-none z-10 opacity-50">
        Drag to interact · Click to spawn
      </div>
    </div>
  );
}

/* TODO: Replace with full Three.js liquid banner component from your local files */
