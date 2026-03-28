import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="canva-root">
    <iframe 
      id="canvaFrame"
      src="https://www.canva.com/design/DAG9LPAIYhk/9g-j-tAqWqPAa1_o3et3yg/view?embed"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
`;

const iframe = document.getElementById("canvaFrame") as HTMLIFrameElement;

/* FADE IN WHEN LOADED */
iframe.onload = () => {
  iframe.classList.add("loaded");
};