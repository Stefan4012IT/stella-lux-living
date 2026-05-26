export default function CloudBreak({ tone, direction = "forward" }) {
  const classes = [
    "cloud-break",
    tone === "blue" ? "cloud-break--white" : "cloud-break--cream",
  ].join(" ");
  const driftClass = direction === "reverse" ? "cloud-drift-reverse" : "cloud-drift-forward";

  return (
    <div className={classes} aria-hidden="true">
      <svg className={driftClass} viewBox="0 0 760 120" fill="none">
        <g fill="currentColor">
          <ellipse cx="86" cy="70" rx="54" ry="34" />
          <ellipse cx="142" cy="54" rx="66" ry="45" />
          <ellipse cx="214" cy="74" rx="58" ry="36" />
          <ellipse cx="271" cy="66" rx="38" ry="28" opacity=".82" />
        </g>
        <g fill="currentColor" opacity=".72">
          <ellipse cx="356" cy="82" rx="52" ry="29" />
          <ellipse cx="414" cy="69" rx="68" ry="42" />
          <ellipse cx="490" cy="86" rx="56" ry="31" />
        </g>
        <g fill="currentColor" opacity=".9">
          <ellipse cx="590" cy="61" rx="52" ry="33" />
          <ellipse cx="647" cy="50" rx="63" ry="42" />
          <ellipse cx="706" cy="70" rx="42" ry="29" />
        </g>
      </svg>
    </div>
  );
}
