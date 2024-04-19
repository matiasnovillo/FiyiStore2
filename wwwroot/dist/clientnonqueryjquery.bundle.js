/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wwwroot/ts/FiyiStore/Client/jQuery/ClientNonQuery_jQuery.js":
/*!*********************************************************************!*\
  !*** ./wwwroot/ts/FiyiStore/Client/jQuery/ClientNonQuery_jQuery.js ***!
  \*********************************************************************/
/***/ (() => {

eval("// @ts-nocheck\r\n/*\r\n * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b\r\n *\r\n * Coded by fiyistack.com\r\n * Copyright © 2023\r\n *\r\n * The above copyright notice and this permission notice shall be included\r\n * in all copies or substantial portions of the Software.\r\n *\r\n*/\r\n//Stack: 10\r\n//Last modification on: 24/03/2023 17:29:08\r\n//Create a formdata object\r\nvar formData = new FormData();\r\n//Used for Quill Editor\r\nvar fiyistackblogbodytoolbaroptions = [\r\n    [\"bold\", \"italic\", \"underline\", \"strike\"],\r\n    [\"link\", \"blockquote\", \"code-block\"],\r\n    [{ \"header\": 1 }, { \"header\": 2 }],\r\n    [{ \"list\": \"ordered\" }, { \"list\": \"bullet\" }],\r\n    [{ \"script\": \"sub\" }, { \"script\": \"super\" }],\r\n    [{ \"indent\": \"-1\" }, { \"indent\": \"+1\" }],\r\n    [{ \"direction\": \"rtl\" }],\r\n    [\"image\", \"video\"],\r\n    [\"clean\"] // remove formatting button\r\n];\r\nvar fiyistackblogbodyquill = new Quill(\"#body-input\", {\r\n    modules: {\r\n        toolbar: fiyistackblogbodytoolbaroptions\r\n    },\r\n    theme: \"snow\"\r\n});\r\n//Used for file input\r\nvar fiyistackblogbackgroundimageinput;\r\nvar fiyistackblogbackgroundimageboolfileadded;\r\n$(\"#backgroundimage-input\").on(\"change\", function (e) {\r\n    fiyistackblogbackgroundimageinput = $(this).get(0).files;\r\n    fiyistackblogbackgroundimageboolfileadded = true;\r\n    formData.append(\"backgroundimage-input\", fiyistackblogbackgroundimageinput[0], fiyistackblogbackgroundimageinput[0].name);\r\n});\r\n//LOAD EVENT\r\n$(document).ready(function () {\r\n    fiyistackblogbodyquill.root.innerHTML = $(\"#body-hidden-value\").val();\r\n    // Fetch all the forms we want to apply custom Bootstrap validation styles to\r\n    var forms = document.getElementsByClassName(\"needs-validation\");\r\n    // Loop over them and prevent submission\r\n    Array.prototype.filter.call(forms, function (form) {\r\n        form.addEventListener(\"submit\", function (event) {\r\n            event.preventDefault();\r\n            event.stopPropagation();\r\n            if (form.checkValidity() === true) {\r\n                //BlogId\r\n                formData.append(\"blogid-input\", $(\"#blogid-input\").val());\r\n                formData.append(\"title-input\", $(\"#title-input\").val());\r\n                formData.append(\"body-input\", fiyistackblogbodyquill.root.innerHTML);\r\n                if (!fiyistackblogbackgroundimageboolfileadded) {\r\n                    formData.append(\"backgroundimage-input\", $(\"#backgroundimage-readonly\").val());\r\n                }\r\n                formData.append(\"numberoflikes-input\", $(\"#numberoflikes-input\").val());\r\n                formData.append(\"numberofcomments-input\", $(\"#numberofcomments-input\").val());\r\n                //Setup request\r\n                var xmlHttpRequest = new XMLHttpRequest();\r\n                //Set event listeners\r\n                xmlHttpRequest.upload.addEventListener(\"loadstart\", function (e) {\r\n                    //SAVING\r\n                    $.notify({ message: \"Saving data. Please, wait\" }, { type: \"info\", placement: { from: \"bottom\", align: \"center\" } });\r\n                });\r\n                xmlHttpRequest.onload = function () {\r\n                    if (xmlHttpRequest.status >= 400) {\r\n                        //ERROR\r\n                        console.log(xmlHttpRequest);\r\n                        $.notify({ icon: \"fas fa-exclamation-triangle\", message: \"There was an error while saving the data\" }, { type: \"danger\", placement: { from: \"bottom\", align: \"center\" } });\r\n                    }\r\n                    else {\r\n                        //SUCCESS\r\n                        window.location.replace(\"/FiyiStack/BlogQueryPage\");\r\n                    }\r\n                };\r\n                //Open connection\r\n                xmlHttpRequest.open(\"POST\", \"/api/FiyiStack/Blog/1/InsertOrUpdateAsync\", true);\r\n                //Send request\r\n                xmlHttpRequest.send(formData);\r\n            }\r\n            else {\r\n                $.notify({ message: \"Please, complete all fields.\" }, { type: \"warning\", placement: { from: \"bottom\", align: \"center\" } });\r\n            }\r\n            form.classList.add(\"was-validated\");\r\n        }, false);\r\n    });\r\n});\r\n//# sourceMappingURL=ClientNonQuery_jQuery.js.map\n\n//# sourceURL=webpack://fiyistore/./wwwroot/ts/FiyiStore/Client/jQuery/ClientNonQuery_jQuery.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./wwwroot/ts/FiyiStore/Client/jQuery/ClientNonQuery_jQuery.js"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=clientnonqueryjquery.bundle.js.map