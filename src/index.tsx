import { createRoot } from "react-dom";
import App from './components/app';
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);