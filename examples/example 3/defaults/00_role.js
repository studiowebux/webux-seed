// ██████╗ ███████╗███████╗ █████╗ ██╗   ██╗██╗  ████████╗    ██╗   ██╗ █████╗ ██╗     ██╗   ██╗███████╗███████╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║  ╚══██╔══╝    ██║   ██║██╔══██╗██║     ██║   ██║██╔════╝██╔════╝
// ██║  ██║█████╗  █████╗  ███████║██║   ██║██║     ██║       ██║   ██║███████║██║     ██║   ██║█████╗  ███████╗
// ██║  ██║██╔══╝  ██╔══╝  ██╔══██║██║   ██║██║     ██║       ╚██╗ ██╔╝██╔══██║██║     ██║   ██║██╔══╝  ╚════██║
// ██████╔╝███████╗██║     ██║  ██║╚██████╔╝███████╗██║        ╚████╔╝ ██║  ██║███████╗╚██████╔╝███████╗███████║
// ╚═════╝ ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝         ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝╚══════╝

/**
 * File: 01_role.js
 * Author: Tommy Gingras
 * Date: 2019-06-18
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

// Include model

const user = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Webux-seed - Role created !");
      return resolve('Default role "user" created.');
    }, 1000);
    // Userrole.create({
    //   'name.fr': 'Usager',
    //   'name.en': 'User',
    //   'roles': 'User',
    //   'default': true,
    //   'isAdmin': false,
    //   'allows': [
    //     {
    //       resources: ['language'],
    //       permissions: ['get'],
    //     },
    //   ],
    // }).then((roleCreated) => {
    //   if (!roleCreated) {
    //     return reject(Error('Fail to create the resource.'));
    //   }
    //   return resolve('Default role "user" created.');
    // });
  });
};

const moderator = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Webux-seed - Role created !");
      return resolve('Default role "moderator" created.');
    }, 2000);
    // Userrole.create({
    //   'name.fr': 'Modérateur',
    //   'name.en': 'Moderator',
    //   'roles': 'Moderator',
    //   'default': false,
    //   'isAdmin': false,
    //   'allows': [
    //     {
    //       resources: ['language'],
    //       permissions: ['get', 'patch', 'put'],
    //     },
    //   ],
    // }).then((roleCreated) => {
    //   if (!roleCreated) {
    //     return reject(Error('Fail to create the resource.'));
    //   }
    //   return resolve('Default role "moderator" created.');
    // });
  });
};

const administrator = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Webux-seed - Role created !");
      return resolve('Default role "moderator" created.');
    }, 3000);
    // Userrole.create({
    //   "name.fr": "Administrateur",
    //   "name.en": "Administrator",
    //   roles: "Administrator",
    //   default: false,
    //   isAdmin: true,
    //   allows: [
    //     {
    //       resources: ["language"],
    //       permissions: ["get", "post", "put", "delete", "patch"]
    //     },
    //   ]
    // }).then(roleCreated => {
    //   if (!roleCreated) {
    //     return reject(Error("Fail to create the resource."));
    //   }
    //   return resolve('Default role "administrator" created.');
    // });
  });
};

module.exports = Promise.all([user(), moderator(), administrator()]);
