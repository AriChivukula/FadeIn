const DB: any = FOIA_DB;

window.onload = (): void => {
  // @ts-ignore
  const root: HTMLElement = document.getElementById("root");
  root.insertAdjacentHTML("beforeend", `<div class="title">The Sword</div>`);
  root.insertAdjacentHTML("beforeend", `<div class="author">Ari Chivukula</div>`);
  root.insertAdjacentHTML("beforeend", `<br />`);
  Object.keys(DB.vertices.filter(vert => vert.label === "VL-scene")).forEach(
    (vert) => {
      const lMatches = DB.vertices.filter(vert => vert.label === "VL-location").filter(vert => vert.id === vert.properties.location);
      root.insertAdjacentHTML("beforeend", `<div class="located location-name" title="${lMatches[0].properties.description}">${vert.properties.exposure}. ${vert.properties.location} - ${vert.properties.time}</div>`);
      let next_is_spoken: boolean = false;
      vert.properties.lines.forEach(
        (line: string) => {
          const cMatches = DB.vertices.filter(vert => vert.label === "VL-character").filter(vert => vert.id === line);
          if (cMatches.length > 0) {
            root.insertAdjacentHTML("beforeend", `<div class="speaker character-name" title="${cMatches[0].properties.description}">${line}</div>`);
            next_is_spoken = true;
          } else if (next_is_spoken) {
            root.insertAdjacentHTML("beforeend", `<div class="spoken">${line}</div>`);
            next_is_spoken = false;
          } else {
            root.insertAdjacentHTML("beforeend", `<div class="narrated">${line}</div>`);
          }
        },
      );
    },
  );
};
