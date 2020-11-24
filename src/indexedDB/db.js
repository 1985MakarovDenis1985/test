let db;

export function createDB() {
    return new Promise((res, rej) => {
        let dbReq = indexedDB.open('myDB', 1);
        dbReq.onupgradeneeded = (event) => {
            db = event.target.result;

            if (!db.objectStoreNames.contains("heroes")) {
                let objectStore = db.createObjectStore("heroes", {autoIncrement: true})
                // указываем через какой индекс будет указан путь к ключу
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

// createDB()

export const addNote = (obj) => {
    let tx = db.transaction(['heroes'], 'readwrite');
    let store = tx.objectStore('heroes');
    store.add(obj);
    tx.oncomplete = () => {
        console.log('heroes has been added...!')
    }
    tx.onerror = (event) => {
        alert('already exist ' + event.target.errorCode);
    }
}

export const getAllNote = () => {
    return new Promise((res, rej)=>{
        let tx = db.transaction(['heroes'], 'readonly');
        let store = tx.objectStore('heroes')
        let req = store.getAll()
        req.onsuccess = (e) => {
            let collection = e.target.result
            if (collection) {
                res(collection)
                // console.log(collection);
            } else {
                console.log("note 1 not found")
            }
        }
    })

}

// получаем объект по индексу
export const getNote = () => {
    let tx = db.transaction(['heroes'], 'readonly');
    let store = tx.objectStore('heroes')
    let req = store.get(1)
    req.onsuccess = (e) => {
        let note = e.target.result
        if (note) {
            console.log(note);
        } else {
            console.log("note 1 not found")
        }
    }
}

// получаем объект по пути к индексу (name или тот который указан при создании базы)
export const getNoteByKey = (keyPath) => {
    let tx = db.transaction(['heroes'], 'readonly')
    let store = tx.objectStore('heroes')

    // указываем путь к ключу для определения индекса
    let index = store.index('name')
    let request = index.getKey(keyPath)

    request.onsuccess = () => {
        let result = request.result
        console.log(result)
    }
    request.onerror = () => {
        console.log("error.....")
    }
}

export const getNotesByCursors = () => {
    let tx = db.transaction(['heroes'], 'readonly')
    let store = tx.objectStore('heroes')

    // Создать запрос курсора
    let request = store.openCursor()
    // // если бы мы хотели только заметки за прошедший час,
    // let anHourAgoInMilliseconds = Date.now() - 60 * 60 * 1000;
    // // IDBKeyRange - глобальная переменная для определения диапазонов для запроса
    // let keyRange = IDBKeyRange.lowerBound(anHourAgoInMilliseconds);
    // let req = index.openCursor(keyRange, 'next');


    let allHeroes = []
    let allTheSameName = []

    request.onsuccess = (e) => {
        let cursor = e.target.result
        // если объекты(курсоры) существуют - делаем smt и продолжаем перебирать
        if (cursor != null) {
            allHeroes.push(cursor.value)
            if (cursor.value.name === "Denys") {
                allTheSameName.push(cursor.value)
            }
            cursor.continue()
        } else {
            console.log("================= cursors was ended =================")
            // console.log("=================")
        }
        console.log("all items: ", allHeroes)
        console.log("special cursors: ", allTheSameName)
    }
    request.onerror = (e) => {
        console.log("error..... ")
    }
}

export const removeItem = (e) => {
    const indexName = e.target.dataset.name

    let tx = db.transaction(['heroes'], 'readwrite')
    let store = tx.objectStore('heroes')

    let index = store.index("name")
    let request = index.getKey(indexName);
    request.onsuccess = (e) => {
        let result = request.result
        let deleteRequest = store.delete(result)
        deleteRequest.onsuccess = () => {
            console.log("item has been deleted")
        }
    }


}

export const removeAllCollection = () => {
    let transaction = db.transaction(["images"], "readwrite")
    let store = transaction.objectStore("images");
    store.clear()
}

export const putImg = () => {
    let tx = db.transaction(['heroes'], 'readwrite')
    let store = tx.objectStore('heroes')
    let inpImg = document.getElementById("fileImg")
    store.put(inpImg.files[0], 'img')

    store.get("img").onsuccess = (e) => {
        let imgFile = e.target.result;
        let URL = window.URL || window.webkitURL;
        let imgUrl = URL.createObjectURL(imgFile);
        document.getElementById("temp_img").setAttribute("src", imgUrl);
    }
}

    // function toDataURL(url, callback) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function() {
    //         var reader = new FileReader();
    //         reader.onloadend = function() {
    //             callback(reader.result);
    //         }
    //         reader.readAsDataURL(xhr.response);
    //     };
    //     xhr.open('GET', url);
    //     xhr.responseType = 'blob';
    //     xhr.send();
    // }
    //
    // toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
    //     console.log('RESULT:', dataUrl)
    // })




