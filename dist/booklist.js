"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whatbook_1 = require("./whatbook");
class BookList extends whatbook_1.WhatBook {
    constructor() {
        super(...arguments);
        this.booklist = [];
    }
}