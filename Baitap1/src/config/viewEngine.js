import express from "express"; 
// cú pháp tương đương : var express = require('express');

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); //Thiết lập thư mục tĩnh chứa images,
    app.set("view engine", "ejs"); //thiết lập viewEngine
    app.set("views", "./src/views") // thư mục chứa views
}

module.exports = configViewEngine; // hàm xuất ra