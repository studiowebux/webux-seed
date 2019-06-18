// ██████╗ ███████╗███████╗ █████╗ ██╗   ██╗██╗  ████████╗    ██╗   ██╗ █████╗ ██╗     ██╗   ██╗███████╗███████╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║  ╚══██╔══╝    ██║   ██║██╔══██╗██║     ██║   ██║██╔════╝██╔════╝
// ██║  ██║█████╗  █████╗  ███████║██║   ██║██║     ██║       ██║   ██║███████║██║     ██║   ██║█████╗  ███████╗
// ██║  ██║██╔══╝  ██╔══╝  ██╔══██║██║   ██║██║     ██║       ╚██╗ ██╔╝██╔══██║██║     ██║   ██║██╔══╝  ╚════██║
// ██████╔╝███████╗██║     ██║  ██║╚██████╔╝███████╗██║        ╚████╔╝ ██║  ██║███████╗╚██████╔╝███████╗███████║
// ╚═════╝ ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝         ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝╚══════╝

/**
 * File: 00_language.js
 * Author: Tommy Gingras
 * Date: 2019-06-18
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

// load model

const french = () => {
  return new Promise((resolve, reject) => {
    // Simulate db creation
    setTimeout(() => {
      console.log("Language created !");
      return resolve('Default language "french" created.');
    }, 1000);
    // Language.create({
    //   defaultValue: true,
    //   name: "Français",
    //   shortcuts: ["fr", "fr_ca", "fr_fr"]
    // }).then(languageCreated => {
    //   if (!languageCreated) {
    //     return reject(Error("Fail to create the resource."));
    //   }
    //   return resolve('Default language "french" created.');
    // });
  });
};

const english = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Language created !");
      return resolve('Default language "english" created.');
    }, 1500);
    // Language.create({
    //   defaultValue: false,
    //   name: "English",
    //   shortcuts: ["en", "en_us", "en_ca"]
    // }).then(languageCreated => {
    //   if (!languageCreated) {
    //     return reject(Error("Fail to create the resource."));
    //   }
    //   return resolve('Default language "english" created.');
    // });
  });
};

const errored = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject('Default language "english" not created.');
    }, 500);
    // Language.create({
    //   defaultValue: false,
    //   name: "English",
    //   shortcuts: ["en", "en_us", "en_ca"]
    // }).then(languageCreated => {
    //   if (!languageCreated) {
    //     return reject(Error("Fail to create the resource."));
    //   }
    //   return resolve('Default language "english" created.');
    // });
  });
};

module.exports = Promise.all([french(), english()]);
// module.exports = Promise.all([french(), english(), errored()]);
