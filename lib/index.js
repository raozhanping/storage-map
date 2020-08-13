"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    constructor(storage) {
        if (!storage) {
            throw new TypeError(`WindowStorage: Arguments 'storage' is required.`);
        }
    }
    set() {
        throw new TypeError(`Storage: method 'set' of Storage is undefined.`);
    }
    get() {
        throw new TypeError(`Storage: method 'get' of Storage is undefined.`);
    }
    has() {
        throw new TypeError(`Storage: method 'has' of Storage is undefined.`);
    }
    delete() {
        throw new TypeError(`Storage: method 'delete' of Storage is undefined.`);
    }
    clear() {
        throw new TypeError(`Storage: method 'clear' of Storage is undefined.`);
    }
}
class WindowStorage extends Storage {
    constructor(storage) {
        super(storage);
        this.storage = storage;
    }
    set(key, value) {
        value = JSON.stringify(value);
        if (value) {
            this.storage.setItem(key, value);
        }
        else {
            this.delete(key, value);
        }
    }
    get(key) {
        const result = this.storage.getItem(key);
        return JSON.parse(result);
    }
    has(key) {
        return this.storage.key(key);
    }
    delete(key) {
        return this.storage.removeItem(key);
    }
    clear() {
        this.storage.clear();
    }
}
class PureStorage extends Storage {
    constructor(storage) {
        super(storage);
        this.storage = storage;
    }
    set(key, value) {
        if (value) {
            this.storage.setItem(key, value);
        }
        else {
            this.delete(key, value);
        }
    }
    get(key) {
        return this.storage.getItem(key);
    }
    has(key) {
        return this.storage.key(key);
    }
    delete(key) {
        return this.storage.removeItem(key);
    }
}
class LocalStorage extends WindowStorage {
    constructor() {
        super(window.localStorage);
    }
}
class SessionStorage extends WindowStorage {
    constructor() {
        super(window.sessionStorage);
    }
}
function createStorage(type) {
    if (type === 'localStorage') {
        return new LocalStorage();
    }
    else if (type === 'sessionStorage') {
        return new SessionStorage();
    }
}
exports.default = createStorage;
