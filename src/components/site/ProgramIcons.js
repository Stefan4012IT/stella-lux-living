export function ProgramIcon({ index }) {
  const icons = [
    <svg key="english" viewBox="0 0 80 80" fill="none">
      <path d="M20 22c0-5 4-9 9-9h31v43H29c-5 0-9 4-9 9V22Z" fill="#adcbe0" />
      <path d="M24 23c0-3 2-5 5-5h26v37H29c-2 0-4 .6-5 1.8V23Z" fill="#fff7df" />
      <path d="M32 31h15M32 40h19" stroke="#23495c" strokeWidth="4" strokeLinecap="round" />
      <path d="M54 13v43" stroke="#f0c66f" strokeWidth="5" strokeLinecap="round" />
      <circle cx="52" cy="61" r="6" fill="#df5565" />
    </svg>,
    <svg key="science" viewBox="0 0 80 80" fill="none">
      <path d="M34 14h12v16l14 24c4 7-1 15-9 15H29c-8 0-13-8-9-15l14-24V14Z" fill="#fff7df" />
      <path d="M28 48h24l8 14c2 4-1 7-5 7H25c-4 0-7-3-5-7l8-14Z" fill="#adcbe0" />
      <path d="M32 14h16" stroke="#23495c" strokeWidth="4" strokeLinecap="round" />
      <circle cx="36" cy="55" r="3" fill="#f0c66f" />
      <circle cx="46" cy="61" r="4" fill="#df5565" />
      <circle cx="43" cy="48" r="2.5" fill="#7dae79" />
    </svg>,
    <svg key="art" viewBox="0 0 80 80" fill="none">
      <path d="M20 51c0-18 14-32 32-29 11 2 15 12 8 19-4 4-2 8 2 11 5 4 1 12-7 14-19 5-35-2-35-15Z" fill="#fff7df" />
      <circle cx="34" cy="37" r="4" fill="#df5565" />
      <circle cx="46" cy="33" r="4" fill="#f0c66f" />
      <circle cx="51" cy="47" r="4" fill="#7dae79" />
      <circle cx="37" cy="53" r="4" fill="#adcbe0" />
      <path d="M57 20l7-7 3 3-7 7-5 2 2-5Z" fill="#23495c" />
    </svg>,
    <svg key="outdoor" viewBox="0 0 80 80" fill="none">
      <circle cx="57" cy="22" r="9" fill="#f0c66f" />
      <path d="M16 62c8-15 16-24 25-24s17 9 25 24H16Z" fill="#7dae79" />
      <path d="M18 62c7-10 13-15 20-15s13 5 20 15H18Z" fill="#adcbe0" />
      <path d="M27 40c3-9 10-16 18-20" stroke="#23495c" strokeWidth="4" strokeLinecap="round" />
      <path d="M44 20c-8-2-14 1-17 8 8 2 14-1 17-8Z" fill="#8fbe83" />
    </svg>,
    <svg key="culture" viewBox="0 0 80 80" fill="none">
      <path d="M18 28h44v34H18V28Z" fill="#fff7df" />
      <path d="M22 33h36v24H22V33Z" fill="#adcbe0" />
      <path d="M16 28l24-13 24 13H16Z" fill="#f0c66f" />
      <path d="M28 62V43M40 62V43M52 62V43" stroke="#23495c" strokeWidth="4" strokeLinecap="round" />
      <circle cx="40" cy="27" r="4" fill="#df5565" />
    </svg>,
    <svg key="practical" viewBox="0 0 80 80" fill="none">
      <path d="M21 32h38v27c0 5-4 9-9 9H30c-5 0-9-4-9-9V32Z" fill="#f7d9a8" />
      <path d="M27 32v-4c0-7 6-12 13-12s13 5 13 12v4" stroke="#23495c" strokeWidth="5" strokeLinecap="round" />
      <path d="M21 40h38" stroke="#fff7df" strokeWidth="5" />
      <circle cx="32" cy="51" r="4" fill="#df5565" />
      <circle cx="48" cy="51" r="4" fill="#7dae79" />
    </svg>,
    <svg key="project" viewBox="0 0 80 80" fill="none">
      <rect x="18" y="20" width="44" height="42" rx="8" fill="#fff7df" />
      <path d="M27 34h26M27 45h18" stroke="#23495c" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 61l8-10 8 10 9-14 9 14H24Z" fill="#adcbe0" />
      <circle cx="55" cy="27" r="6" fill="#f0c66f" />
      <path d="M24 20h32" stroke="#df5565" strokeWidth="5" strokeLinecap="round" />
    </svg>,
    <svg key="emotional" viewBox="0 0 80 80" fill="none">
      <path d="M40 66S18 53 18 34c0-9 7-16 16-16 5 0 9 2 12 6 3-4 7-6 12-6 9 0 16 7 16 16 0 19-22 32-34 32Z" fill="#f1b7c6" />
      <path d="M31 39c3 5 15 5 18 0" stroke="#fff7df" strokeWidth="5" strokeLinecap="round" />
      <circle cx="32" cy="33" r="3" fill="#23495c" />
      <circle cx="48" cy="33" r="3" fill="#23495c" />
      <path d="M40 66S27 58 22 47c12 3 24 3 36 0-5 11-18 19-18 19Z" fill="#adcbe0" opacity=".45" />
    </svg>,
    <svg key="sport" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="25" fill="#fff7df" />
      <path d="M40 15c7 5 11 13 11 25S47 60 40 65c-7-5-11-13-11-25s4-20 11-25Z" fill="#adcbe0" />
      <path d="M18 35c7-4 14-6 22-6s15 2 22 6M18 45c7 4 14 6 22 6s15-2 22-6" stroke="#23495c" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 16v48" stroke="#df5565" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 24c11 7 21 7 32 0M24 56c11-7 21-7 32 0" stroke="#f0c66f" strokeWidth="4" strokeLinecap="round" />
    </svg>,
  ];

  return <span className="icon-badge">{icons[index % icons.length]}</span>;
}

export function MealIcon({ index }) {
  const icons = [
    <svg key="cake" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="66" rx="25" ry="7" fill="#d7a764" opacity=".35" />
      <path d="M23 38h34v20c0 5-4 9-9 9H32c-5 0-9-4-9-9V38Z" fill="#f7d9a8" />
      <path d="M26 47h28v8H26v-8Z" fill="#fff3d8" />
      <path d="M23 38c0-5 4-9 9-9h16c5 0 9 4 9 9v2H23v-2Z" fill="#f1b7c6" />
      <path d="M32 29c2-7 14-7 16 0H32Z" fill="#fff2c7" />
      <path d="M40 18c4 0 7 3 7 7H33c0-4 3-7 7-7Z" fill="#df5565" />
      <path d="M40 18c1-4 5-6 8-5-1 4-4 6-8 5Z" fill="#74a76b" />
      <circle cx="32" cy="45" r="2" fill="#df5565" />
      <circle cx="48" cy="45" r="2" fill="#df5565" />
    </svg>,
    <svg key="fruit" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="66" rx="25" ry="7" fill="#adcbe0" opacity=".35" />
      <path d="M25 36c0-8 6-14 14-14h2c8 0 14 6 14 14v10c0 10-7 18-15 18S25 56 25 46V36Z" fill="#f0c66f" />
      <path d="M39 23c-2-7 4-11 9-12 1 7-3 12-9 12Z" fill="#7dae79" />
      <path d="M39 24c0-5-2-8-5-11" stroke="#8c753d" strokeWidth="3" strokeLinecap="round" />
      <circle cx="48" cy="42" r="11" fill="#df5565" />
      <circle cx="51" cy="39" r="3" fill="#fff0f0" opacity=".8" />
      <path d="M48 31c-2-4 2-7 6-7 .5 4-2 7-6 7Z" fill="#6fa76d" />
    </svg>,
    <svg key="lunch" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="66" rx="26" ry="7" fill="#8db0c4" opacity=".28" />
      <path d="M18 43c0-13 10-23 22-23s22 10 22 23H18Z" fill="#fff7df" />
      <path d="M22 43c2-10 9-17 18-17s16 7 18 17H22Z" fill="#f7d9a8" />
      <path d="M17 43h46v5c0 9-7 16-16 16H33c-9 0-16-7-16-16v-5Z" fill="#adcbe0" />
      <circle cx="31" cy="36" r="4" fill="#7dae79" />
      <circle cx="41" cy="33" r="4" fill="#df5565" />
      <circle cx="50" cy="38" r="3" fill="#f0c66f" />
    </svg>,
    <svg key="snack" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="66" rx="24" ry="7" fill="#d7a764" opacity=".32" />
      <path d="M25 34h30l-3 28H28l-3-28Z" fill="#fff3d8" />
      <path d="M25 34h30l-2 8H27l-2-8Z" fill="#f0c66f" />
      <path d="M31 34c0-8 5-14 12-14s12 6 12 14H31Z" fill="#f7d9a8" />
      <path d="M37 41h16" stroke="#f1b7c6" strokeWidth="4" strokeLinecap="round" />
      <path d="M33 50h20" stroke="#adcbe0" strokeWidth="4" strokeLinecap="round" />
      <circle cx="23" cy="27" r="5" fill="#df5565" />
    </svg>,
  ];

  return <span className="icon-badge icon-badge--large">{icons[index % icons.length]}</span>;
}
