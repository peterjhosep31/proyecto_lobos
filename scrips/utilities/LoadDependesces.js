// Object.defineProperties(globalThis, {
//     loadDependences: {
//         value: (function () {
//             let dependences = {};

//             return async function ({
//                 dependence,
//                 folder = ""
//             }) {

//                 if (dependences[dependence])
//                     return dependences[dependence];

//                 const DEPENDENCE = await import(folder + dependence);
//                 const REFERENCE = DEPENDENCE.default;

//                 dependences[dependence] = REFERENCE;
//                 return REFERENCE;
//             }

//         })(),
//     }
// })
