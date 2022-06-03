import Dexie from 'dexie';
import { getUuid } from '@src/helper';

const db = new Dexie('OnePiece');

db.version(1).stores({
    pages: '++id, &sid, &title, &create_time, creator, url_online, status',
    content: '++id, &pageId, &sid, &create_time, components, pageConfig',
    history: '++id, &pageId, &sid, &create_time, components, pageConfig',
});

export default db;

exports.pages = {
    search: async (searchKey) => {
        let items = [];
        if (searchKey) {
            items = await db.pages
                .where('title')
                .equals(searchKey)
                .offset(0)
                .limit(10)
                .reverse()
                .toArray();
        } else {
            items = await db.pages.offset(0).limit(10).reverse().toArray();
        }
        return items;
    },
    add: async (title) => {
        if (title) {
            let page = {
                title,
                sid: getUuid(),
                create_time: Date.now(),
                creator: '',
                status: '下线',
                url_online: '',
            };
            try {
                let pageId = await db.pages.add(page);
                await db.content.add({
                    pageId,
                    sid: page.sid,
                    components: [],
                    pageConfig: {},
                    create_time: Date.now(),
                });
                return true;
            } catch (err) {
                console.log('---->', err);
                return false;
            }
        }
    },
};

exports.content = {
    findBySid: async (sid) => {
        return await db.content.get({ sid });
    },
    update: async (sid, value) => {
        return await db.content.get({ sid }).modify(value);
    },
    goStep: async (sid, hid) => {
        try {
            let hc = await db.history.get({ sid, id: hid });
            await db.content.get({ sid }).modify({
                components: hc.components,
                pageConfig: hc.pageConfig,
            });
            await db.history
                .where('create_time')
                .above(hc.create_time)
                .delete();
            return true;
        } catch (err) {
            return false;
        }
    },
};

exports.history = {
    list: async (sid) => {
        return await db.history
            .where('sid')
            .equals(sid)
            .reverse()
            .sortBy('create_time')
            .toArray();
    },
};
