import Dexie from "dexie";

const db = new Dexie("OnePiece");

db.version(1).stores({
    pages: "++id, sid, &title, &create_time, creator, url_online, status",
    content: "++id, &pageId, components",
});

export default db;
