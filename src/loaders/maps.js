import maps from "../databaseMap.json";

export function loadMapsList() {
  return { maps };
}

export function loadMapDetails({ params }) {
  const map = maps.find((m) => m.id === +params.mapId);

  if (!map) {
    throw new Response("Not found", { status: 404 });
  }

  return { map };
}

