/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectAdd": () => (/* binding */ projectAdd)
/* harmony export */ });
/* harmony import */ var _submitProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitProject */ "./src/submitProject.js");
/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteProject */ "./src/deleteProject.js");
/* harmony import */ var _addProjectDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProjectDom */ "./src/addProjectDom.js");
/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeAllChildNodes */ "./src/removeAllChildNodes.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");







const projectAdd = (
  projectArray,
  projectOptions,
  headerTitle,
  projectHeaderTitle,
  headerDescription,
  headerDescriptionInput,
  activeProject,
  activeProjectElement,
  taskArray,
  tasks,
  CreateProject
) => {
  const addProjectDomReturn = (0,_addProjectDom__WEBPACK_IMPORTED_MODULE_2__.addProjectDom)();
  const projectForm = addProjectDomReturn[0];
  const projectDelete = addProjectDomReturn[1];
  const projectInput = addProjectDomReturn[2];
  projectInput.focus();

  const createProject = new CreateProject(
    projectForm.id,
    projectInput.value,
    (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    projectHeaderTitle,
    headerDescriptionInput.value
  );

  projectArray = [...projectArray, createProject];

  // Ensures that new tasks are added to the new project that's just been added.
  activeProject = (0,_findElement__WEBPACK_IMPORTED_MODULE_4__.findElement)(projectArray, createProject).id;
  // Set activeProjectElement to the new project.
  activeProjectElement = (0,_findElement__WEBPACK_IMPORTED_MODULE_4__.findElement)(projectArray, createProject);

  (0,_submitProject__WEBPACK_IMPORTED_MODULE_0__.submitProject)(
    projectForm,
    projectInput,
    projectArray,
    projectOptions,
    headerTitle,
    headerDescription,
    headerDescriptionInput
    // activeProject,
    // activeProjectElement
  );

  projectDelete.addEventListener("click", (e) => {
    (0,_deleteProject__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(e, projectArray, taskArray, activeProject, activeProjectElement, projectForm, projectOptions);
  });

  // Removes all the tasks from the display to show the new and empty project.
  (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(tasks);

  projectForm.addEventListener("click", (e) => {
    console.table(projectArray);
    console.table(taskArray);

    activeProject = e.currentTarget.id;

    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(tasks);

    headerTitle.value = projectInput.value;

    console.log(activeProject);
    projectArray.forEach((arrayItem) => {
      if (arrayItem.id === activeProject) {
        activeProjectElement = arrayItem;
      }
    });
    // console.table(taskArray);
    // console.table(projectArray);
    taskArray.forEach((arrayItem) => {
      if (arrayItem.projectLink === activeProjectElement.taskLink) {
        // console.log("lol");
        // Rebuild and append all the tasks/todos using the properties stored in the taskArray.
        showTasks(arrayItem);
      }
    });
    projectInput.focus();
  });

  return [projectArray, activeProject, activeProjectElement];
};


/***/ }),

/***/ "./src/addProjectDom.js":
/*!******************************!*\
  !*** ./src/addProjectDom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectDom": () => (/* binding */ addProjectDom)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const addProjectDom = () => {
  const projectOptions = document.querySelector(".projectOptions");

  const projectForm = document.createElement("form");
  projectForm.classList.add("projectForm");
  projectOptions.appendChild(projectForm);

  const projectDelete = document.createElement("div");
  projectDelete.classList.add("projectDelete");
  projectDelete.textContent = "x";
  projectForm.appendChild(projectDelete);

  projectForm.setAttribute("id", (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])());

  const projectInput = document.createElement("input");
  projectInput.classList.add("projectInput");
  projectInput.setAttribute("placeholder", "Project name");
  projectForm.appendChild(projectInput);

  return [projectForm, projectDelete, projectInput];
};


/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskName": () => (/* binding */ addTaskName)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _initialDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialDom.js */ "./src/initialDom.js");
/* harmony import */ var _addProjectDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectDom.js */ "./src/addProjectDom.js");
/* harmony import */ var _addTaskDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTaskDom.js */ "./src/addTaskDom.js");
/* harmony import */ var _focusSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusSelector.js */ "./src/focusSelector.js");
/* harmony import */ var _deleteProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteProject.js */ "./src/deleteProject.js");
/* harmony import */ var _findElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./findElement.js */ "./src/findElement.js");
/* harmony import */ var _submitProject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submitProject.js */ "./src/submitProject.js");
/* harmony import */ var _updateColour_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateColour.js */ "./src/updateColour.js");
/* harmony import */ var _removeAllChildNodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./removeAllChildNodes.js */ "./src/removeAllChildNodes.js");
/* harmony import */ var _taskSubmit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taskSubmit.js */ "./src/taskSubmit.js");
/* harmony import */ var _taskDelete_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./taskDelete.js */ "./src/taskDelete.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");















function addTaskName() {
  class CreateProject {
    constructor(id, title, taskLink, headerTitle, headerDescription) {
      this.id = id;
      this.title = title;
      this.taskLink = taskLink;
      this.headerTitle = headerTitle;
      this.headerDescription = headerDescription;
    }
  }
  class CreateTask {
    constructor(id, title, colour, done, projectLink) {
      this.id = id;
      this.title = title;
      this.colour = colour;
      this.done = done;
      this.projectLink = projectLink;
    }
  }

  // Declare the array that holds all the tasks/todos.
  let taskArray = [];
  // Declares array that holds all the projects.
  let projectArray = [];

  const showTasks = (arrayItem) => {
    const addTaskDomReturn = (0,_addTaskDom_js__WEBPACK_IMPORTED_MODULE_2__.addTaskDom)();
    const taskBox = addTaskDomReturn[0];
    const taskCheck = addTaskDomReturn[1];
    const task = addTaskDomReturn[2];
    const colour = addTaskDomReturn[3];
    const deleteTask = addTaskDomReturn[4];
    const taskText = addTaskDomReturn[5];

    taskText.value = arrayItem.title;
    if (arrayItem.done === true) {
      taskCheck.classList.add("checked");
      taskBox.classList.add("opacity");
    }
    taskCheck.addEventListener("click", (e) => {
      taskCheckClicked(taskCheck, taskBox, taskArray);
    });

    taskText.focus();

    // Set taskBox DOM element id to match its corresponding taskArray id.
    taskBox.setAttribute("id", arrayItem.id);
    // Set taskBox DOM element background colour to match its corresponding taskArray colour.
    taskBox.style.backgroundColor = arrayItem.colour;
    // Listen for colour updates
    colour.addEventListener("input", (e) => {
      (0,_updateColour_js__WEBPACK_IMPORTED_MODULE_7__.updateColour)(colour, taskBox, taskArray);
    });

    // Updates the task's title in the array.
    task.addEventListener("submit", (e) => {
      (0,_taskSubmit_js__WEBPACK_IMPORTED_MODULE_9__.taskSubmit)(e, taskArray, taskBox, taskText, _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.tasks);
    });

    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      (0,_taskDelete_js__WEBPACK_IMPORTED_MODULE_10__.taskDelete)(taskArray, taskBox, _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.tasks);
    });

    task.addEventListener("keydown", (e) => {
      (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(taskArray, taskBox).title = taskText.value;
    });
  };

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitleEdit.addEventListener("click", (e) => {
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle.select();
  });

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitleForm.addEventListener("keyup", (e) => {
    for (let i = 0; i < _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions.children.length; i++) {
      if (_initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions.childNodes[i].id === activeProjectElement.id) {
        _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions.childNodes[i].querySelector("input").value = _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle.value;
      }
    }
  });

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle.blur();
    (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(projectArray, activeProjectElement).title = _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle.value;
    for (let i = 0; i < _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions.children.length; i++) {
      if (_initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions.childNodes[i].id === activeProjectElement.id) {
        _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions.childNodes[i].querySelector("input").value = _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle.value;
      }
    }
  });

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectDelete.addEventListener("click", (e) => {
    (0,_deleteProject_js__WEBPACK_IMPORTED_MODULE_4__.deleteProject)(e, projectArray, taskArray, activeProject, activeProjectElement, _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectForm, _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions);
  });

  let projectHeaderTitle = "bruh";

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescription.addEventListener("submit", (e) => {
    e.preventDefault();
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescriptionInput.blur();
    console.table(projectArray);
    // 99 push this value into the projectArray and update array on keydown and submit.
    (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(projectArray, activeProjectElement).headerDescription = _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescriptionInput.value;
    console.table(projectArray);
  });

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescription.addEventListener("keydown", (e) => {
    (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(projectArray, activeProjectElement).headerDescription = _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescriptionInput.value;
  });

  // Creates the initial example project from the CreateProject class.
  const createProject = new CreateProject(
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectForm.id,
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.value,
    (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
    projectHeaderTitle,
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescriptionInput.value
  );

  // Adds the first project to the project array.
  projectArray = [...projectArray, createProject];

  // activeProject is the projectForm's id element.
  let activeProject = _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectForm.id;
  // activeProjectElement is the arrayItem with a matching id of activeProject.
  let activeProjectElement = _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions.childNodes[0];

  (0,_submitProject_js__WEBPACK_IMPORTED_MODULE_6__.submitProject)(
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectForm,
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectInput,
    projectArray,
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions,
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle,
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescription,
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescriptionInput,
    activeProject,
    activeProjectElement
  );

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectForm.addEventListener("click", (e) => {
    activeProject = e.currentTarget.id;

    (0,_removeAllChildNodes_js__WEBPACK_IMPORTED_MODULE_8__.removeAllChildNodes)(_initialDom_js__WEBPACK_IMPORTED_MODULE_0__.tasks);

    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle.value = _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.value;

    projectArray.forEach((arrayItem) => {
      if (arrayItem.id === activeProject) {
        activeProjectElement = arrayItem;
      }
    });
    taskArray.forEach((arrayItem) => {
      if (arrayItem.projectLink === activeProjectElement.taskLink) {
        // Rebuild and append all the tasks/todos using the properties stored in the taskArray.
        showTasks(arrayItem);
      }
    });
    _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.focus();
  });

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.addProject.addEventListener("click", (e) => {
    const addProjectDomReturn = (0,_addProjectDom_js__WEBPACK_IMPORTED_MODULE_1__.addProjectDom)();
    const projectForm = addProjectDomReturn[0];
    const projectDelete = addProjectDomReturn[1];
    const projectInput = addProjectDomReturn[2];
    projectInput.focus();

    const createProject = new CreateProject(
      projectForm.id,
      projectInput.value,
      (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      projectHeaderTitle,
      _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescriptionInput.value
    );

    projectArray = [...projectArray, createProject];

    // Ensures that new tasks are added to the new project that's just been added.
    activeProject = (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(projectArray, createProject).id;
    // Set activeProjectElement to the new project.
    activeProjectElement = (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(projectArray, createProject);

    (0,_submitProject_js__WEBPACK_IMPORTED_MODULE_6__.submitProject)(
      projectForm,
      projectInput,
      projectArray,
      _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions,
      _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle,
      _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescription,
      _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerDescriptionInput,
      activeProject,
      activeProjectElement
    );

    projectDelete.addEventListener("click", (e) => {
      (0,_deleteProject_js__WEBPACK_IMPORTED_MODULE_4__.deleteProject)(e, projectArray, taskArray, activeProject, activeProjectElement, projectForm, _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.projectOptions);
    });

    // Removes all the tasks from the display to show the new and empty project.
    (0,_removeAllChildNodes_js__WEBPACK_IMPORTED_MODULE_8__.removeAllChildNodes)(_initialDom_js__WEBPACK_IMPORTED_MODULE_0__.tasks);

    projectForm.addEventListener("click", (e) => {
      console.table(projectArray);
      console.table(taskArray);

      activeProject = e.currentTarget.id;

      (0,_removeAllChildNodes_js__WEBPACK_IMPORTED_MODULE_8__.removeAllChildNodes)(_initialDom_js__WEBPACK_IMPORTED_MODULE_0__.tasks);

      _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle.value = projectInput.value;

      console.log(activeProject);
      projectArray.forEach((arrayItem) => {
        if (arrayItem.id === activeProject) {
          activeProjectElement = arrayItem;
        }
      });
      // console.table(taskArray);
      // console.table(projectArray);
      taskArray.forEach((arrayItem) => {
        if (arrayItem.projectLink === activeProjectElement.taskLink) {
          // console.log("lol");
          // Rebuild and append all the tasks/todos using the properties stored in the taskArray.
          showTasks(arrayItem);
        }
      });
      projectInput.focus();
    });
  });

  const taskCheckClicked = (taskCheck, taskBox, taskArray) => {
    if (taskCheck.classList.contains("checked")) {
      taskCheck.classList.remove("checked");
      taskBox.classList.remove("opacity");
      (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(taskArray, taskBox).done = false;
    } else {
      taskCheck.classList.add("checked");
      taskBox.classList.add("opacity");
      (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(taskArray, taskBox).done = true;
    }
  };

  _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.addTask.addEventListener("click", (e) => {
    if (projectArray.length === 0) {
      return alert("Make a project first");
    }
    const addTaskDomReturn = (0,_addTaskDom_js__WEBPACK_IMPORTED_MODULE_2__.addTaskDom)();
    const taskBox = addTaskDomReturn[0];
    const taskCheck = addTaskDomReturn[1];
    const task = addTaskDomReturn[2];
    const colour = addTaskDomReturn[3];
    const deleteTask = addTaskDomReturn[4];
    const taskText = addTaskDomReturn[5];

    let taskId = (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])();
    taskBox.setAttribute("id", taskId);
    // Find the first project from projectArray matching with activeProject.
    const match = projectArray.find((element) => element.id === activeProject);
    // The line below sets the projectLink to match the projectArray's taskLink.

    let projectLink = match.taskLink;

    const createTask = new CreateTask(taskBox.id, taskText.value, taskBox.style.backgroundColor, false, projectLink);
    taskArray = [...taskArray, createTask];
    taskText.focus();

    taskCheck.addEventListener("click", (e) => {
      taskCheckClicked(taskCheck, taskBox, taskArray);
    });

    colour.addEventListener("input", (e) => {
      (0,_updateColour_js__WEBPACK_IMPORTED_MODULE_7__.updateColour)(colour, taskBox, taskArray);
    });

    task.addEventListener("keydown", (e) => {
      (0,_findElement_js__WEBPACK_IMPORTED_MODULE_5__.findElement)(taskArray, taskBox).title = taskText.value;
    });

    // Updates the task's properties in the array.
    task.addEventListener("submit", (e) => {
      (0,_taskSubmit_js__WEBPACK_IMPORTED_MODULE_9__.taskSubmit)(e, taskArray, taskBox, taskText, _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.tasks);
    });

    // Deletes task from the DOM and removes it from the array upon click on delete icon on task.
    deleteTask.addEventListener("click", (e) => {
      (0,_taskDelete_js__WEBPACK_IMPORTED_MODULE_10__.taskDelete)(taskArray, taskBox, _initialDom_js__WEBPACK_IMPORTED_MODULE_0__.tasks);
    });
  });
}


/***/ }),

/***/ "./src/addTaskDom.js":
/*!***************************!*\
  !*** ./src/addTaskDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskDom": () => (/* binding */ addTaskDom)
/* harmony export */ });
const addTaskDom = () => {
  const tasks = document.querySelector(".tasks");

  const taskBox = document.createElement("div");
  taskBox.classList.add("taskBox");

  const taskCheck = document.createElement("div");
  taskCheck.classList.add("taskCheck");

  const task = document.createElement("form");
  task.setAttribute("type", "text");
  task.setAttribute("method", "post");
  task.setAttribute("name", "taskForm");
  task.dataset.form;
  task.classList.add("task");

  const taskText = document.createElement("input");
  taskText.dataset.input;

  const colour = document.createElement("input");
  colour.setAttribute("type", "color");
  colour.classList.add("colour");

  const deleteTask = document.createElement("img");
  deleteTask.src = "../dist/xIcon.png";
  deleteTask.classList.add("deleteTask");
  taskText.setAttribute("placeholder", "What's your task?");

  tasks.appendChild(taskBox);
  taskBox.appendChild(taskCheck);
  taskBox.appendChild(task);
  taskBox.appendChild(colour);
  taskBox.appendChild(deleteTask);
  task.appendChild(taskText);

  return [taskBox, taskCheck, task, colour, deleteTask, taskText];
};


/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ "./src/removeAllChildNodes.js");


const findElement = (targetArray, targetMatch) => {
  return targetArray.find((arrayItem) => {
    if (arrayItem.id === targetMatch.id) {
      return arrayItem;
    }
  });
};

const deleteProject = (
  e,
  projectArray,
  taskArray,
  activeProject,
  activeProjectElement,
  projectForm,
  projectOptions
) => {
  let removeArray = [];

  const activeProjectBefore = activeProject;
  // Sets activeProject to the delete-clicked form's id and activeProjectElement to the matching arrayItem.
  // Identifies which projectDelete DOM form was clicked compared to the projectArray.
  activeProject = e.currentTarget.parentNode.id;
  projectArray.forEach((arrayItem) => {
    if (arrayItem.id === activeProject) {
      activeProjectElement = arrayItem;
    }
  });
  //   Use activeProject and find the matching element taskBox and focus that one

  // Loops over taskArray and checks if the arrayItem's match the activeProjectElement's taskLink.
  taskArray.forEach((arrayItem) => {
    if (arrayItem.projectLink === activeProjectElement.taskLink) {
      const taskIndex = taskArray.indexOf(arrayItem);
      removeArray.push(taskIndex);
    }
  });

  // if (projectArray.length === 1) {
  //   removeAllChildNodes(projectArray);
  //   removeAllChildNodes(taskArray);
  //   console.log("lol");
  // }

  if (activeProjectBefore === e.currentTarget.parentNode.id) {
    const parent = e.currentTarget.parentNode;
    const nextInput = parent.nextElementSibling.querySelector("input");
    nextInput.focus();
  } else {
    const currentActiveProject = projectArray.find((arrayItem) => {
      if (arrayItem.id === activeProjectBefore) {
        return arrayItem;
      }
    });
    // Error when keep on deleting projects after having done the first one. Look into this. 99
    const projectOptionsChildren = [...projectOptions.children];
    // currentActiveProject is not set on the second time around.
    console.log(currentActiveProject);
    const focusThis = projectOptionsChildren.find((element) => element.id === currentActiveProject.id);
    console.log(focusThis);
    focusThis.querySelector("input").focus();
  }

  //   console.table(removeArray);
  for (let i = removeArray.length - 1; i >= 0; i--) {
    taskArray.splice(removeArray[i], 1);
  }
  // Find the index of the project in projectArray that has the same ID as the DOM project element.
  const projectIndex = projectArray.indexOf(findElement(projectArray, projectForm));
  // Removes the respective element in the array using the DOM elements' id.
  projectArray.splice(projectIndex, 1);
  //   Removes the entire project(form) from the DOM.
  projectOptions.removeChild(projectForm);

  //   console.log("Project Array:");
  console.table(projectArray);
  //   console.log("Task Array:");
  console.table(taskArray);
  console.log(activeProject);

  //   console.log(activeProject);
  //   console.log(activeProjectElement);
};


/***/ }),

/***/ "./src/findElement.js":
/*!****************************!*\
  !*** ./src/findElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findElement": () => (/* binding */ findElement)
/* harmony export */ });
// Loops through the targetArray and returns the first match.
const findElement = (targetArray, targetMatch) => {
  return targetArray.find((arrayItem) => {
    if (arrayItem.id === targetMatch.id) {
      return arrayItem;
    }
  });
};


/***/ }),

/***/ "./src/focusSelector.js":
/*!******************************!*\
  !*** ./src/focusSelector.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusSelector": () => (/* binding */ focusSelector)
/* harmony export */ });
// Focuses and blurs the input boxes as the user navigates them.
// The formElement parameter is poorly named, as it depends on the DOM structure, but in most cases it will be a form element.
const focusSelector = (e, parentElement, currentElement, formElement) => {
  if (e.key === "Enter") {
    // If there's only one child element, blur the selection.
    if (parentElement.children.length === 1) {
      return currentElement.blur();
    }
    // If the selection is at the final DOM element of the list, go back to the first DOM element.
    if (formElement.nextElementSibling === null) {
      parentElement.firstElementChild.querySelector("input").focus();
      return;
    }
    // Focus on the next DOM element
    const nextInput = formElement.nextElementSibling;
    nextInput.querySelector("input").focus();
  }
  if (e.key === "Escape") {
    currentElement.blur();
  }
};


/***/ }),

/***/ "./src/initialDom.js":
/*!***************************!*\
  !*** ./src/initialDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "calendar": () => (/* binding */ calendar),
/* harmony export */   "calendarHeader": () => (/* binding */ calendarHeader),
/* harmony export */   "calendarHeaderTitle": () => (/* binding */ calendarHeaderTitle),
/* harmony export */   "calendarOptions": () => (/* binding */ calendarOptions),
/* harmony export */   "calendarTitle": () => (/* binding */ calendarTitle),
/* harmony export */   "calendarToday": () => (/* binding */ calendarToday),
/* harmony export */   "calendarWeek": () => (/* binding */ calendarWeek),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "contentSeparator": () => (/* binding */ contentSeparator),
/* harmony export */   "contentSeparator2": () => (/* binding */ contentSeparator2),
/* harmony export */   "contentSeparator3": () => (/* binding */ contentSeparator3),
/* harmony export */   "editProjects": () => (/* binding */ editProjects),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "headerDescription": () => (/* binding */ headerDescription),
/* harmony export */   "headerDescriptionInput": () => (/* binding */ headerDescriptionInput),
/* harmony export */   "headerTitle": () => (/* binding */ headerTitle),
/* harmony export */   "headerTitleEdit": () => (/* binding */ headerTitleEdit),
/* harmony export */   "headerTitleForm": () => (/* binding */ headerTitleForm),
/* harmony export */   "headerTitleWrapper": () => (/* binding */ headerTitleWrapper),
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "projectDelete": () => (/* binding */ projectDelete),
/* harmony export */   "projectForm": () => (/* binding */ projectForm),
/* harmony export */   "projectInput": () => (/* binding */ projectInput),
/* harmony export */   "projectOptions": () => (/* binding */ projectOptions),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "projectsHeader": () => (/* binding */ projectsHeader),
/* harmony export */   "projectsTitle": () => (/* binding */ projectsTitle),
/* harmony export */   "projectsTopLine": () => (/* binding */ projectsTopLine),
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const contentDiv = document.querySelector("#content");

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
contentDiv.appendChild(wrapper);

const nav = document.createElement("div");
nav.classList.add("nav");
wrapper.appendChild(nav);

const calendar = document.createElement("div");
calendar.classList.add("calendar");
nav.appendChild(calendar);

const calendarHeader = document.createElement("div");
calendarHeader.classList.add("calendarHeader");
calendar.appendChild(calendarHeader);

const calendarHeaderTitle = document.createElement("div");
calendarHeaderTitle.classList.add("calendarHeaderTitle");
calendarHeaderTitle.textContent = "Plan";
calendarHeader.appendChild(calendarHeaderTitle);

const contentSeparator = document.createElement("div");
contentSeparator.classList.add("contentSeparator");
calendarHeader.appendChild(contentSeparator);

const calendarOptions = document.createElement("div");
calendarOptions.classList.add("calendarOptions");
calendar.appendChild(calendarOptions);

const calendarToday = document.createElement("div");
calendarToday.classList.add("calendarToday");
calendarToday.textContent = "Today";
calendarOptions.appendChild(calendarToday);

const calendarWeek = document.createElement("div");
calendarWeek.classList.add("calendarWeek");
calendarWeek.textContent = "This Week";
calendarOptions.appendChild(calendarWeek);

const calendarTitle = document.createElement("div");
calendarTitle.classList.add("calendarTitle");
calendarTitle.textContent = "Calendar";
calendarOptions.appendChild(calendarTitle);

const projects = document.createElement("div");
projects.classList.add("projects");
nav.appendChild(projects);

const projectsHeader = document.createElement("div");
projectsHeader.classList.add("projectsHeader");
projects.appendChild(projectsHeader);

const projectsTopLine = document.createElement("div");
projectsTopLine.classList.add("projectsTopLine");
projectsHeader.appendChild(projectsTopLine);

const projectsTitle = document.createElement("div");
projectsTitle.classList.add("projectsTitle");
projectsTitle.textContent = "Projects";
projectsTopLine.appendChild(projectsTitle);

const editProjects = document.createElement("div");
editProjects.classList.add("editProjects");
// editProjects.textContent = "Edit";
projectsTopLine.appendChild(editProjects);

const contentSeparator2 = document.createElement("div");
contentSeparator2.classList.add("contentSeparator");
projectsHeader.appendChild(contentSeparator2);

const addProject = document.createElement("div");
addProject.classList.add("addProject");
addProject.textContent = "+ Add Project";
projectsHeader.appendChild(addProject);

const projectOptions = document.createElement("div");
projectOptions.classList.add("projectOptions");
projects.appendChild(projectOptions);

const projectForm = document.createElement("form");
projectForm.classList.add("projectForm");
projectForm.setAttribute("id", (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])());
projectOptions.appendChild(projectForm);

const projectDelete = document.createElement("div");
projectDelete.classList.add("projectDelete");
projectDelete.textContent = "x";
projectForm.appendChild(projectDelete);

const projectInput = document.createElement("input");
projectInput.classList.add("projectInput");
projectInput.value = "Example Project";
projectInput.setAttribute("placeholder", "Project name");
projectForm.appendChild(projectInput);

const content = document.createElement("div");
content.classList.add("content");
wrapper.appendChild(content);

const header = document.createElement("div");
header.classList.add("header");
content.appendChild(header);

const headerTitleWrapper = document.createElement("div");
headerTitleWrapper.classList.add("headerTitleWrapper");
header.appendChild(headerTitleWrapper);

const headerTitleForm = document.createElement("form");
headerTitleForm.classList.add("headerTitleForm");
headerTitleWrapper.appendChild(headerTitleForm);

const headerTitle = document.createElement("input");
headerTitle.classList.add("headerTitle");
headerTitle.value = projectInput.value;
headerTitle.setAttribute("placeholder", "Header Title");
headerTitleForm.appendChild(headerTitle);

const headerTitleEdit = document.createElement("div");
headerTitleEdit.classList.add("headerTitleEdit");
headerTitleEdit.textContent = "Edit";
headerTitleWrapper.appendChild(headerTitleEdit);

const headerDescription = document.createElement("form");
headerDescription.classList.add("headerDescription");
header.appendChild(headerDescription);

const headerDescriptionInput = document.createElement("input");
headerDescriptionInput.classList.add("headerDescriptionInput");
headerDescriptionInput.setAttribute("placeholder", "Project Description");
headerDescription.appendChild(headerDescriptionInput);

const contentSeparator3 = document.createElement("div");
contentSeparator3.classList.add("contentSeparator");
content.appendChild(contentSeparator3);

const addTask = document.createElement("div");
addTask.classList.add("addTask");
addTask.textContent = "+ Add Task";
content.appendChild(addTask);

const tasks = document.createElement("div");
tasks.classList.add("tasks");
tasks.dataset.lists;
content.appendChild(tasks);


/***/ }),

/***/ "./src/removeAllChildNodes.js":
/*!************************************!*\
  !*** ./src/removeAllChildNodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};


/***/ }),

/***/ "./src/submitProject.js":
/*!******************************!*\
  !*** ./src/submitProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitProject": () => (/* binding */ submitProject)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");
/* harmony import */ var _focusSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusSelector */ "./src/focusSelector.js");
/* harmony import */ var _initialDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialDom */ "./src/initialDom.js");




const submitProject = (
  projectForm,
  projectInput,
  projectArray,
  projectOptions,
  headerTitle,
  headerDescription,
  headerDescriptionInput,
  activeProject,
  activeProjectElement
) => {
  // Actively updates the projectArray and the headerTitle on keyup.
  projectForm.addEventListener("keyup", (e) => {
    // This if check avoids making this eventListener be activated if the form is submitted.
    if (e.key !== "Enter") {
      (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.findElement)(projectArray, projectForm).title = projectInput.value;
      // Updates the headerTitle to match the projectInput name.
      headerTitle.value = projectInput.value;
    }
  });

  headerDescription.addEventListener("keyup", (e) => {
    (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.findElement)(projectArray, headerDescriptionInput).headerDescription = headerDescriptionInput.value;
    // Updates the headerTitle to match the projectInput name.
    headerDescription.value = "LOL";
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Find the element in the array that has the same ID as the DOM project element and set its title to the array input title.
    (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.findElement)(projectArray, projectForm).title = projectInput.value;

    projectInput.addEventListener("keyup", (e) => {
      (0,_focusSelector__WEBPACK_IMPORTED_MODULE_1__.focusSelector)(e, projectOptions, projectInput, projectForm);
    });

    for (let i = 0; i < projectOptions.children.length; i++) {
      if (projectOptions.childNodes[i].id === activeProjectElement.id && i + 1 !== projectOptions.children.length) {
        return (headerTitle.value = projectOptions.childNodes[i + 1].querySelector("input").value);
      }
      if (i + 1 === projectOptions.children.length) {
        headerTitle.value = projectOptions.childNodes[0].querySelector("input").value;
      }
    }
  });
};


/***/ }),

/***/ "./src/taskDelete.js":
/*!***************************!*\
  !*** ./src/taskDelete.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDelete": () => (/* binding */ taskDelete)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");


const taskDelete = (taskArray, taskBox, tasks) => {
  const taskIndex = taskArray.indexOf((0,_findElement__WEBPACK_IMPORTED_MODULE_0__.findElement)(taskArray, taskBox));
  // Removes the respective element in the array using the DOM elements' id.
  taskArray.splice(taskIndex, 1);
  //   Removes the entire task(box) from the DOM.
  tasks.removeChild(taskBox);
};


/***/ }),

/***/ "./src/taskSubmit.js":
/*!***************************!*\
  !*** ./src/taskSubmit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskSubmit": () => (/* binding */ taskSubmit)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");
/* harmony import */ var _focusSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusSelector */ "./src/focusSelector.js");



const taskSubmit = (e, taskArray, taskBox, taskText, tasks) => {
  e.preventDefault();
  //   Sets/updates the title to the array item.
  (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.findElement)(taskArray, taskBox).title = taskText.value;
  if (tasks.children.length === 1) {
    return taskText.blur();
  }
  //   Moves onto the next input field whenever enter is clicked
  taskText.addEventListener("keyup", (e) => {
    (0,_focusSelector__WEBPACK_IMPORTED_MODULE_1__.focusSelector)(e, tasks, taskText, taskBox);
  });
};


/***/ }),

/***/ "./src/updateColour.js":
/*!*****************************!*\
  !*** ./src/updateColour.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateColour": () => (/* binding */ updateColour)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");


const updateColour = (colour, domElement, taskArray) => {
  domElement.style.backgroundColor = colour.value;
  (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.findElement)(taskArray, domElement).colour = colour.value;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");


(0,_addTask_js__WEBPACK_IMPORTED_MODULE_0__.addTaskName)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map