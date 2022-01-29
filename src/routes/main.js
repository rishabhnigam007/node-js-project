const { request, response } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const async = require("hbs/lib/async");
const Contact = require("../models/Contact");

const Detail = require("../models/Detail");
const Service = require("../models/Service");
const Slider = require("../models/Slider");

const routes = express.Router();

routes.get("/", async (request, response) => {
    // response.send("wow this data come from routes")
    const details = await Detail.findOne({ _id: "61f53732ec0e45e8a71f3f33" });
    const slides = await Slider.find();
    //console.log(slides)
    const services = await Service.find();
    response.render("index", {
        details: details,
        slides: slides,
        services: services
    });
});

routes.get("/gallery", async (request, response) => {
    // response.send("wow this data come from routes")
    const details = await Detail.findOne({ _id: "61f53732ec0e45e8a71f3f33" });
    response.render("gallery", {
        details: details,
    });
});

routes.get("/services", async (request, response) => {
    // response.send("wow this data come from routes")
    const details = await Detail.findOne({ _id: "61f53732ec0e45e8a71f3f33" });
    response.render("services", {
        details: details,
    });
});

routes.get("/about", async (request, response) => {
    // response.send("wow this data come from routes")
    const details = await Detail.findOne({ _id: "61f53732ec0e45e8a71f3f33" });
    response.render("about", {
        details: details,
    });
});

routes.get("/contact", async (request, response) => {
    // response.send("wow this data come from routes")
    const details = await Detail.findOne({ _id: "61f53732ec0e45e8a71f3f33" });
    response.render("contact", {
        details: details,
    });
});

//process contact form
routes.post("/process-contact-form", async (request, response) => {
    console.log("data send successfully")
    console.log(request.body)
    // save the data to db
    try {
        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    } catch (error) {
        console.log(error)
        response.redirect("/")
    }
})

module.exports = routes;