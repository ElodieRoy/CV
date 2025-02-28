export function ProgressBar() {
  return (
    <div id="progress-bar" className="relative h-1 bg-foreground2">
      <span
        id="progress-bar-start"
        className="absolute -top-1 rounded-full bg-primary size-3 z-1"
      />
      <span className="absolute -top-1 right-0 rounded-full bg-foreground2 size-3 z-1" />
      <span
        id="progress-bar-end"
        className="absolute -top-1 right-0 rounded-full bg-primary size-3 z-2"
      />
      <div id="progress" className="h-full bg-primary" />
    </div>
  );
}
