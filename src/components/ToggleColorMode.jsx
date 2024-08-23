import IconButton from "@mui/material/IconButton";
import SunnyIcon from "@mui/icons-material/WbSunnyRounded";
import NightIcon from "@mui/icons-material/ModeNightRounded";

export default function ToggleColorMode({ mode, toggle }) {
  return (
    <IconButton onClick={toggle} color="primary">
      {mode === "dark" ? <SunnyIcon /> : <NightIcon />}
    </IconButton>
  );
}
