import { DB } from "foia-db";

window.onload = (): void => {
  // @ts-ignore
  const root: HTMLElement = document.getElementById("root");
  root.append(`<div class="title">The Sword</div>`);
  root.append(`<div class="author">Ari Chivukula</div>`);
  root.append(`<br />`);
  Object.keys(DB.scene).forEach(
    (scene_idx) => {
      root.append(`<div class="located location-name" title="${DB.location[DB.scene[scene_idx].location].description}">${DB.scene[scene_idx].exposed}. ${DB.scene[scene_idx].location} - ${DB.scene[scene_idx].time}</div>`);
      let next_is_spoken: boolean = false;
      DB.scene[scene_idx].lines.forEach(
        (line) => {
          if (DB.character.hasOwnProperty(line)) {
            root.append(`<div class="speaker character-name" title="${DB.character[line].description}">${line}</div>`);
            next_is_spoken = true;
          } else if (next_is_spoken) {
            root.append(`<div class="spoken">${line}</div>`);
            next_is_spoken = false;
          } else {
            root.append(`<div class="narrated">${line}</div>`);
          }
        },
      );
    },
  );
};
