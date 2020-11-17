let db;
export function createDB(){
    return new Promise((res, rej)=>{
        let dbReq = indexedDB.open('myDB', 1);
        dbReq.onupgradeneeded = (event) => {
            db = event.target.result;

            if (!db.objectStoreNames.contains("heroes")) {
                let objectStore = db.createObjectStore("heroes", {autoIncrement: true})
                objectStore.createIndex("name", "name", {unique: false});
                objectStore.createIndex("email", "email", {unique: true});
            }
        }
        dbReq.onsuccess = (event) => {
            db = event.target.result;
            res(db)
        }
        dbReq.onerror = (event) => {
            alert('error opening database ' + event.target.errorCode);
        }
    })
}
createDB()

const addStickyNote = (db, obj) => {
    let tx = db.transaction(['heroes'], 'readwrite');
    let store = tx.objectStore('heroes');
    store.add(obj);
    tx.oncomplete = () => {
        console.log('stored note!')
    }
    tx.onerror = (event) => {
        alert('error storing note ' + event.target.errorCode);
    }
}

export function addToDb(obj) {
    addStickyNote(db, obj)
}


