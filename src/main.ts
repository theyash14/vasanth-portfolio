import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="canva-root">
    <iframe 
      src="https://www.canva.com/design/DAG9LPAIYhk/9g-j-tAqWqPAa1_o3et3yg/view?embed"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
`;