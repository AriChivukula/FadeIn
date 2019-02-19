const DB: any = FOIA_DB;

window.onload = (): void => {
  // @ts-ignore
  const root: HTMLElement = document.getElementById("root");
  root.insertAdjacentHTML("beforeend", `<div class="title">The Sword</div>`);
  root.insertAdjacentHTML("beforeend", `<div class="author">Ari Chivukula</div>`);
  root.insertAdjacentHTML("beforeend", `<br />`);
  DB.vertices.filter((vert: any) => vert.label === "scene").sort((a: any, b: any) => parseInt(a.id) - parseInt(b.id)).forEach(
    (vert: any) => {
      const lMatches = DB.vertices.filter((v: any) => v.label === "location").filter((v: any) => v.id === vert.properties["location"].id);
      root.insertAdjacentHTML("beforeend", `<div class="located location-name" title="${lMatches[0].properties["description"].id}">${vert.properties["exposure"].id}. ${vert.properties["location"].id} - ${vert.properties["time"].id}</div>`);
      let next_is_spoken: boolean = false;
      vert.properties["lines"].id.forEach(
        (line: string) => {
          const cMatches = DB.vertices.filter((v: any) => v.label === "character").filter((v: any) => v.id === line);
          if (cMatches.length > 0) {
            root.insertAdjacentHTML("beforeend", `<div class="speaker character-name" title="${cMatches[0].properties["description"].id}">${line}</div>`);
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
