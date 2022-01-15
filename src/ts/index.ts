import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Partners } from "./components/Partners";
import { RendererEngine } from "./RendererEngine";

new RendererEngine({
  components: [Header, Banner, Description, Gallery, Contact, Partners, Footer],
  root: "#app-main",
}).init();

console.log("Renderer engine running");
