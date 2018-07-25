import { DB } from "foia-db";

window.onload = (): void => {
  // @ts-ignore
  const root: HTMLElement = document.getElementById("root");
  root.insertAdjacentHTML("beforeend", `<div class="title">The Sword</div>`);
  root.insertAdjacentHTML("beforeend", `<div class="author">Ari Chivukula</div>`);
  root.insertAdjacentHTML("beforeend", `<br />`);
  Object.keys(DB.scene).forEach(
    (scene_idx) => {
      root.insertAdjacentHTML("beforeend", `<div class="located location-name" title="${DB.location[DB.scene[scene_idx].location].description}">${DB.scene[scene_idx].exposed}. ${DB.scene[scene_idx].location} - ${DB.scene[scene_idx].time}</div>`);
      let next_is_spoken: boolean = false;
      DB.scene[scene_idx].lines.forEach(
        (line: string) => {
          if (DB.character.hasOwnProperty(line)) {
            root.insertAdjacentHTML("beforeend", `<div class="speaker character-name" title="${DB.character[line].description}">${line}</div>`);
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
