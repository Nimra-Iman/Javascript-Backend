// package is a collection of modules, e.g So numpy is definitely a package, 
// since it includes several sub-packages, 
//    ====>>>>NPM is a package manager for Node.js packages, or modules if you like.
//  www.npmjs.com hosts thousands of free packages to download and use.
//     ===>>> npm is used as a package manager to handle dependencies. A dependency is a software 
// that must be installed for your package to function correctly (or at all).
//   ====>>>   You can easily define your dependencies inside a pacakge. json file, 
// which you will find included in all code packages on npm.


// ===========>>>>>>>> To initializa an npm project, write in terminal: "npm init"
// esa likhny s vo is "javascript backend" valy folder ko as an npm project initializa kry ga 
// q k hmy packages chahye us ko use krny k liye dependencies chahye or dependencies ko
// manage krny k liye npm chahye that's why phly is folder ko as an npm project 
// initializa kryn gy
// esa likhny s hm s vo bhhtt s swal poochy ga k package ka name kia rkhna h, description
// kia rkhni h etc etc, sometimes hmy ek quickly npm project initialize krna hota h 
// is liye hm command likhty hn "npm init -y" or y likhty hi folder npm project k tor
// pr initialize ho jay ga or "package.json" ki file bny gi


// npm i pdf-creator-node likhny s "node_modules" name ka folder bny ga jis k ander saary
// third party packages mojod hoty hn, hm n sirf ek pdf vala package install kia but
// bhhhtttt saaarrryyy ho gay q k un packages ki dependencies ki bhi dependencies thi,
// project ki saary dependencies node_module valy folder k ander jati hn
// or "node_module" folder ko create krny ki jaankari package.json k ander a jay gi

// ab m "javascript backend" vala folder zip file bna kr saary files send kr skti hu kisi ko
// or jab us ko y project apni system m chlana ho ga to vo likhy ga "npm install " run kry ga
// jis s "node_module" ka folder us k paas ban jay ga yani us package ko chalany ki
// saari dependencies bhi a jayn gi us k paas("npm install" likhny ka matlab hi y h k 
// package.json k ander jao or saari dependencies ko install kr do), of course hm node_module
// vala folder send nhi kryn gy q k y bhhhhttt bara folder h 
// isi "npm install" ki jga hm "yarn add" bhi likh skty hn, yarn is also a package manager
// but stick to one manager yani agar yarn use krna h to yarn hi kro vrna npm hi kro
// yarn tora fast instalation krta h as compared to npm

// ab m n vo pdf vala install to kr lia ab m is ki madad s un saary pacakges ko use kru gi
// jis s ek pdf ban skti h,,, like below::::


//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "",
  };
  // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
