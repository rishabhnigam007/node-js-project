const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const { application } = require("express");
const req = require("express/lib/request");
const bodyParser = require("body-parser");
const Contact = require("./models/Contact");

// need to parse first otherwise route cannot find your parser
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use("/static", express.static("public"));
app.use("", routes);


// template engine configuration
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// DB connection
mongoose.connect("mongodb://localhost/node_project", () => {
    console.log("database connected !!");
    // Detail.create({
    //     brandName: "Rishabh Solution",
    //     brandIconUrl: "/static/images/logo.png",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/#services_section"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/#about_section"
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/#contact_us_section"
    //         }
    //     ]
    // })

    // Slider.create(
    //     {
    //         title: "Java",
    //         subTitle: "full java basics courses",
    //         imageUrl: "/static/images/slider1.jpeg"
    //     },
    //     {
    //         title: "Python",
    //         subTitle: "full python basics courses",
    //         imageUrl: "/static/images/slider2.jpg"
    //     },
    //     {
    //         title: "Php",
    //         subTitle: "full php basics courses",
    //         imageUrl: "/static/images/slider3.jpg"
    //     }
    // )

    // Service.create(
    //     {
    //         icon: 'fab fa-accusoft',
    //         title: 'Provide best services',
    //         description: 'We provide best courses that help our student in placement',
    //         link: 'https://www.linkedin.com/rishabhnigam007',
    //         linkText: 'Check'
    //     },
    //     {
    //         icon: 'fab fa-affiliatetheme',
    //         title: 'Provide best services',
    //         description: 'We provide best courses that help our student in placement',
    //         link: 'https://www.facebook.com/rishabhnigam007',
    //         linkText: 'Check'
    //     },
    //     {
    //         icon: 'fab fa-affiliatetheme',
    //         title: 'Provide best services',
    //         description: 'We provide best courses that help our student in placement',
    //         link: 'https://www.facebook.com/rishabhnigam007',
    //         linkText: 'Check'
    //     }
    // )

    // Contact.create(
    //     {
    //         email: '',
    //         phone: '',
    //         query: ''
    //     }
    // )

    // comment because if not commented everytime database will be created
});

app.listen(process.env.PORT | 5556, () => {
    console.log("server started");
});