"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3621],{

/***/ 8933:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraDirection: () => (/* binding */ CameraDirection),
/* harmony export */   CameraResultType: () => (/* binding */ CameraResultType),
/* harmony export */   CameraSource: () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 1831:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraDirection: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection),
/* harmony export */   CameraResultType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraResultType),
/* harmony export */   CameraSource: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 7464);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 9141);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 8933);


const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => new _web__WEBPACK_IMPORTED_MODULE_1__.CameraWeb()
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9141:
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraWeb: () => (/* binding */ CameraWeb)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 7464);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 8933);



class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  getPhoto(options) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(/*#__PURE__*/function () {
        var _ref = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos) {
            _this.fileInputExperience(options, resolve, reject);
          } else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
            let actionSheet = document.querySelector('pwa-action-sheet');
            if (!actionSheet) {
              actionSheet = document.createElement('pwa-action-sheet');
              document.body.appendChild(actionSheet);
            }
            actionSheet.header = options.promptLabelHeader || 'Photo';
            actionSheet.cancelable = true;
            actionSheet.options = [{
              title: options.promptLabelPhoto || 'From Photos'
            }, {
              title: options.promptLabelPicture || 'Take Picture'
            }];
            actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
              var _ref2 = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const selection = e.detail;
                if (selection === 0) {
                  _this.fileInputExperience(options, resolve, reject);
                } else {
                  _this.cameraExperience(options, resolve, reject);
                }
              });
              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
            actionSheet.addEventListener('onCanceled', /*#__PURE__*/(0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
            }));
          } else {
            _this.cameraExperience(options, resolve, reject);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  pickImages(_options) {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(/*#__PURE__*/function () {
        var _ref4 = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          _this2.multipleFileInputExperience(resolve, reject);
        });
        return function (_x4, _x5) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  cameraExperience(options, resolve, reject) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (customElements.get('pwa-camera-modal')) {
        const cameraModal = document.createElement('pwa-camera-modal');
        cameraModal.facingMode = options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front ? 'user' : 'environment';
        document.body.appendChild(cameraModal);
        try {
          yield cameraModal.componentOnReady();
          cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
            var _ref5 = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
              const photo = e.detail;
              if (photo === null) {
                reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
              } else if (photo instanceof Error) {
                reject(photo);
              } else {
                resolve(yield _this3._getCameraPhoto(photo, options));
              }
              cameraModal.dismiss();
              document.body.removeChild(cameraModal);
            });
            return function (_x6) {
              return _ref5.apply(this, arguments);
            };
          }());
          cameraModal.present();
        } catch (e) {
          _this3.fileInputExperience(options, resolve, reject);
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        _this3.fileInputExperience(options, resolve, reject);
      }
    })();
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input';
      input.type = 'file';
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const file = input.files[0];
        let format = 'jpeg';
        if (file.type === 'image/png') {
          format = 'png';
        } else if (file.type === 'image/gif') {
          format = 'gif';
        }
        if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            if (options.resultType === 'dataUrl') {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === 'base64') {
              const b64 = reader.result.split(',')[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format: format
          });
          cleanup();
        }
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.capture = true;
    if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
      input.removeAttribute('capture');
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front) {
      input.capture = 'user';
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Rear) {
      input.capture = 'environment';
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input-multiple');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input-multiple';
      input.type = 'file';
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const photos = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = 'jpeg';
          if (file.type === 'image/png') {
            format = 'png';
          } else if (file.type === 'image/gif') {
            format = 'gif';
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format: format
          });
        }
        resolve({
          photos
        });
        cleanup();
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = photo.type.split('/')[1];
      if (options.resultType === 'uri') {
        resolve({
          webPath: URL.createObjectURL(photo),
          format: format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === 'dataUrl') {
            resolve({
              dataUrl: r,
              format: format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(',')[1],
              format: format,
              saved: false
            });
          }
        };
        reader.onerror = e => {
          reject(e);
        };
      }
    });
  }
  checkPermissions() {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.permissions) {
        throw _this4.unavailable('Permissions API not available in this browser');
      }
      try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
        // the specific permissions that are supported varies among browsers that implement the
        // permissions API, so we need a try/catch in case 'camera' is invalid
        const permission = yield window.navigator.permissions.query({
          name: 'camera'
        });
        return {
          camera: permission.state,
          photos: 'granted'
        };
      } catch (_a) {
        throw _this4.unavailable('Camera permissions are not available in this browser');
      }
    })();
  }
  requestPermissions() {
    var _this5 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this5.unimplemented('Not implemented on web.');
    })();
  }
  pickLimitedLibraryPhotos() {
    var _this6 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this6.unavailable('Not implemented on web.');
    })();
  }
  getLimitedLibraryPhotos() {
    var _this7 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this7.unavailable('Not implemented on web.');
    })();
  }
}
const Camera = new CameraWeb();

//# sourceMappingURL=web.js.map

/***/ }),

/***/ 7464:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Capacitor: () => (/* binding */ Capacitor),
/* harmony export */   CapacitorCookies: () => (/* binding */ CapacitorCookies),
/* harmony export */   CapacitorException: () => (/* binding */ CapacitorException),
/* harmony export */   CapacitorHttp: () => (/* binding */ CapacitorHttp),
/* harmony export */   ExceptionCode: () => (/* binding */ ExceptionCode),
/* harmony export */   WebPlugin: () => (/* binding */ WebPlugin),
/* harmony export */   WebView: () => (/* binding */ WebView),
/* harmony export */   buildRequestInit: () => (/* binding */ buildRequestInit),
/* harmony export */   registerPlugin: () => (/* binding */ registerPlugin)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);

/*! Capacitor: https://capacitorjs.com/ - MIT License */
var ExceptionCode;
(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */
  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
}
const getPlatformId = win => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};
const createCapacitor = win => {
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  const getPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const isNativePlatform = () => getPlatform() !== 'web';
  const isPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }
    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }
    return false;
  };
  const getPluginHeader = pluginName => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };
  const handleError = err => win.console.error(err);
  const registeredPlugins = new Map();
  const registerPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }
        return jsImplementation;
      });
      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = prop => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }
        return p;
      };
      // Some flair ✨
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });
        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();
      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;
          case 'toJSON':
            return () => ({});
          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;
          case 'removeListener':
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };
  // Add in convertFileSrc for web, it will already be available in native context
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  return cap;
};
const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);
const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
  constructor() {
    this.listeners = {};
    this.retainedEventArguments = {};
    this.windowListeners = {};
  }
  addListener(eventName, listenerFunc) {
    var _this = this;
    let firstListener = false;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
      firstListener = true;
    }
    this.listeners[eventName].push(listenerFunc);
    // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    if (firstListener) {
      this.sendRetainedArgumentsForEvent(eventName);
    }
    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });
      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();
    const p = Promise.resolve({
      remove
    });
    return p;
  }
  removeAllListeners() {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};
      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }
      _this2.windowListeners = {};
    })();
  }
  notifyListeners(eventName, data, retainUntilConsumed) {
    const listeners = this.listeners[eventName];
    if (!listeners) {
      if (retainUntilConsumed) {
        let args = this.retainedEventArguments[eventName];
        if (!args) {
          args = [];
        }
        args.push(data);
        this.retainedEventArguments[eventName] = args;
      }
      return;
    }
    listeners.forEach(listener => listener(data));
  }
  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      _this3.listeners[eventName].splice(index, 1);
      // If there are no more listeners for this type of event,
      // remove the window listener
      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
  sendRetainedArgumentsForEvent(eventName) {
    const args = this.retainedEventArguments[eventName];
    if (!args) {
      return;
    }
    delete this.retainedEventArguments[eventName];
    args.forEach(arg => {
      this.notifyListeners(eventName, arg);
    });
  }
}
const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/
/******** COOKIES PLUGIN ********/
/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */
const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
/**
 * Safely web decode a string value (inspired by js-cookie)
 * @param str The string value to decode
 */
const decode = str => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class CapacitorCookiesPluginWeb extends WebPlugin {
  getCookies() {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(';').forEach(cookie => {
        if (cookie.length <= 0) return;
        // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="
        let [key, value] = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE');
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    })();
  }
  setCookie(options) {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        // Clean & sanitize options
        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="
        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : '';
        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  deleteCookie(options) {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearCookies() {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearAllCookies() {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
}
const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
});
// UTILITY FUNCTIONS
/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */
const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref6 = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        // remove prefix "data:application/pdf;base64,"
        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(blob);
    });
  });
  return function readBlobAsBase64(_x) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */
const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */
const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      // last character will always be "&" so slice it off
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, '');
  // Remove initial "&" from the reduce
  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */
const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra);
  // Get the content-type
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || '';
  // If body is already a string, then pass it through as-is.
  if (typeof options.data === 'string') {
    output.body = options.data;
  }
  // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes('multipart/form-data') || options.data instanceof FormData) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
// WEB IMPLEMENTATION
class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || '';
      // Default to 'text' responseType so no parsing happens
      let {
        responseType = 'text'
      } = response.ok ? options : {};
      // If the response content-type is json, force the response to be json
      if (contentType.includes('application/json')) {
        responseType = 'json';
      }
      let data;
      let blob;
      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case 'json':
          data = yield response.json();
          break;
        case 'document':
        case 'text':
        default:
          data = yield response.text();
      }
      // Convert fetch headers to Capacitor HttpHeaders
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    var _this5 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    var _this6 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    var _this7 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    var _this8 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    var _this9 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }
}
const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2332:
/*!**********************************************************************************!*\
  !*** ./src/app/tab5/components/connection-status/connection-status.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionStatusComponent: () => (/* binding */ ConnectionStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/story.service */ 450);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
var _ConnectionStatusComponent;





function ConnectionStatusComponent_ion_header_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 2)(1, "ion-toolbar", 3)(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 5)(6, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectionStatusComponent_ion_header_0_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.dismissBanner());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.isOnline ? "success" : "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r1.isOnline ? "cloud-done-outline" : "cloud-offline-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.isOnline ? "Conexi\u00F3n restaurada" : "Sin conexi\u00F3n a internet", " ");
  }
}
function ConnectionStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 10)(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sincronizando con Firebase...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
/**
 * ConnectionStatusComponent displays network connection status and Firebase sync indicator
 * Shows a banner when offline or connection is lost
 * Shows sync indicator when syncing with Firebase
 *
 * Validates: Requirements 14.1, 15.3
 */
class ConnectionStatusComponent {
  constructor() {
    this.storyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_story_service__WEBPACK_IMPORTED_MODULE_0__.StoryService);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.isOnline = true;
    this.showBanner = false;
    this.isSyncing = false;
    this.handleOnline = () => {
      const wasOffline = !this.isOnline;
      this.isOnline = true;
      if (wasOffline) {
        // Connection restored - show briefly then hide
        this.showBanner = true;
        setTimeout(() => {
          this.showBanner = false;
        }, 3000);
      }
    };
    this.handleOffline = () => {
      this.isOnline = false;
      this.showBanner = true;
    };
  }
  ngOnInit() {
    // Check initial network status
    this.isOnline = navigator.onLine;
    this.showBanner = !this.isOnline;
    // Listen for network status changes
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
    // Subscribe to sync status from StoryService
    this.syncSubscription = this.storyService.syncStatus$.subscribe(syncing => {
      this.isSyncing = syncing;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    var _this$syncSubscriptio;
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
    (_this$syncSubscriptio = this.syncSubscription) === null || _this$syncSubscriptio === void 0 || _this$syncSubscriptio.unsubscribe();
  }
  dismissBanner() {
    this.showBanner = false;
  }
}
_ConnectionStatusComponent = ConnectionStatusComponent;
_ConnectionStatusComponent.ɵfac = function ConnectionStatusComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConnectionStatusComponent)();
};
_ConnectionStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _ConnectionStatusComponent,
  selectors: [["app-connection-status"]],
  standalone: false,
  decls: 2,
  vars: 2,
  consts: [["class", "connection-banner", 4, "ngIf"], ["class", "sync-indicator", 4, "ngIf"], [1, "connection-banner"], [3, "color"], [3, "name"], ["slot", "end"], [3, "click"], ["name", "close"], [1, "sync-indicator"], ["name", "crescent", "color", "primary"], ["color", "primary"]],
  template: function ConnectionStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConnectionStatusComponent_ion_header_0_Template, 8, 3, "ion-header", 0)(1, ConnectionStatusComponent_div_1_Template, 5, 0, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBanner);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSyncing && ctx.isOnline);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: [".connection-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n.connection-banner[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --min-height: 48px;\n}\n.connection-banner[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  gap: 8px;\n}\n.connection-banner[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.sync-indicator[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 56px;\n  right: 16px;\n  z-index: 9998;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--ion-color-light);\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.sync-indicator[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.sync-indicator[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}"]
});

/***/ }),

/***/ 7544:
/*!****************************************************************************!*\
  !*** ./src/app/tab5/components/photo-uploader/photo-uploader.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotoUploaderComponent: () => (/* binding */ PhotoUploaderComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 1831);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4843);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/story.service */ 450);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 614);
/* harmony import */ var _services_image_optimizer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/image-optimizer.service */ 6688);
/* harmony import */ var _services_error_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error-toast.service */ 9847);
/* harmony import */ var _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/error-code.enum */ 2947);

var _PhotoUploaderComponent;













function PhotoUploaderComponent_div_12_div_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Pending...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PhotoUploaderComponent_div_12_div_6_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const progress_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", progress_r1.progress, "%");
  }
}
function PhotoUploaderComponent_div_12_div_6_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PhotoUploaderComponent_div_12_div_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Failed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PhotoUploaderComponent_div_12_div_6_ion_progress_bar_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-progress-bar", 22);
  }
  if (rf & 2) {
    const progress_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", progress_r1.progress / 100);
  }
}
function PhotoUploaderComponent_div_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "ion-text")(3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-text", 16)(6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, PhotoUploaderComponent_div_12_div_6_span_7_Template, 2, 0, "span", 18)(8, PhotoUploaderComponent_div_12_div_6_span_8_Template, 2, 1, "span", 18)(9, PhotoUploaderComponent_div_12_div_6_span_9_Template, 3, 0, "span", 18)(10, PhotoUploaderComponent_div_12_div_6_span_10_Template, 3, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, PhotoUploaderComponent_div_12_div_6_ion_progress_bar_11_Template, 1, 1, "ion-progress-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const progress_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("complete", progress_r1.status === "complete")("error", progress_r1.status === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](progress_r1.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", progress_r1.status === "error" ? "danger" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", progress_r1.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", progress_r1.status === "uploading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", progress_r1.status === "complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", progress_r1.status === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", progress_r1.status === "uploading" || progress_r1.status === "pending");
  }
}
function PhotoUploaderComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "ion-text", 10)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, PhotoUploaderComponent_div_12_div_6_Template, 12, 11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getUploadSummary());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.uploadProgresses);
  }
}
function PhotoUploaderComponent_ion_card_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-card", 23)(1, "ion-card-content")(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 26)(5, "ion-text", 27)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhotoUploaderComponent_ion_card_13_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.retryUpload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Retry Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.uploadError);
  }
}
/**
 * PhotoUploaderComponent handles photo selection, optimization, and upload
 *
 * Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 14.2, 15.1, 15.5
 */
class PhotoUploaderComponent {
  constructor() {
    this.storyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_story_service__WEBPACK_IMPORTED_MODULE_2__.StoryService);
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService);
    this.imageOptimizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_image_optimizer_service__WEBPACK_IMPORTED_MODULE_4__.ImageOptimizerService);
    this.errorToastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_error_toast_service__WEBPACK_IMPORTED_MODULE_5__.ErrorToastService);
    this.modalController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef);
    this.uploadProgresses = [];
    this.isUploading = false;
    this.uploadError = null;
    this.uploadSubscriptions = [];
    this.cachedFiles = []; // Cache files for retry
  }
  ngOnDestroy() {
    // Clean up subscriptions
    this.uploadSubscriptions.forEach(sub => sub.unsubscribe());
  }
  /**
   * Open device photo picker and select multiple photos
   * Implements permission error handling
   *
   * Validates: Requirements 4.1, 4.2, 4.3, 14.3
   */
  selectPhotos() {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.uploadError = null;
        // Request multiple photos from gallery
        const photos = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.pickImages({
          quality: 90
        });
        if (!photos.photos || photos.photos.length === 0) {
          return;
        }
        // Convert photos to File objects
        const files = [];
        for (const photo of photos.photos) {
          if (photo.webPath) {
            const response = yield fetch(photo.webPath);
            const blob = yield response.blob();
            const file = new File([blob], `photo-${Date.now()}.jpg`, {
              type: 'image/jpeg'
            });
            files.push(file);
          }
        }
        if (files.length > 0) {
          _this.cachedFiles = files; // Cache for retry
          yield _this.processAndUploadPhotos(files);
        }
      } catch (error) {
        var _error$message, _error$message2;
        _this.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.PERMISSION_DENIED, 'Error selecting photos', error);
        // Check if it's a permission error
        if ((_error$message = error.message) !== null && _error$message !== void 0 && _error$message.includes('permission') || (_error$message2 = error.message) !== null && _error$message2 !== void 0 && _error$message2.includes('denied')) {
          yield _this.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.PERMISSION_DENIED);
        } else {
          _this.uploadError = 'Error al seleccionar fotos. Por favor, intenta nuevamente.';
          yield _this.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.UNKNOWN_ERROR, _this.uploadError);
        }
      }
    })();
  }
  /**
   * Process selected photos: optimize and upload
   * Implements storage error handling with quota warnings
   */
  processAndUploadPhotos(files) {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.isUploading = true;
        _this2.uploadProgresses = [];
        // Check storage quota before upload
        const quotaCheck = yield _this2.storageService.checkStorageQuota();
        if (!quotaCheck.available) {
          yield _this2.errorToastService.showWarning('Límite de almacenamiento alcanzado. Las fotos se guardarán localmente.');
        }
        // Optimize images
        const optimizedFiles = yield _this2.optimizeImages(files);
        // Upload photos
        yield _this2.uploadPhotos(optimizedFiles);
      } catch (error) {
        _this2.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.UNKNOWN_ERROR, 'Error processing photos', error);
        _this2.uploadError = 'Error al procesar las fotos. Por favor, intenta nuevamente.';
        yield _this2.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.UNKNOWN_ERROR, _this2.uploadError);
        _this2.isUploading = false;
      }
    })();
  }
  /**
   * Optimize images before upload
   * Implements validation and error handling for invalid formats and sizes
   *
   * Validates: Requirements 13.1, 14.2, 14.3
   */
  optimizeImages(files) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const optimizedFiles = [];
      for (const file of files) {
        try {
          // Validate image
          if (!_this3.imageOptimizer.validateImage(file)) {
            _this3.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.INVALID_IMAGE_FORMAT, `Invalid image file: ${file.name}`);
            yield _this3.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.INVALID_IMAGE_FORMAT);
            continue;
          }
          // Check file size
          if (file.size > 10 * 1024 * 1024) {
            // 10MB
            _this3.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.IMAGE_TOO_LARGE, `Image too large: ${file.name}`);
            yield _this3.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.IMAGE_TOO_LARGE);
            continue;
          }
          // Compress image
          const compressed = yield _this3.imageOptimizer.compressImage(file, 1920, 0.85);
          optimizedFiles.push(compressed);
        } catch (error) {
          _this3.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.UNKNOWN_ERROR, `Error optimizing image ${file.name}`, error);
          // Continue with other files
        }
      }
      return optimizedFiles;
    })();
  }
  /**
   * Upload optimized photos to storage with progress tracking
   * Validates: Requirements 4.4, 4.5, 15.1, 15.5
   */
  uploadPhotos(optimizedFiles) {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const uploadPromises = [];
      for (let i = 0; i < optimizedFiles.length; i++) {
        const file = optimizedFiles[i];
        const photoId = _this4.generatePhotoId();
        const path = `stories/${_this4.storyId}/${photoId}.jpg`;
        // Initialize progress tracking
        _this4.uploadProgresses.push({
          photoId,
          fileName: `Photo ${i + 1}`,
          progress: 0,
          status: 'pending'
        });
        // Start upload
        const uploadPromise = new Promise((resolve, reject) => {
          let completedProgress = null;
          const subscription = _this4.storageService.uploadPhoto(file, path).subscribe({
            next: progress => {
              // Update progress in array
              const index = _this4.uploadProgresses.findIndex(p => p.photoId === photoId);
              if (index !== -1) {
                _this4.uploadProgresses[index] = progress;
                // Force change detection
                _this4.cdr.detectChanges();
              }
              // Store completed progress when upload finishes
              if (progress.status === 'complete') {
                completedProgress = progress;
              }
            },
            error: error => {
              console.error(`Upload failed for ${photoId}:`, error);
              reject(error);
            },
            complete: function () {
              var _ref = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                try {
                  if (completedProgress && completedProgress.url) {
                    // Add photo metadata to story
                    yield _this4.addPhotoToStory(photoId, completedProgress.url, completedProgress.storageType || 'cloudinary', file.size);
                    resolve();
                  } else {
                    reject(new Error('Upload completed but no URL received'));
                  }
                } catch (error) {
                  reject(error);
                }
              });
              return function complete() {
                return _ref.apply(this, arguments);
              };
            }()
          });
          _this4.uploadSubscriptions.push(subscription);
        });
        uploadPromises.push(uploadPromise);
      }
      try {
        // Wait for all uploads to complete
        yield Promise.all(uploadPromises);
        // All uploads successful
        _this4.isUploading = false;
        _this4.uploadProgresses = [];
        yield _this4.errorToastService.showSuccess('Fotos subidas exitosamente');
        // Close modal with success role
        _this4.modalController.dismiss(null, 'success');
      } catch (error) {
        _this4.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT, 'Error during upload', error);
        _this4.uploadError = 'Algunas fotos no se pudieron subir. Por favor, intenta nuevamente.';
        yield _this4.errorToastService.showErrorWithRetry(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT, () => _this4.retryUpload());
        _this4.isUploading = false;
      }
    })();
  }
  /**
   * Add photo metadata to story in Firestore
   * Validates: Requirements 4.5
   */
  addPhotoToStory(photoId, url, storageType, size) {
    var _this5 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Fetch current story using firstValueFrom
        const story = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this5.storyService.get(_this5.storyId));
        // Create new photo metadata
        const newPhoto = {
          id: photoId,
          url,
          storageType,
          order: story.photos.length,
          uploadedAt: new Date(),
          size
        };
        // Add photo to story
        story.photos.push(newPhoto);
        // Update photo count
        story.photoCount = story.photos.length;
        // Update updatedAt timestamp
        story.updatedAt = new Date();
        // Update story in Firestore
        yield _this5.storyService.update(story);
      } catch (error) {
        console.error('Error adding photo to story:', error);
        throw error;
      }
    })();
  }
  /**
   * Retry failed uploads
   * Uses cached files for retry
   *
   * Validates: Requirements 4.6, 14.2
   */
  retryUpload() {
    var _this6 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.cachedFiles.length > 0) {
        _this6.uploadError = null;
        yield _this6.processAndUploadPhotos(_this6.cachedFiles);
      } else {
        // No cached files, ask user to select again
        yield _this6.selectPhotos();
      }
    })();
  }
  /**
   * Get upload progress summary
   * Validates: Requirement 15.5
   */
  getUploadSummary() {
    const completed = this.uploadProgresses.filter(p => p.status === 'complete').length;
    const total = this.uploadProgresses.length;
    return `Subiendo ${completed} de ${total}`;
  }
  /**
   * Generate unique photo ID
   */
  generatePhotoId() {
    return `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  /**
   * Close modal without saving
   */
  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }
}
_PhotoUploaderComponent = PhotoUploaderComponent;
_PhotoUploaderComponent.ɵfac = function PhotoUploaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhotoUploaderComponent)();
};
_PhotoUploaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _PhotoUploaderComponent,
  selectors: [["app-photo-uploader"]],
  inputs: {
    storyId: "storyId"
  },
  decls: 14,
  vars: 3,
  consts: [["slot", "end"], [3, "click"], ["name", "close", "slot", "icon-only"], [1, "photo-uploader"], ["expand", "block", 1, "add-photos-button", 3, "click", "disabled"], ["slot", "start", "name", "images-outline"], ["class", "upload-progress-container", 4, "ngIf"], ["color", "danger", "class", "error-card", 4, "ngIf"], [1, "upload-progress-container"], [1, "upload-summary"], ["color", "primary"], [1, "progress-list"], ["class", "progress-item", 3, "complete", "error", 4, "ngFor", "ngForOf"], [1, "progress-item"], [1, "progress-info"], [1, "photo-name"], [3, "color"], [1, "progress-status"], [4, "ngIf"], ["color", "primary", 3, "value", 4, "ngIf"], ["name", "checkmark-circle", "color", "success"], ["name", "close-circle", "color", "danger"], ["color", "primary", 3, "value"], ["color", "danger", 1, "error-card"], [1, "error-content"], ["name", "alert-circle-outline", 1, "error-icon"], [1, "error-text"], ["color", "light"], ["expand", "block", "fill", "outline", "color", "light", 1, "retry-button", 3, "click"], ["slot", "start", "name", "refresh-outline"]],
  template: function PhotoUploaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Agregar Fotos");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhotoUploaderComponent_Template_ion_button_click_5_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-content")(8, "div", 3)(9, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhotoUploaderComponent_Template_ion_button_click_9_listener() {
        return ctx.selectPhotos();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Add Photos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, PhotoUploaderComponent_div_12_Template, 7, 2, "div", 6)(13, PhotoUploaderComponent_ion_card_13_Template, 11, 1, "ion-card", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isUploading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUploading && ctx.uploadProgresses.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.uploadError);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar],
  styles: [".photo-uploader[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .add-photos-button[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .upload-summary[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  text-align: center;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .upload-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: var(--ion-color-light);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%]   .progress-item.complete[_ngcontent-%COMP%] {\n  background: var(--ion-color-success-tint);\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%]   .progress-item.error[_ngcontent-%COMP%] {\n  background: var(--ion-color-danger-tint);\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .photo-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-status[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-status[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .upload-progress-container[_ngcontent-%COMP%]   .progress-list[_ngcontent-%COMP%]   .progress-item[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 3px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.photo-uploader[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.photo-uploader[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.photo-uploader[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.photo-uploader[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}"]
});

/***/ }),

/***/ 2888:
/*!************************************************************************!*\
  !*** ./src/app/tab5/components/retry-button/retry-button.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetryButtonComponent: () => (/* binding */ RetryButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 4474);
var _RetryButtonComponent;



/**
 * RetryButtonComponent provides a reusable retry button for failed operations
 *
 * Validates: Requirements 14.2
 */
class RetryButtonComponent {
  constructor() {
    this.disabled = false;
    this.loading = false;
    this.text = 'Reintentar';
    this.icon = 'refresh-outline';
    this.color = 'primary';
    this.size = 'default';
    this.retry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onRetry() {
    if (!this.disabled && !this.loading) {
      this.retry.emit();
    }
  }
}
_RetryButtonComponent = RetryButtonComponent;
_RetryButtonComponent.ɵfac = function RetryButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RetryButtonComponent)();
};
_RetryButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _RetryButtonComponent,
  selectors: [["app-retry-button"]],
  inputs: {
    disabled: "disabled",
    loading: "loading",
    text: "text",
    icon: "icon",
    color: "color",
    size: "size"
  },
  outputs: {
    retry: "retry"
  },
  standalone: false,
  decls: 3,
  vars: 5,
  consts: [[3, "click", "color", "disabled", "size"], ["slot", "start", 3, "name"]],
  template: function RetryButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetryButtonComponent_Template_ion_button_click_0_listener() {
        return ctx.onRetry();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("disabled", ctx.disabled || ctx.loading)("size", ctx.size);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.loading ? "hourglass-outline" : ctx.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Reintentando..." : ctx.text, "\n");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon],
  styles: ["ion-button[_ngcontent-%COMP%] {\n  --border-radius: 8px;\n}\nion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}"]
});

/***/ }),

/***/ 5318:
/*!********************************************************************!*\
  !*** ./src/app/tab5/components/story-card/story-card.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryCardComponent: () => (/* binding */ StoryCardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);

var _StoryCardComponent;




function StoryCardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
/**
 * StoryCardComponent
 *
 * Displays individual story cover in grid with loading indicators
 *
 * Validates: Requirements 13.5, 15.2
 */
class StoryCardComponent {
  constructor(actionSheetController) {
    this.actionSheetController = actionSheetController;
    this.tap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isImageLoading = true;
  }
  onCardTap() {
    this.tap.emit(this.story.id);
  }
  onLongPress() {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetController.create({
        header: _this.story.title,
        buttons: [{
          text: 'Edit',
          icon: 'create-outline',
          handler: () => {
            _this.edit.emit(_this.story.id);
          }
        }, {
          text: 'Delete',
          icon: 'trash-outline',
          role: 'destructive',
          handler: () => {
            _this.delete.emit(_this.story.id);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }
  /**
   * Handle image load event
   * Hides loading indicator when image successfully loads
   *
   * Validates: Requirements 13.5
   */
  onImageLoad() {
    this.isImageLoading = false;
  }
  /**
   * Handle image error event
   * Hides loading indicator when image fails to load
   *
   * Validates: Requirements 13.5, 14.3
   */
  onImageError() {
    this.isImageLoading = false;
  }
}
_StoryCardComponent = StoryCardComponent;
_StoryCardComponent.ɵfac = function StoryCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoryCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ActionSheetController));
};
_StoryCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _StoryCardComponent,
  selectors: [["app-story-card"]],
  inputs: {
    story: "story"
  },
  outputs: {
    tap: "tap",
    edit: "edit",
    delete: "delete"
  },
  standalone: false,
  decls: 10,
  vars: 5,
  consts: [["button", "", 1, "story-card", 3, "click", "press"], [1, "story-card-content"], ["class", "image-loading-placeholder", 4, "ngIf"], ["loading", "lazy", 1, "cover-image", 3, "ionImgDidLoad", "ionError", "src", "alt"], [1, "story-overlay"], [1, "story-title"], ["color", "dark", 1, "photo-count-badge"], ["name", "images-outline"], [1, "image-loading-placeholder"], ["name", "crescent"]],
  template: function StoryCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoryCardComponent_Template_ion_card_click_0_listener() {
        return ctx.onCardTap();
      })("press", function StoryCardComponent_Template_ion_card_press_0_listener() {
        return ctx.onLongPress();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StoryCardComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionImgDidLoad", function StoryCardComponent_Template_ion_img_ionImgDidLoad_3_listener() {
        return ctx.onImageLoad();
      })("ionError", function StoryCardComponent_Template_ion_img_ionError_3_listener() {
        return ctx.onImageError();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-badge", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.story.coverUrl)("alt", ctx.story.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.story.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.story.photoCount, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSpinner],
  styles: [".story-card[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  cursor: pointer;\n}\n.story-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.story-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.story-card-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-bottom: 133.33%;\n  overflow: hidden;\n}\n\n.cover-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.image-loading-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--ion-color-light);\n  z-index: 1;\n}\n.image-loading-placeholder[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n\n.story-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 16px;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);\n  display: flex;\n  align-items: flex-end;\n}\n\n.story-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.photo-count-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  background: rgba(0, 0, 0, 0.6);\n}\n.photo-count-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}"]
});

/***/ }),

/***/ 5232:
/*!****************************************************************************************!*\
  !*** ./src/app/tab5/components/story-creation-modal/story-creation-modal.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryCreationModalComponent: () => (/* binding */ StoryCreationModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 1831);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9417);

var _StoryCreationModalComponent;







function StoryCreationModalComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StoryCreationModalComponent_div_18_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectCoverImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Cambiar imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.coverImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isSelectingImage);
  }
}
function StoryCreationModalComponent_ion_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StoryCreationModalComponent_ion_button_19_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectCoverImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isSelectingImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.isSelectingImage ? "Seleccionando..." : "Seleccionar imagen", " ");
  }
}
class StoryCreationModalComponent {
  constructor() {
    this.modalController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController);
    this.toastController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController);
    this.title = '';
    this.coverImageUrl = null;
    this.coverImageFile = null;
    this.isSelectingImage = false;
  }
  /**
   * Select cover image using Capacitor Camera/Filesystem plugin
   */
  selectCoverImage() {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.isSelectingImage = true;
        // Request camera permissions and open photo picker
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.DataUrl,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos // Use photo library
        });
        if (image.dataUrl) {
          _this.coverImageUrl = image.dataUrl;
          // Convert data URL to Blob for upload
          _this.coverImageFile = yield _this.dataUrlToBlob(image.dataUrl);
        }
      } catch (error) {
        console.error('Error selecting image:', error);
        yield _this.showToast('Error al seleccionar la imagen. Por favor, inténtalo de nuevo.');
      } finally {
        _this.isSelectingImage = false;
      }
    })();
  }
  /**
   * Convert data URL to Blob
   */
  dataUrlToBlob(dataUrl) {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield fetch(dataUrl);
      return response.blob();
    })();
  }
  /**
   * Check if form is valid
   */
  isFormValid() {
    return this.title.trim().length > 0 && this.coverImageFile !== null;
  }
  /**
   * Cancel and close modal
   */
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }
  /**
   * Create story and close modal with data
   */
  create() {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.isFormValid()) {
        yield _this2.showToast('Por favor, completa todos los campos requeridos.');
        return;
      }
      // Return the story data to the parent component
      _this2.modalController.dismiss({
        title: _this2.title.trim(),
        coverImageFile: _this2.coverImageFile,
        coverImageUrl: _this2.coverImageUrl
      }, 'create');
    })();
  }
  /**
   * Show toast message
   */
  showToast(message) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message,
        duration: 3000,
        position: 'bottom'
      });
      yield toast.present();
    })();
  }
}
_StoryCreationModalComponent = StoryCreationModalComponent;
_StoryCreationModalComponent.ɵfac = function StoryCreationModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoryCreationModalComponent)();
};
_StoryCreationModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _StoryCreationModalComponent,
  selectors: [["app-story-creation-modal"]],
  standalone: false,
  decls: 22,
  vars: 5,
  consts: [["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], ["slot", "end"], [3, "click", "disabled", "strong"], [1, "ion-padding"], ["position", "stacked"], ["placeholder", "Ej: Viaje a Par\u00EDs 2024", "maxlength", "100", "required", "", 3, "ngModelChange", "ngModel"], [1, "cover-image-section"], [1, "section-label"], ["class", "cover-preview-container", 4, "ngIf"], ["expand", "block", "class", "select-image-button", 3, "disabled", "click", 4, "ngIf"], [1, "validation-note"], [1, "cover-preview-container"], ["alt", "Vista previa de portada", "loading", "lazy", 1, "cover-preview", 3, "src"], ["fill", "clear", 1, "change-image-button", 3, "click", "disabled"], ["slot", "start", "name", "images-outline"], ["expand", "block", 1, "select-image-button", 3, "click", "disabled"]],
  template: function StoryCreationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StoryCreationModalComponent_Template_ion_button_click_3_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nueva Historia");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-buttons", 3)(8, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StoryCreationModalComponent_Template_ion_button_click_8_listener() {
        return ctx.create();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Crear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-content", 5)(11, "ion-item")(12, "ion-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "T\u00EDtulo *");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StoryCreationModalComponent_Template_ion_input_ngModelChange_14_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.title, $event) || (ctx.title = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Imagen de portada *");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, StoryCreationModalComponent_div_18_Template, 5, 2, "div", 10)(19, StoryCreationModalComponent_ion_button_19_Template, 3, 2, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " * Campos requeridos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.isFormValid())("strong", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.coverImageUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.coverImageUrl);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor],
  styles: [".cover-image-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n.cover-image-section[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-weight: 500;\n  color: var(--ion-color-medium);\n}\n\n.cover-preview-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.cover-preview-container[_ngcontent-%COMP%]   .cover-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  height: auto;\n  border-radius: 8px;\n  object-fit: cover;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.cover-preview-container[_ngcontent-%COMP%]   .change-image-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.select-image-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.validation-note[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 16px;\n  font-size: 0.875rem;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}"]
});

/***/ }),

/***/ 4312:
/*!************************************************************************!*\
  !*** ./src/app/tab5/components/story-editor/story-editor.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryEditorComponent: () => (/* binding */ StoryEditorComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 1831);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/story.service */ 450);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 614);
/* harmony import */ var _services_image_optimizer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/image-optimizer.service */ 6688);
/* harmony import */ var _services_error_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error-toast.service */ 9847);
/* harmony import */ var _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/error-code.enum */ 2947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4843);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 9417);

var _StoryEditorComponent;













function StoryEditorComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Cargando historia...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function StoryEditorComponent_div_9_ion_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-img", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getDisplayCoverUrl());
  }
}
function StoryEditorComponent_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Sin portada");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function StoryEditorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, StoryEditorComponent_div_9_ion_img_2_Template, 1, 1, "ion-img", 10)(3, StoryEditorComponent_div_9_div_3_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StoryEditorComponent_div_9_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.changeCover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-item", 14)(8, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "T\u00EDtulo de la Historia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function StoryEditorComponent_div_9_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.title, $event) || (ctx_r1.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionInput", function StoryEditorComponent_div_9_Template_ion_input_ionInput_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.updateTitle($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StoryEditorComponent_div_9_Template_ion_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.saveChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StoryEditorComponent_div_9_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.getDisplayCoverUrl());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.getDisplayCoverUrl());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isSelectingImage || ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.isSelectingImage ? "Seleccionando..." : "Cambiar Portada", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.title.length, " / 100 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.isFormValid() || !ctx_r1.hasChanges() || ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.isSaving ? "Guardando..." : "Guardar Cambios", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isSaving);
  }
}
/**
 * StoryEditorComponent - Modal component for editing story title and cover image
 *
 * Validates: Requirements 11.1, 11.2, 11.3, 11.4, 11.5
 */
class StoryEditorComponent {
  constructor() {
    this.modalController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController);
    this.toastController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController);
    this.storyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_story_service__WEBPACK_IMPORTED_MODULE_2__.StoryService);
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService);
    this.imageOptimizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_image_optimizer_service__WEBPACK_IMPORTED_MODULE_4__.ImageOptimizerService);
    this.errorToastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_error_toast_service__WEBPACK_IMPORTED_MODULE_5__.ErrorToastService);
    this.story = null;
    this.title = '';
    this.newCoverImageUrl = null;
    this.newCoverImageFile = null;
    this.isLoading = false;
    this.isSelectingImage = false;
    this.isSaving = false;
  }
  /**
   * Load story data on component initialization
   */
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loadStory();
    })();
  }
  /**
   * Load story data from StoryService
   * Implements network error handling
   */
  loadStory() {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.isLoading = true;
        _this2.story = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this2.storyService.get(_this2.storyId));
        if (_this2.story) {
          _this2.title = _this2.story.title;
        }
      } catch (error) {
        _this2.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT, 'Error loading story', error);
        yield _this2.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT);
        _this2.cancel();
      } finally {
        _this2.isLoading = false;
      }
    })();
  }
  /**
   * Select and upload new cover image using Capacitor Camera plugin
   * Implements permission error handling
   */
  changeCover() {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.isSelectingImage = true;
        // Request camera permissions and open photo picker
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.DataUrl,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos // Use photo library
        });
        if (image.dataUrl) {
          _this3.newCoverImageUrl = image.dataUrl;
          // Convert data URL to Blob for upload
          _this3.newCoverImageFile = yield _this3.dataUrlToBlob(image.dataUrl);
        }
      } catch (error) {
        var _error$message, _error$message2;
        _this3.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.PERMISSION_DENIED, 'Error selecting image', error);
        // Check if it's a permission error
        if ((_error$message = error.message) !== null && _error$message !== void 0 && _error$message.includes('permission') || (_error$message2 = error.message) !== null && _error$message2 !== void 0 && _error$message2.includes('denied')) {
          yield _this3.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.PERMISSION_DENIED);
        } else {
          yield _this3.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.UNKNOWN_ERROR, 'Error al seleccionar la imagen. Por favor, inténtalo de nuevo.');
        }
      } finally {
        _this3.isSelectingImage = false;
      }
    })();
  }
  /**
   * Convert data URL to Blob
   */
  dataUrlToBlob(dataUrl) {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield fetch(dataUrl);
      return response.blob();
    })();
  }
  /**
   * Convert Blob to File
   */
  blobToFile(blob, fileName) {
    return new File([blob], fileName, {
      type: blob.type
    });
  }
  /**
   * Update story title
   */
  updateTitle(newTitle) {
    this.title = newTitle;
  }
  /**
   * Check if there are changes to save
   */
  hasChanges() {
    if (!this.story) return false;
    return this.title.trim() !== this.story.title || this.newCoverImageFile !== null;
  }
  /**
   * Check if form is valid
   */
  isFormValid() {
    return this.title.trim().length > 0;
  }
  /**
   * Save changes to story
   * Implements comprehensive error handling for network, storage, and data integrity errors
   */
  saveChanges() {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.isFormValid() || !_this4.story) {
        yield _this4.showToast('Por favor, completa todos los campos requeridos.');
        return;
      }
      if (!_this4.hasChanges()) {
        yield _this4.showToast('No hay cambios para guardar.');
        return;
      }
      try {
        _this4.isSaving = true;
        // Update story object
        const updatedStory = {
          ..._this4.story,
          title: _this4.title.trim()
        };
        // If new cover image selected, upload it
        if (_this4.newCoverImageFile) {
          // Convert Blob to File for image optimizer
          const imageFile = _this4.blobToFile(_this4.newCoverImageFile, `cover-${Date.now()}.jpg`);
          // Validate image
          if (!_this4.imageOptimizer.validateImage(imageFile)) {
            yield _this4.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.INVALID_IMAGE_FORMAT);
            return;
          }
          // Check file size
          if (imageFile.size > 10 * 1024 * 1024) {
            yield _this4.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.IMAGE_TOO_LARGE);
            return;
          }
          // Optimize image before upload
          const optimizedImage = yield _this4.imageOptimizer.compressImage(imageFile, 1920, 0.85);
          // Generate thumbnail
          const thumbnail = yield _this4.imageOptimizer.generateThumbnail(imageFile, 300);
          // Upload cover image
          const coverPath = `stories/${_this4.storyId}/cover-${Date.now()}.jpg`;
          // Wait for upload to complete
          const uploadResult = yield new Promise((resolve, reject) => {
            _this4.storageService.uploadPhoto(thumbnail, coverPath).subscribe({
              next: progress => {
                if (progress.status === 'complete') {
                  resolve(progress);
                } else if (progress.status === 'error') {
                  reject(new Error(progress.error || 'Upload failed'));
                }
              },
              error: error => {
                reject(error);
              }
            });
          });
          if (uploadResult.url) {
            updatedStory.coverUrl = uploadResult.url;
            updatedStory.coverStorageType = uploadResult.storageType || 'cloudinary';
          } else {
            throw new Error('Failed to upload cover image');
          }
        }
        // Update story in Firestore
        yield _this4.storyService.update(updatedStory);
        // Show success message (Requirement 11.5)
        yield _this4.showNativeToast('Cambios guardados exitosamente');
        // Close modal and return updated story with refresh flag
        _this4.modalController.dismiss({
          story: updatedStory,
          updated: true
        }, 'save');
      } catch (error) {
        _this4.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.UNKNOWN_ERROR, 'Error saving changes', error);
        // Determine error type
        const errorCode = _this4.determineErrorCode(error);
        yield _this4.errorToastService.showErrorWithRetry(errorCode, () => _this4.saveChanges());
      } finally {
        _this4.isSaving = false;
      }
    })();
  }
  /**
   * Cancel and close modal
   */
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }
  /**
   * Show toast message
   */
  showToast(message) {
    var _this5 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastController.create({
        message,
        duration: 3000,
        position: 'bottom',
        cssClass: 'neutral-toast'
      });
      yield toast.present();
    })();
  }
  /**
   * Show native-style toast message
   */
  showNativeToast(message) {
    var _this6 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this6.toastController.create({
        message,
        duration: 2000,
        position: 'bottom',
        cssClass: 'neutral-toast',
        buttons: [{
          icon: 'checkmark-circle',
          side: 'start'
        }]
      });
      yield toast.present();
    })();
  }
  /**
   * Get display cover URL (new cover or existing)
   */
  getDisplayCoverUrl() {
    var _this$story;
    if (this.newCoverImageUrl) {
      return this.newCoverImageUrl;
    }
    return ((_this$story = this.story) === null || _this$story === void 0 ? void 0 : _this$story.coverUrl) || null;
  }
  /**
   * Determine error code from error object
   */
  determineErrorCode(error) {
    var _error$message3;
    const errorMessage = (error === null || error === void 0 || (_error$message3 = error.message) === null || _error$message3 === void 0 ? void 0 : _error$message3.toLowerCase()) || '';
    const errorCode = (error === null || error === void 0 ? void 0 : error.code) || '';
    if (errorMessage.includes('network') || errorMessage.includes('timeout')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT;
    }
    if (errorMessage.includes('quota') || errorCode === 'storage/quota-exceeded') {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.CLOUDINARY_QUOTA_EXCEEDED;
    }
    if (errorMessage.includes('permission')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.PERMISSION_DENIED;
    }
    if (errorMessage.includes('format')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.INVALID_IMAGE_FORMAT;
    }
    if (errorMessage.includes('too large')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.IMAGE_TOO_LARGE;
    }
    if (errorMessage.includes('corrupt')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.DATA_CORRUPTION;
    }
    return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.UNKNOWN_ERROR;
  }
}
_StoryEditorComponent = StoryEditorComponent;
_StoryEditorComponent.ɵfac = function StoryEditorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoryEditorComponent)();
};
_StoryEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _StoryEditorComponent,
  selectors: [["app-story-editor"]],
  inputs: {
    storyId: "storyId"
  },
  standalone: false,
  decls: 10,
  vars: 2,
  consts: [["slot", "end"], [3, "click"], ["name", "close", "slot", "icon-only"], [1, "ion-padding"], ["class", "loading-container", 4, "ngIf"], ["class", "edit-form", 4, "ngIf"], [1, "loading-container"], ["name", "crescent"], [1, "edit-form"], [1, "cover-preview"], ["alt", "Portada de la historia", "loading", "lazy", 3, "src", 4, "ngIf"], ["class", "no-cover", 4, "ngIf"], ["expand", "block", "fill", "outline", 3, "click", "disabled"], ["name", "camera", "slot", "start"], [1, "title-input"], ["position", "stacked"], ["type", "text", "placeholder", "Ingresa un t\u00EDtulo", "maxlength", "100", 3, "ngModelChange", "ionInput", "ngModel", "disabled"], [1, "character-count"], ["expand", "block", 3, "click", "disabled"], ["name", "save", "slot", "start"], ["expand", "block", "fill", "clear", 3, "click", "disabled"], ["alt", "Portada de la historia", "loading", "lazy", 3, "src"], [1, "no-cover"], ["name", "image-outline"]],
  template: function StoryEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Editar Historia");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StoryEditorComponent_Template_ion_button_click_5_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, StoryEditorComponent_div_8_Template, 4, 0, "div", 4)(9, StoryEditorComponent_div_9_Template, 18, 10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.story);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor],
  styles: [".loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  gap: 1rem;\n}\n.loading-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n\n.edit-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.cover-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 16/9;\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--ion-color-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cover-preview[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cover-preview[_ngcontent-%COMP%]   .no-cover[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: var(--ion-color-medium);\n}\n.cover-preview[_ngcontent-%COMP%]   .no-cover[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.cover-preview[_ngcontent-%COMP%]   .no-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n\n.title-input[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.title-input[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.title-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n  margin-top: 0.5rem;\n}\n\n.character-count[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  margin-top: -0.5rem;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  --border-radius: 8px;\n  font-weight: 600;\n}"]
});

/***/ }),

/***/ 3122:
/*!************************************************************************!*\
  !*** ./src/app/tab5/components/story-viewer/story-viewer.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryViewerComponent: () => (/* binding */ StoryViewerComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 605);
/* harmony import */ var _models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/error-code.enum */ 2947);
/* harmony import */ var _photo_uploader_photo_uploader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo-uploader/photo-uploader.component */ 7544);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/story.service */ 450);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 614);
/* harmony import */ var _services_error_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error-toast.service */ 9847);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 177);

var _StoryViewerComponent;










const _c0 = ["photoUploaderContainer"];
function StoryViewerComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r1 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", i_r1 === ctx_r1.currentPhotoIndex)("completed", i_r1 < ctx_r1.currentPhotoIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", i_r1 === ctx_r1.currentPhotoIndex ? ctx_r1.progressPercentage : i_r1 < ctx_r1.currentPhotoIndex ? 100 : 0, "%");
  }
}
function StoryViewerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, StoryViewerComponent_div_9_div_1_Template, 2, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.photos);
  }
}
function StoryViewerComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getPhotoCounter(), " ");
  }
}
function StoryViewerComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "No hay historias para este viaje todav\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Toca el bot\u00F3n \"A\u00F1adir\" para agregar fotos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function StoryViewerComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", (tmp_2_0 = ctx_r1.getCurrentPhoto()) == null ? null : tmp_2_0.url);
  }
}
function StoryViewerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StoryViewerComponent_div_11_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.handleTap($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, StoryViewerComponent_div_11_div_1_Template, 6, 0, "div", 19)(2, StoryViewerComponent_div_11_div_2_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.photos.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.getCurrentPhoto());
  }
}
function StoryViewerComponent_ion_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StoryViewerComponent_ion_button_12_Template_ion_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.deletePhoto(ctx_r1.getCurrentPhoto().id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StoryViewerComponent_div_13_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 32)(1, "ion-thumbnail", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label")(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-reorder", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", photo_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Photo ", i_r7 + 1, "");
  }
}
function StoryViewerComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Reorder Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Drag photos to change their order");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-reorder-group", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionItemReorder", function StoryViewerComponent_div_13_Template_ion_reorder_group_ionItemReorder_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.reorderPhotos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, StoryViewerComponent_div_13_ion_item_7_Template, 8, 2, "ion-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.photos);
  }
}
function StoryViewerComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-spinner", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class StoryViewerComponent {
  constructor(storyService, storageService, errorToastService, modalController, alertController) {
    this.storyService = storyService;
    this.storageService = storageService;
    this.errorToastService = errorToastService;
    this.modalController = modalController;
    this.alertController = alertController;
    this.story = null;
    this.photos = [];
    this.currentPhotoIndex = 0;
    this.progressPercentage = 0;
    this.isEditMode = false;
    this.storyUpdated = false;
    this.autoAdvanceTimer = null;
    this.progressTimer = null;
    this.AUTO_ADVANCE_DURATION = 5000; // 5 seconds
    this.PROGRESS_UPDATE_INTERVAL = 100; // Update every 100ms
    this.preloadedImages = new Map(); // Cache for preloaded images
    this.photoUploaderRef = null;
  }
  ngOnInit() {
    this.loadStory();
  }
  ngOnDestroy() {
    this.stopAutoAdvance();
  }
  /**
   * Load story and photos from StoryService
   * Implements network error handling
   *
   * Requirements: 5.1, 5.2, 14.1, 14.5
   */
  loadStory() {
    this.storyService.get(this.storyId).subscribe({
      next: story => {
        // Fix inconsistency: update photoCount if it doesn't match photos array length
        if (story.photoCount !== story.photos.length) {
          story.photoCount = story.photos.length;
          // Update in Firestore
          this.storyService.update(story).catch(error => {
            console.error('Error updating photoCount:', error);
          });
        }
        this.story = story;
        this.photos = story.photos.sort((a, b) => a.order - b.order);
        this.currentPhotoIndex = 0;
        this.preloadNextPhoto(); // Preload next photo for smooth transitions
        this.startAutoAdvance();
      },
      error: error => {
        this.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.NETWORK_TIMEOUT, 'Error loading story', error);
        this.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.NETWORK_TIMEOUT);
        this.closeViewer();
      }
    });
  }
  /**
   * Start auto-advance timer
   * Requirements: 6.1, 6.4
   */
  startAutoAdvance() {
    this.stopAutoAdvance();
    this.progressPercentage = 0;
    // Start progress bar update
    let elapsed = 0;
    this.progressTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.interval)(this.PROGRESS_UPDATE_INTERVAL).subscribe(() => {
      elapsed += this.PROGRESS_UPDATE_INTERVAL;
      this.progressPercentage = elapsed / this.AUTO_ADVANCE_DURATION * 100;
      if (this.progressPercentage >= 100) {
        this.progressPercentage = 100;
      }
    });
    // Start auto-advance timer
    this.autoAdvanceTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.interval)(this.AUTO_ADVANCE_DURATION).subscribe(() => {
      this.nextPhoto();
    });
  }
  /**
   * Pause auto-advance timer
   * Requirements: 6.4, 7.5
   */
  pauseAutoAdvance() {
    if (this.autoAdvanceTimer) {
      this.autoAdvanceTimer.unsubscribe();
      this.autoAdvanceTimer = null;
    }
    if (this.progressTimer) {
      this.progressTimer.unsubscribe();
      this.progressTimer = null;
    }
  }
  /**
   * Stop auto-advance timer completely
   */
  stopAutoAdvance() {
    this.pauseAutoAdvance();
  }
  /**
   * Reset auto-advance timer from zero
   * Requirements: 6.4
   */
  resetAutoAdvance() {
    this.startAutoAdvance();
  }
  /**
   * Handle tap events for manual navigation
   * Requirements: 7.1, 7.2, 7.3, 7.4, 7.5
   */
  handleTap(event) {
    this.pauseAutoAdvance();
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const screenWidth = window.innerWidth;
    const tapPosition = clientX / screenWidth;
    // Left half tap - go to previous photo
    if (tapPosition < 0.5) {
      this.previousPhoto();
    }
    // Right half tap - go to next photo
    else {
      this.nextPhoto();
    }
    this.resetAutoAdvance();
  }
  /**
   * Advance to next photo or close viewer if last photo
   * Requirements: 7.1, 7.4, 13.4, 13.5
   */
  nextPhoto() {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
      this.preloadNextPhoto(); // Preload next photo for smooth transitions
      this.resetAutoAdvance();
    } else {
      // Last photo - close viewer
      this.closeViewer();
    }
  }
  /**
   * Go back to previous photo
   * Requirements: 7.2, 7.3
   */
  previousPhoto() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
      this.preloadNextPhoto(); // Preload next photo for smooth transitions
    }
    // If already at first photo (index 0), stay there
  }
  /**
   * Close viewer and return to main view
   * Requirements: 5.5
   */
  closeViewer() {
    this.stopAutoAdvance();
    this.modalController.dismiss(this.storyUpdated ? {
      updated: true
    } : null);
  }
  /**
   * Get current photo counter text
   * Requirements: 5.4
   */
  getPhotoCounter() {
    if (this.photos.length === 0) {
      return '0 / 0';
    }
    return `${this.currentPhotoIndex + 1} / ${this.photos.length}`;
  }
  /**
   * Get current photo
   */
  getCurrentPhoto() {
    return this.photos[this.currentPhotoIndex] || null;
  }
  /**
   * Delete current photo with confirmation dialog
   * Requirements: 10.4, 10.5, 10.6
   */
  deletePhoto(photoId) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Show confirmation dialog
      const alert = yield _this.alertController.create({
        header: 'Delete Photo',
        message: 'Are you sure you want to delete this photo? This action cannot be undone.',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          role: 'destructive',
          handler: function () {
            var _ref = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this.performPhotoDelete(photoId);
            });
            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }]
      });
      yield alert.present();
    })();
  }
  /**
   * Perform the actual photo deletion
   * Implements data integrity error handling
   *
   * Requirements: 10.5, 14.4
   */
  performPhotoDelete(photoId) {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.story) return;
      try {
        // Find the photo to delete
        const photoToDelete = _this2.photos.find(p => p.id === photoId);
        if (!photoToDelete) {
          _this2.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.DATA_CORRUPTION, 'Photo not found', photoId);
          yield _this2.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.DATA_CORRUPTION);
          return;
        }
        // Delete photo from storage
        yield _this2.storageService.deletePhoto(photoToDelete.url, photoToDelete.storageType);
        // Remove photo from photos array
        const updatedPhotos = _this2.story.photos.filter(p => p.id !== photoId);
        // Update story metadata
        const updatedStory = {
          ..._this2.story,
          photos: updatedPhotos,
          photoCount: updatedPhotos.length
        };
        // Save updated story to Firestore
        yield _this2.storyService.update(updatedStory);
        // Update local state
        _this2.story = updatedStory;
        _this2.photos = updatedPhotos.sort((a, b) => a.order - b.order);
        yield _this2.errorToastService.showSuccess('Foto eliminada exitosamente');
        // Navigate to next photo or close viewer if last photo deleted
        if (_this2.photos.length === 0) {
          // No photos left, close viewer
          _this2.closeViewer();
        } else if (_this2.currentPhotoIndex >= _this2.photos.length) {
          // Current index out of bounds, go to last photo
          _this2.currentPhotoIndex = _this2.photos.length - 1;
          _this2.resetAutoAdvance();
        } else {
          // Stay on current index (which now shows the next photo)
          _this2.resetAutoAdvance();
        }
      } catch (error) {
        _this2.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.DATA_CORRUPTION, 'Error deleting photo', error);
        yield _this2.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.DATA_CORRUPTION, 'No se pudo eliminar la foto. Por favor, intenta nuevamente.');
      }
    })();
  }
  /**
   * Toggle edit mode for photo reordering
   * Requirements: 12.1
   */
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      // Pause auto-advance when entering edit mode
      this.stopAutoAdvance();
    } else {
      // Resume auto-advance when exiting edit mode
      this.startAutoAdvance();
    }
  }
  /**
   * Handle photo reordering from ion-reorder-group
   * Implements data integrity error handling
   *
   * Requirements: 12.2, 12.3, 12.4, 14.4
   */
  reorderPhotos(event) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.story) return;
      try {
        // Reorder the photos array based on the drag event
        const itemToMove = _this3.photos.splice(event.detail.from, 1)[0];
        _this3.photos.splice(event.detail.to, 0, itemToMove);
        // Update order property for each photo
        _this3.photos.forEach((photo, index) => {
          photo.order = index;
        });
        // Complete the reorder animation
        event.detail.complete();
        // Save new order to Firestore
        const photoIds = _this3.photos.map(p => p.id);
        yield _this3.storyService.reorderPhotos(_this3.story.id, photoIds);
        // Update local story state
        _this3.story.photos = [..._this3.photos];
        yield _this3.errorToastService.showSuccess('Orden actualizado exitosamente');
      } catch (error) {
        _this3.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.DATA_CORRUPTION, 'Error reordering photos', error);
        yield _this3.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.DATA_CORRUPTION, 'No se pudo reordenar las fotos. Por favor, intenta nuevamente.');
      }
    })();
  }
  /**
   * Exit edit mode and refresh viewer
   */
  exitEditMode() {
    this.isEditMode = false;
    this.startAutoAdvance();
  }
  /**
   * Preload next photo for smooth transitions
   * Implements progressive loading optimization
   *
   * Requirements: 13.4, 13.5
   */
  preloadNextPhoto() {
    // Get next photo index
    const nextIndex = this.currentPhotoIndex + 1;
    // Check if there is a next photo
    if (nextIndex < this.photos.length) {
      const nextPhoto = this.photos[nextIndex];
      // Check if already preloaded
      if (!this.preloadedImages.has(nextPhoto.url)) {
        // Create new image element for preloading
        const img = new Image();
        // Set up load handlers
        img.onload = () => {
          // Store in cache
          this.preloadedImages.set(nextPhoto.url, img);
        };
        img.onerror = error => {
          console.warn(`Failed to preload photo ${nextIndex + 1}:`, error);
          // Don't show error to user, just log it
        };
        // Start loading
        img.src = nextPhoto.url;
      }
    }
    // Also preload previous photo if navigating backwards
    const prevIndex = this.currentPhotoIndex - 1;
    if (prevIndex >= 0) {
      const prevPhoto = this.photos[prevIndex];
      if (!this.preloadedImages.has(prevPhoto.url)) {
        const img = new Image();
        img.onload = () => {
          this.preloadedImages.set(prevPhoto.url, img);
        };
        img.onerror = error => {
          console.warn(`Failed to preload previous photo:`, error);
        };
        img.src = prevPhoto.url;
      }
    }
  }
  /**
   * Open photo uploader modal to add photos to the story
   * Requirements: 4.1
   */
  openPhotoUploader() {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.story) return;
      // Pause auto-advance while uploading
      _this4.pauseAutoAdvance();
      // Create modal with PhotoUploaderComponent
      const modal = yield _this4.modalController.create({
        component: _photo_uploader_photo_uploader_component__WEBPACK_IMPORTED_MODULE_2__.PhotoUploaderComponent,
        componentProps: {
          storyId: _this4.story.id
        },
        cssClass: 'photo-uploader-modal'
      });
      yield modal.present();
      // Wait for modal to close
      const {
        role
      } = yield modal.onWillDismiss();
      // Reload story to get updated photos
      if (role === 'success') {
        yield _this4.loadStory();
        // Mark that story was updated for parent components
        _this4.storyUpdated = true;
      } else {
        // Resume auto-advance if user cancelled
        _this4.startAutoAdvance();
      }
    })();
  }
}
_StoryViewerComponent = StoryViewerComponent;
_StoryViewerComponent.ɵfac = function StoryViewerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoryViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_story_service__WEBPACK_IMPORTED_MODULE_3__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_error_toast_service__WEBPACK_IMPORTED_MODULE_5__.ErrorToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController));
};
_StoryViewerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _StoryViewerComponent,
  selectors: [["app-story-viewer"]],
  viewQuery: function StoryViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.photoUploaderContainer = _t.first);
    }
  },
  inputs: {
    storyId: "storyId"
  },
  standalone: false,
  decls: 15,
  vars: 10,
  consts: [[1, "story-viewer"], ["fill", "clear", 1, "close-button", 3, "click"], ["name", "close", "slot", "icon-only"], ["fill", "solid", 1, "edit-button", 3, "click"], ["slot", "start", 3, "name"], ["fill", "solid", 1, "add-photos-button", 3, "click"], ["name", "add-circle", "slot", "start"], ["class", "progress-indicators", 4, "ngIf"], ["class", "photo-counter", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "delete-photo-button", "fill", "solid", "color", "danger", 3, "click", 4, "ngIf"], ["class", "edit-mode-container", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [1, "progress-indicators"], ["class", "progress-indicator", 3, "active", "completed", 4, "ngFor", "ngForOf"], [1, "progress-indicator"], [1, "progress-bar"], [1, "photo-counter"], [3, "click"], ["class", "empty-state", 4, "ngIf"], ["class", "photo-container", 4, "ngIf"], [1, "empty-state"], ["name", "images-outline", 1, "empty-state-icon"], [1, "empty-state-hint"], [1, "photo-container"], ["loading", "lazy", 1, "fullscreen-photo", 3, "src"], ["fill", "solid", "color", "danger", 1, "delete-photo-button", 3, "click"], ["name", "trash", "slot", "start"], [1, "edit-mode-container"], [1, "edit-mode-header"], [3, "ionItemReorder", "disabled"], ["class", "photo-reorder-item", 4, "ngFor", "ngForOf"], [1, "photo-reorder-item"], ["slot", "start"], [3, "src"], ["slot", "end"], ["name", "reorder-three"], [1, "loading-container"], ["name", "crescent"]],
  template: function StoryViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StoryViewerComponent_Template_ion_button_click_1_listener($event) {
        ctx.closeViewer();
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StoryViewerComponent_Template_ion_button_click_3_listener($event) {
        ctx.toggleEditMode();
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StoryViewerComponent_Template_ion_button_click_6_listener($event) {
        ctx.openPhotoUploader();
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " A\u00F1adir ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, StoryViewerComponent_div_9_Template, 2, 1, "div", 7)(10, StoryViewerComponent_div_10_Template, 2, 1, "div", 8)(11, StoryViewerComponent_div_11_Template, 3, 2, "div", 9)(12, StoryViewerComponent_ion_button_12_Template, 3, 0, "ion-button", 10)(13, StoryViewerComponent_div_13_Template, 8, 2, "div", 11)(14, StoryViewerComponent_div_14_Template, 2, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("edit-mode", ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx.isEditMode ? "checkmark" : "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Guardar" : "Editar", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isEditMode && ctx.getCurrentPhoto());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.story);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonReorder, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonReorderGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonThumbnail],
  styles: [".story-viewer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--ion-background-color, #f5f5f5);\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 20px;\n  z-index: 10001;\n  color: var(--ion-text-color, #000);\n  --background: rgba(128, 128, 128, 0.2);\n  --border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.close-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.progress-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  right: 20px;\n  display: flex;\n  gap: 4px;\n  z-index: 10000;\n  padding: 0;\n}\n\n.progress-indicator[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background-color: rgba(128, 128, 128, 0.3);\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n}\n.progress-indicator.completed[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary, #3880ff);\n}\n.progress-indicator.active[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.5);\n}\n.progress-indicator[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background-color: var(--ion-color-primary, #3880ff);\n  transition: width 0.1s linear;\n  border-radius: 2px;\n}\n\n.photo-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10000;\n  color: var(--ion-text-color, #000);\n  font-size: 12px;\n  font-weight: 500;\n  background-color: rgba(128, 128, 128, 0.2);\n  padding: 4px 10px;\n  border-radius: 10px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.photo-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.fullscreen-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  color: var(--ion-color-medium);\n  padding: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  text-align: center;\n  margin: 8px 0;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-state-hint[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.7;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.loading-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary, #3880ff);\n  width: 50px;\n  height: 50px;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  z-index: 10001;\n  color: var(--ion-text-color, #000);\n  --background: rgba(128, 128, 128, 0.2);\n  --border-radius: 20px;\n  width: auto;\n  height: 36px;\n  padding: 0 16px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  font-size: 12px;\n  font-weight: 500;\n}\n.edit-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 6px;\n}\n\n.add-photos-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10001;\n  color: var(--ion-text-color, #000);\n  --background: rgba(128, 128, 128, 0.2);\n  --border-radius: 20px;\n  width: auto;\n  height: 36px;\n  padding: 0 16px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  font-size: 12px;\n  font-weight: 500;\n}\n.add-photos-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 6px;\n}\n\n.delete-photo-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  z-index: 10001;\n  --background: rgba(220, 53, 69, 0.7);\n  --border-radius: 20px;\n  width: auto;\n  height: 36px;\n  padding: 0 16px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  font-size: 12px;\n  font-weight: 500;\n}\n.delete-photo-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 6px;\n}\n.delete-photo-button[_ngcontent-%COMP%]:hover {\n  --background: rgba(220, 53, 69, 0.9);\n}\n\n.edit-mode-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  padding: 20px;\n  padding-top: 80px;\n}\n.edit-mode-container[_ngcontent-%COMP%]   .edit-mode-header[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ion-text-color, #000);\n  margin-bottom: 20px;\n}\n.edit-mode-container[_ngcontent-%COMP%]   .edit-mode-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.edit-mode-container[_ngcontent-%COMP%]   .edit-mode-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium, #666);\n  margin: 0;\n}\n.edit-mode-container[_ngcontent-%COMP%]   ion-reorder-group[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.edit-mode-container[_ngcontent-%COMP%]   .photo-reorder-item[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, #fff);\n  --border-color: var(--ion-border-color, #ddd);\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n.edit-mode-container[_ngcontent-%COMP%]   .photo-reorder-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-right: 16px;\n}\n.edit-mode-container[_ngcontent-%COMP%]   .photo-reorder-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  object-fit: cover;\n}\n.edit-mode-container[_ngcontent-%COMP%]   .photo-reorder-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: var(--ion-text-color, #000);\n}\n.edit-mode-container[_ngcontent-%COMP%]   .photo-reorder-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n.edit-mode-container[_ngcontent-%COMP%]   .photo-reorder-item[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%] {\n  color: var(--ion-text-color, #000);\n}\n.edit-mode-container[_ngcontent-%COMP%]   .photo-reorder-item[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.story-viewer.edit-mode[_ngcontent-%COMP%]   .photo-container[_ngcontent-%COMP%] {\n  display: none;\n}"]
});

/***/ }),

/***/ 2947:
/*!************************************************!*\
  !*** ./src/app/tab5/models/error-code.enum.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorCode: () => (/* binding */ ErrorCode)
/* harmony export */ });
var ErrorCode;
(function (ErrorCode) {
  ErrorCode["NETWORK_TIMEOUT"] = "NET_001";
  ErrorCode["STORAGE_QUOTA_EXCEEDED"] = "STR_001";
  ErrorCode["CLOUDINARY_QUOTA_EXCEEDED"] = "STR_002";
  ErrorCode["INVALID_IMAGE_FORMAT"] = "IMG_001";
  ErrorCode["IMAGE_TOO_LARGE"] = "IMG_002";
  ErrorCode["PERMISSION_DENIED"] = "PRM_001";
  ErrorCode["DATA_CORRUPTION"] = "DAT_001";
  ErrorCode["UNKNOWN_ERROR"] = "UNK_001";
})(ErrorCode || (ErrorCode = {}));

/***/ }),

/***/ 2461:
/*!*****************************************************!*\
  !*** ./src/app/tab5/services/cloudinary.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudinaryService: () => (/* binding */ CloudinaryService)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var _environments_cloudinary_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/cloudinary.config */ 7778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);

var _CloudinaryService;



/**
 * CloudinaryService handles photo uploads to Cloudinary (free tier: 25GB storage, no credit card)
 * Sign up at: https://cloudinary.com/users/register/free
 */
class CloudinaryService {
  constructor() {
    this.CLOUD_NAME = _environments_cloudinary_config__WEBPACK_IMPORTED_MODULE_1__.cloudinaryConfig.cloudName;
    this.UPLOAD_PRESET = _environments_cloudinary_config__WEBPACK_IMPORTED_MODULE_1__.cloudinaryConfig.uploadPreset;
  }
  /**
   * Upload a photo to Cloudinary
   */
  uploadPhoto(file, photoId, fileName) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    subject.next({
      photoId,
      fileName,
      progress: 0,
      status: 'pending'
    });
    this.uploadToCloudinary(file, subject, photoId, fileName);
    return subject.asObservable();
  }
  uploadToCloudinary(file, subject, photoId, fileName) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', _this.UPLOAD_PRESET);
        formData.append('public_id', photoId);
        const xhr = new XMLHttpRequest();
        const url = `https://api.cloudinary.com/v1_1/${_this.CLOUD_NAME}/image/upload`;
        xhr.open('POST', url, true);
        // Track upload progress
        xhr.upload.addEventListener('progress', e => {
          if (e.lengthComputable) {
            const progress = Math.round(e.loaded / e.total * 100);
            subject.next({
              photoId,
              fileName,
              progress,
              status: 'uploading'
            });
          }
        });
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            subject.next({
              photoId,
              fileName,
              progress: 100,
              status: 'complete',
              url: response.secure_url,
              storageType: 'cloudinary'
            });
            subject.complete();
          } else {
            throw new Error(`Upload failed: ${xhr.statusText}`);
          }
        });
        xhr.addEventListener('error', () => {
          subject.next({
            photoId,
            fileName,
            progress: 0,
            status: 'error',
            error: 'Network error during upload'
          });
          subject.error(new Error('Network error'));
        });
        xhr.send(formData);
      } catch (error) {
        console.error('Cloudinary upload error:', error);
        subject.next({
          photoId,
          fileName,
          progress: 0,
          status: 'error',
          error: 'Failed to upload to Cloudinary'
        });
        subject.error(error);
      }
    })();
  }
  /**
   * Delete a photo from Cloudinary
   * Note: Requires authentication token for deletion
   */
  deletePhoto(publicId) {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.warn('Cloudinary deletion requires server-side implementation with API secret');
      // Deletion must be done server-side for security
    })();
  }
}
_CloudinaryService = CloudinaryService;
_CloudinaryService.ɵfac = function CloudinaryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CloudinaryService)();
};
_CloudinaryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _CloudinaryService,
  factory: _CloudinaryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9847:
/*!******************************************************!*\
  !*** ./src/app/tab5/services/error-toast.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorToastService: () => (/* binding */ ErrorToastService)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/error-code.enum */ 2947);

var _ErrorToastService;




/**
 * ErrorToastService provides user-friendly error messages via Ionic toasts
 *
 * Validates: Requirements 14.1, 14.2, 14.3, 14.5
 */
class ErrorToastService {
  constructor() {
    this.toastController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController);
  }
  /**
   * Display an error toast with appropriate message based on error code
   *
   * @param errorCode - The error code enum value
   * @param customMessage - Optional custom message to override default
   * @param duration - Toast duration in milliseconds (default: 3000)
   */
  showError(errorCode, customMessage, duration = 3000) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const message = customMessage || _this.getErrorMessage(errorCode);
      const toast = yield _this.toastController.create({
        message,
        duration,
        position: 'bottom',
        cssClass: 'neutral-toast',
        buttons: [{
          icon: 'alert-circle',
          side: 'start'
        }, {
          text: 'Cerrar',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }
  /**
   * Display a success toast message
   *
   * @param message - Success message to display
   * @param duration - Toast duration in milliseconds (default: 2000)
   */
  showSuccess(message, duration = 2000) {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message,
        duration,
        position: 'bottom',
        cssClass: 'neutral-toast',
        buttons: [{
          icon: 'checkmark-circle',
          side: 'start'
        }]
      });
      yield toast.present();
    })();
  }
  /**
   * Display a warning toast message
   *
   * @param message - Warning message to display
   * @param duration - Toast duration in milliseconds (default: 3000)
   */
  showWarning(message, duration = 3000) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message,
        duration,
        position: 'bottom',
        cssClass: 'neutral-toast',
        buttons: [{
          icon: 'warning',
          side: 'start'
        }]
      });
      yield toast.present();
    })();
  }
  /**
   * Display an error toast with retry button
   *
   * @param errorCode - The error code enum value
   * @param retryCallback - Function to call when retry button is tapped
   * @param customMessage - Optional custom message
   */
  showErrorWithRetry(errorCode, retryCallback, customMessage) {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const message = customMessage || _this4.getErrorMessage(errorCode);
      const toast = yield _this4.toastController.create({
        message,
        duration: 5000,
        position: 'bottom',
        cssClass: 'neutral-toast',
        buttons: [{
          icon: 'alert-circle',
          side: 'start'
        }, {
          text: 'Reintentar',
          handler: () => {
            retryCallback();
          }
        }, {
          text: 'Cerrar',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }
  /**
   * Get user-friendly error message for error code
   */
  getErrorMessage(errorCode) {
    const errorMessages = {
      [_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.NETWORK_TIMEOUT]: 'Error de conexión. Por favor, verifica tu conexión a internet.',
      [_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.STORAGE_QUOTA_EXCEEDED]: 'Límite de almacenamiento alcanzado. Usando almacenamiento local.',
      [_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.CLOUDINARY_QUOTA_EXCEEDED]: 'Límite de almacenamiento en la nube alcanzado. Usando almacenamiento local.',
      [_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.INVALID_IMAGE_FORMAT]: 'Formato de imagen no válido. Por favor, selecciona una imagen JPG o PNG.',
      [_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.IMAGE_TOO_LARGE]: 'La imagen es demasiado grande. El tamaño máximo es 10MB.',
      [_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.PERMISSION_DENIED]: 'Permiso denegado. Por favor, habilita los permisos en la configuración.',
      [_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.DATA_CORRUPTION]: 'Error al procesar los datos. Por favor, intenta nuevamente.',
      [_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.UNKNOWN_ERROR]: 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.'
    };
    return errorMessages[errorCode] || errorMessages[_models_error_code_enum__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.UNKNOWN_ERROR];
  }
  /**
   * Log error to console with context
   *
   * @param errorCode - The error code
   * @param context - Additional context information
   * @param error - The original error object
   */
  logError(errorCode, context, error) {
    console.error(`[${errorCode}] ${context}`, error);
  }
}
_ErrorToastService = ErrorToastService;
_ErrorToastService.ɵfac = function ErrorToastService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ErrorToastService)();
};
_ErrorToastService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _ErrorToastService,
  factory: _ErrorToastService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6688:
/*!**********************************************************!*\
  !*** ./src/app/tab5/services/image-optimizer.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageOptimizerService: () => (/* binding */ ImageOptimizerService)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);

var _ImageOptimizerService;

/**
 * ImageOptimizerService handles client-side image compression and optimization
 * before uploading to Firebase Storage or IndexedDB.
 *
 * Validates: Requirements 13.1, 13.2, 13.3
 */
class ImageOptimizerService {
  constructor() {
    this.MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    this.ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    this.WEBP_SUPPORTED = this.checkWebPSupport();
  }
  /**
   * Compress an image to reduce file size while maintaining quality
   * Resizes to max 1920px width and compresses to 85% quality
   * Converts to WebP format if browser supports it
   *
   * @param file - The image file to compress
   * @param maxWidth - Maximum width in pixels (default: 1920)
   * @param quality - Compression quality 0-1 (default: 0.85)
   * @returns Promise resolving to compressed image Blob
   */
  compressImage(file, maxWidth = 1920, quality = 0.85) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Validate input
      if (!_this.validateImage(file)) {
        throw new Error('Invalid image file');
      }
      // Load image
      const img = yield _this.loadImage(file);
      const dimensions = yield _this.getImageDimensions(file);
      // Calculate new dimensions maintaining aspect ratio
      let newWidth = dimensions.width;
      let newHeight = dimensions.height;
      if (newWidth > maxWidth) {
        const ratio = maxWidth / newWidth;
        newWidth = maxWidth;
        newHeight = Math.round(newHeight * ratio);
      }
      // Create canvas and draw resized image
      const canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Failed to get canvas context');
      }
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      // Convert to blob with compression
      const mimeType = _this.WEBP_SUPPORTED ? 'image/webp' : 'image/jpeg';
      return _this.canvasToBlob(canvas, mimeType, quality);
    })();
  }
  /**
   * Generate a thumbnail from an image file
   * Creates a square thumbnail by cropping to center
   *
   * @param file - The image file to create thumbnail from
   * @param size - Thumbnail size in pixels (default: 300)
   * @returns Promise resolving to thumbnail Blob
   */
  generateThumbnail(file, size = 300) {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Validate input
      if (!_this2.validateImage(file)) {
        throw new Error('Invalid image file');
      }
      // Load image
      const img = yield _this2.loadImage(file);
      const dimensions = yield _this2.getImageDimensions(file);
      // Calculate crop dimensions (center crop to square)
      const sourceSize = Math.min(dimensions.width, dimensions.height);
      const sourceX = (dimensions.width - sourceSize) / 2;
      const sourceY = (dimensions.height - sourceSize) / 2;
      // Create canvas for thumbnail
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Failed to get canvas context');
      }
      // Draw cropped and resized image
      ctx.drawImage(img, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size);
      // Convert to blob
      const mimeType = _this2.WEBP_SUPPORTED ? 'image/webp' : 'image/jpeg';
      return _this2.canvasToBlob(canvas, mimeType, 0.85);
    })();
  }
  /**
   * Validate image file type and size
   * Checks if file is an allowed image type and under 10MB
   *
   * @param file - The file to validate
   * @returns true if valid, false otherwise
   */
  validateImage(file) {
    // Check file type
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      return false;
    }
    // Check file size (10MB limit)
    if (file.size > this.MAX_FILE_SIZE) {
      return false;
    }
    return true;
  }
  /**
   * Get dimensions of an image file
   *
   * @param file - The image file
   * @returns Promise resolving to {width, height}
   */
  getImageDimensions(file) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _this3.loadImage(file);
      return {
        width: img.naturalWidth,
        height: img.naturalHeight
      };
    })();
  }
  /**
   * Load an image file into an HTMLImageElement
   *
   * @param file - The image file to load
   * @returns Promise resolving to HTMLImageElement
   */
  loadImage(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load image'));
      };
      img.src = url;
    });
  }
  /**
   * Convert canvas to Blob
   *
   * @param canvas - The canvas element
   * @param mimeType - Output MIME type
   * @param quality - Compression quality 0-1
   * @returns Promise resolving to Blob
   */
  canvasToBlob(canvas, mimeType, quality) {
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to convert canvas to blob'));
        }
      }, mimeType, quality);
    });
  }
  /**
   * Check if browser supports WebP format
   *
   * @returns true if WebP is supported
   */
  checkWebPSupport() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    // Check if toDataURL supports WebP
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
}
_ImageOptimizerService = ImageOptimizerService;
_ImageOptimizerService.ɵfac = function ImageOptimizerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ImageOptimizerService)();
};
_ImageOptimizerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _ImageOptimizerService,
  factory: _ImageOptimizerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 614:
/*!**************************************************!*\
  !*** ./src/app/tab5/services/storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var _cloudinary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloudinary.service */ 2461);

var _StorageService;




/**
 * StorageService handles photo uploads to Cloudinary with IndexedDB fallback
 *
 * Validates: Requirements 4.4, 8.1, 8.2, 8.6, 10.5, 14.4, 15.1
 */
class StorageService {
  constructor() {
    this.cloudinary = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_cloudinary_service__WEBPACK_IMPORTED_MODULE_1__.CloudinaryService);
    this.DB_NAME = 'travel-stories';
    this.STORE_NAME = 'photos';
    this.db = null;
    this.initIndexedDB();
  }
  /**
   * Upload a photo to Cloudinary with progress tracking
   * Automatically falls back to IndexedDB if Cloudinary upload fails
   *
   * @param file - The image file to upload
   * @param path - Storage path (e.g., 'stories/story-id/photo-id.jpg')
   * @returns Observable emitting upload progress updates
   */
  uploadPhoto(file, path) {
    var _this = this;
    const photoId = this.extractPhotoIdFromPath(path);
    const fileName = this.extractFileNameFromPath(path);
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // Try Cloudinary first
    this.cloudinary.uploadPhoto(file, photoId, fileName).subscribe({
      next: progress => {
        subject.next(progress);
      },
      complete: () => {
        subject.complete();
      },
      error: function () {
        var _ref = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error) {
          console.warn('Cloudinary upload failed, falling back to IndexedDB:', _error);
          yield _this.fallbackToIndexedDB(file, path, subject, photoId, fileName);
        });
        return function error(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    });
    return subject.asObservable();
  }
  /**
   * Fallback to IndexedDB storage when Cloudinary fails
   */
  fallbackToIndexedDB(file, path, subject, photoId, fileName) {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        subject.next({
          photoId,
          fileName,
          progress: 50,
          status: 'uploading'
        });
        const indexedDBUrl = yield _this2.saveToIndexedDB(file, path);
        subject.next({
          photoId,
          fileName,
          progress: 100,
          status: 'complete',
          url: indexedDBUrl,
          storageType: 'indexeddb'
        });
        subject.complete();
      } catch (error) {
        console.error('IndexedDB fallback failed:', error);
        subject.next({
          photoId,
          fileName,
          progress: 0,
          status: 'error',
          error: 'Failed to save to local storage'
        });
        subject.error(error);
      }
    })();
  }
  /**
   * Download a photo from Cloudinary or IndexedDB
   *
   * @param url - The photo URL (Cloudinary URL or IndexedDB key)
   * @returns Promise resolving to the image Blob
   */
  downloadPhoto(url) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if it's an IndexedDB URL
        if (url.startsWith('indexeddb://')) {
          const key = url.replace('indexeddb://', '');
          return yield _this3.getFromIndexedDB(key);
        }
        // Download from Cloudinary
        const response = yield fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to download photo: ${response.statusText}`);
        }
        return yield response.blob();
      } catch (error) {
        console.error('Error downloading photo:', error);
        throw error;
      }
    })();
  }
  /**
   * Delete a photo from storage (Cloudinary or IndexedDB)
   *
   * @param url - The photo URL (Cloudinary URL or IndexedDB key)
   * @param storageType - Storage location ('cloudinary' or 'indexeddb')
   */
  deletePhoto(url, storageType) {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (storageType === 'indexeddb') {
          const key = url.replace('indexeddb://', '');
          yield _this4.deleteFromIndexedDB(key);
        } else if (storageType === 'cloudinary') {
          // Cloudinary deletion requires server-side implementation
          // For now, we'll just log a warning
          console.warn('Cloudinary deletion requires server-side implementation');
        }
      } catch (error) {
        console.error(`Error deleting photo from ${storageType}:`, error);
        throw error;
      }
    })();
  }
  /**
   * Check storage quota (simplified for Cloudinary)
   * Returns available space information
   */
  checkStorageQuota() {
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Cloudinary has generous free tier limits
        // For now, we'll assume quota is available
        return {
          available: true
        };
      } catch (error) {
        console.error('Error checking storage quota:', error);
        return {
          available: false
        };
      }
    })();
  }
  /**
   * Save a file to IndexedDB
   *
   * @param file - The file to save
   * @param key - Unique key for the file
   * @returns Promise resolving to IndexedDB URL
   */
  saveToIndexedDB(file, key) {
    var _this5 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.db) {
        yield _this5.initIndexedDB();
      }
      return new Promise((resolve, reject) => {
        if (!_this5.db) {
          reject(new Error('IndexedDB not initialized'));
          return;
        }
        const transaction = _this5.db.transaction([_this5.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(_this5.STORE_NAME);
        const data = {
          key,
          blob: file,
          timestamp: new Date(),
          size: file.size
        };
        const request = store.put(data);
        request.onsuccess = () => {
          resolve(`indexeddb://${key}`);
        };
        request.onerror = () => {
          reject(new Error(`Failed to save to IndexedDB: ${request.error}`));
        };
      });
    })();
  }
  /**
   * Retrieve a file from IndexedDB
   *
   * @param key - The file key
   * @returns Promise resolving to the file Blob
   */
  getFromIndexedDB(key) {
    var _this6 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.db) {
        yield _this6.initIndexedDB();
      }
      return new Promise((resolve, reject) => {
        if (!_this6.db) {
          reject(new Error('IndexedDB not initialized'));
          return;
        }
        const transaction = _this6.db.transaction([_this6.STORE_NAME], 'readonly');
        const store = transaction.objectStore(_this6.STORE_NAME);
        const request = store.get(key);
        request.onsuccess = () => {
          if (request.result) {
            resolve(request.result.blob);
          } else {
            reject(new Error(`File not found in IndexedDB: ${key}`));
          }
        };
        request.onerror = () => {
          reject(new Error(`Failed to retrieve from IndexedDB: ${request.error}`));
        };
      });
    })();
  }
  /**
   * Delete a file from IndexedDB
   *
   * @param key - The file key
   */
  deleteFromIndexedDB(key) {
    var _this7 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this7.db) {
        yield _this7.initIndexedDB();
      }
      return new Promise((resolve, reject) => {
        if (!_this7.db) {
          reject(new Error('IndexedDB not initialized'));
          return;
        }
        const transaction = _this7.db.transaction([_this7.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(_this7.STORE_NAME);
        const request = store.delete(key);
        request.onsuccess = () => {
          resolve();
        };
        request.onerror = () => {
          reject(new Error(`Failed to delete from IndexedDB: ${request.error}`));
        };
      });
    })();
  }
  /**
   * Clear all cached photos from IndexedDB
   */
  clearCache() {
    var _this8 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this8.db) {
        yield _this8.initIndexedDB();
      }
      return new Promise((resolve, reject) => {
        if (!_this8.db) {
          reject(new Error('IndexedDB not initialized'));
          return;
        }
        const transaction = _this8.db.transaction([_this8.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(_this8.STORE_NAME);
        const request = store.clear();
        request.onsuccess = () => {
          resolve();
        };
        request.onerror = () => {
          reject(new Error(`Failed to clear cache: ${request.error}`));
        };
      });
    })();
  }
  /**
   * Initialize IndexedDB database
   */
  initIndexedDB() {
    var _this9 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(_this9.DB_NAME, 1);
        request.onerror = () => {
          console.error('Failed to open IndexedDB:', request.error);
          reject(request.error);
        };
        request.onsuccess = () => {
          _this9.db = request.result;
          resolve();
        };
        request.onupgradeneeded = event => {
          const db = event.target.result;
          // Create object store if it doesn't exist
          if (!db.objectStoreNames.contains(_this9.STORE_NAME)) {
            const objectStore = db.createObjectStore(_this9.STORE_NAME, {
              keyPath: 'key'
            });
            objectStore.createIndex('timestamp', 'timestamp', {
              unique: false
            });
            objectStore.createIndex('size', 'size', {
              unique: false
            });
          }
        };
      });
    })();
  }
  /**
   * Extract photo ID from storage path
   * Uses the full path (without extension) as unique identifier
   */
  extractPhotoIdFromPath(path) {
    // Remove file extension and use full path as unique ID
    // e.g., "stories/story-123/cover.jpg" -> "stories/story-123/cover"
    return path.replace(/\.[^/.]+$/, '');
  }
  /**
   * Extract file name from storage path
   */
  extractFileNameFromPath(path) {
    const parts = path.split('/');
    return parts[parts.length - 1];
  }
}
_StorageService = StorageService;
_StorageService.ɵfac = function StorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StorageService)();
};
_StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _StorageService,
  factory: _StorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 450:
/*!************************************************!*\
  !*** ./src/app/tab5/services/story.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryService: () => (/* binding */ StoryService)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8810);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9724);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8141);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9437);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 3026);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 2784);

var _StoryService;





/**
 * StoryService handles CRUD operations for travel stories using Firestore
 *
 * Validates: Requirements 2.4, 3.3, 3.5, 8.3, 10.2, 10.3, 11.4, 12.3
 */
class StoryService {
  constructor() {
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore);
    // Sync status observable for synchronization indicator
    this.syncStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.syncStatus$ = this.syncStatusSubject.asObservable();
  }
  /**
   * Get all stories from Firestore, sorted by creation date (newest first)
   *
   * Validates: Requirements 2.1, 2.4, 8.3
   */
  getAll() {
    this.syncStatusSubject.next(true);
    const storiesCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'stories');
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)(storiesCollection, {
      idField: 'id'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(stories => {
      const mapped = stories.map(story => this.convertFirestoreToStory(story));
      return mapped.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.syncStatusSubject.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Firestore error:', error);
      this.syncStatusSubject.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
    }));
  }
  /**
   * Get a single story by ID from Firestore
   *
   * Validates: Requirements 2.4, 8.3
   */
  get(id) {
    this.syncStatusSubject.next(true);
    const storyDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, `stories/${id}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.docData)(storyDoc, {
      idField: 'id'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(story => this.convertFirestoreToStory(story)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.syncStatusSubject.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      this.syncStatusSubject.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
    }));
  }
  /**
   * Create a new story in Firestore
   *
   * Validates: Requirements 3.3, 3.5, 8.3
   */
  create(story) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const storiesCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_this.firestore, 'stories');
        const newStory = {
          title: story.title || '',
          coverUrl: story.coverUrl || '',
          coverStorageType: story.coverStorageType || 'cloudinary',
          photoCount: story.photoCount || 0,
          createdAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Timestamp.now(),
          updatedAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Timestamp.now(),
          photos: story.photos || []
        };
        const docRef = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(storiesCollection, newStory);
        return docRef.id;
      } catch (error) {
        console.error('Error creating story:', error);
        throw error;
      }
    })();
  }
  /**
   * Update an existing story in Firestore
   *
   * Validates: Requirements 11.2, 11.3, 11.5, 12.3
   */
  update(story) {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const storyDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this2.firestore, `stories/${story.id}`);
        const updateData = {
          title: story.title,
          coverUrl: story.coverUrl,
          coverStorageType: story.coverStorageType,
          photoCount: story.photoCount,
          photos: story.photos,
          updatedAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Timestamp.now()
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(storyDoc, updateData);
      } catch (error) {
        console.error('Error updating story:', error);
        throw error;
      }
    })();
  }
  /**
   * Delete a story from Firestore
   * Note: Photo cleanup from storage should be handled by StorageService
   *
   * Validates: Requirements 15.3
   */
  delete(id) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const storyDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this3.firestore, `stories/${id}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)(storyDoc);
      } catch (error) {
        console.error('Error deleting story:', error);
        throw error;
      }
    })();
  }
  /**
   * Reorder photos within a story in Firestore
   *
   * Validates: Requirements 12.1, 12.2, 12.3, 12.4
   */
  reorderPhotos(storyId, photoIds) {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const storyDoc = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this4.firestore, `stories/${storyId}`);
        // Get current story
        const storySnapshot = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.docData)(storyDoc, {
          idField: 'id'
        })).toPromise();
        const story = _this4.convertFirestoreToStory(storySnapshot);
        // Reorder photos based on the provided photoIds array
        const reorderedPhotos = photoIds.map((photoId, index) => {
          const photo = story.photos.find(p => p.id === photoId);
          if (!photo) {
            throw new Error(`Photo with ID ${photoId} not found in story`);
          }
          return {
            ...photo,
            order: index
          };
        });
        // Update the story with reordered photos
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(storyDoc, {
          photos: reorderedPhotos,
          updatedAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.Timestamp.now()
        });
      } catch (error) {
        console.error('Error reordering photos:', error);
        throw error;
      }
    })();
  }
  /**
   * Convert Firestore document to Story object
   */
  convertFirestoreToStory(data) {
    var _data$createdAt, _data$updatedAt;
    return {
      id: data.id,
      title: data.title,
      coverUrl: data.coverUrl,
      coverStorageType: data.coverStorageType,
      photoCount: data.photoCount,
      createdAt: ((_data$createdAt = data.createdAt) === null || _data$createdAt === void 0 ? void 0 : _data$createdAt.toDate()) || new Date(),
      updatedAt: ((_data$updatedAt = data.updatedAt) === null || _data$updatedAt === void 0 ? void 0 : _data$updatedAt.toDate()) || new Date(),
      photos: (data.photos || []).map(photo => {
        var _photo$uploadedAt;
        return {
          ...photo,
          uploadedAt: (_photo$uploadedAt = photo.uploadedAt) !== null && _photo$uploadedAt !== void 0 && _photo$uploadedAt.toDate ? photo.uploadedAt.toDate() : new Date(photo.uploadedAt)
        };
      })
    };
  }
}
_StoryService = StoryService;
_StoryService.ɵfac = function StoryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoryService)();
};
_StoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _StoryService,
  factory: _StoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3764:
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab5PageRoutingModule: () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
var _Tab5PageRoutingModule;




const routes = [{
  path: '',
  component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
}];
class Tab5PageRoutingModule {}
_Tab5PageRoutingModule = Tab5PageRoutingModule;
_Tab5PageRoutingModule.ɵfac = function Tab5PageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab5PageRoutingModule)();
};
_Tab5PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _Tab5PageRoutingModule
});
_Tab5PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab5PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3621:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab5PageModule: () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5-routing.module */ 3764);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page */ 958);
/* harmony import */ var _components_story_card_story_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/story-card/story-card.component */ 5318);
/* harmony import */ var _components_story_creation_modal_story_creation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/story-creation-modal/story-creation-modal.component */ 5232);
/* harmony import */ var _components_story_viewer_story_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/story-viewer/story-viewer.component */ 3122);
/* harmony import */ var _components_story_editor_story_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/story-editor/story-editor.component */ 4312);
/* harmony import */ var _components_connection_status_connection_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/connection-status/connection-status.component */ 2332);
/* harmony import */ var _components_retry_button_retry_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/retry-button/retry-button.component */ 2888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7705);
var _Tab5PageModule;












class Tab5PageModule {}
_Tab5PageModule = Tab5PageModule;
_Tab5PageModule.ɵfac = function Tab5PageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab5PageModule)();
};
_Tab5PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _Tab5PageModule
});
_Tab5PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab5PageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](Tab5PageModule, {
    declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_1__.Tab5Page, _components_story_card_story_card_component__WEBPACK_IMPORTED_MODULE_2__.StoryCardComponent, _components_story_creation_modal_story_creation_modal_component__WEBPACK_IMPORTED_MODULE_3__.StoryCreationModalComponent, _components_story_viewer_story_viewer_component__WEBPACK_IMPORTED_MODULE_4__.StoryViewerComponent, _components_story_editor_story_editor_component__WEBPACK_IMPORTED_MODULE_5__.StoryEditorComponent, _components_connection_status_connection_status_component__WEBPACK_IMPORTED_MODULE_6__.ConnectionStatusComponent, _components_retry_button_retry_button_component__WEBPACK_IMPORTED_MODULE_7__.RetryButtonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab5PageRoutingModule]
  });
})();

/***/ }),

/***/ 958:
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab5Page: () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/story.service */ 450);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storage.service */ 614);
/* harmony import */ var _services_image_optimizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/image-optimizer.service */ 6688);
/* harmony import */ var _services_error_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/error-toast.service */ 9847);
/* harmony import */ var _components_story_creation_modal_story_creation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/story-creation-modal/story-creation-modal.component */ 5232);
/* harmony import */ var _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/error-code.enum */ 2947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _components_connection_status_connection_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/connection-status/connection-status.component */ 2332);

var _Tab5Page;













function Tab5Page_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function Tab5Page_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "No hay historias todav\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Toca el bot\u00F3n + para crear tu primera historia de viaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function Tab5Page_ion_grid_10_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col", 16)(1, "ion-card")(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function Tab5Page_ion_grid_10_ion_col_2_Template_div_click_2_listener() {
      const story_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.openStory(story_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-card-content")(5, "div", 18)(6, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function Tab5Page_ion_grid_10_ion_col_2_Template_ion_button_click_12_listener($event) {
      const story_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r2.showStoryMenu(story_r2.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const story_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", story_r2.coverUrl)("alt", story_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](story_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](story_r2.photoCount);
  }
}
function Tab5Page_ion_grid_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, Tab5Page_ion_grid_10_ion_col_2_Template, 14, 4, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.displayedStories);
  }
}
class Tab5Page {
  constructor() {
    this.storyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_services_story_service__WEBPACK_IMPORTED_MODULE_1__.StoryService);
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService);
    this.imageOptimizerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_services_image_optimizer_service__WEBPACK_IMPORTED_MODULE_3__.ImageOptimizerService);
    this.errorToastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_services_error_toast_service__WEBPACK_IMPORTED_MODULE_4__.ErrorToastService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router);
    this.alertController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController);
    this.actionSheetController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController);
    this.modalController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController);
    this.loadingController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController);
    this.toastController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController);
    this.stories = [];
    this.isLoading = false;
    this.retryAttempts = 0;
    this.MAX_RETRY_ATTEMPTS = 3;
    // Pagination properties
    this.currentPage = 1;
    this.itemsPerPage = 50;
    this.totalPages = 1;
    this.displayedStories = [];
    this.paginatedStories = []; // For virtual scroll (rows of stories)
  }
  ngOnInit() {
    this.loadStories();
  }
  /**
   * Load all stories from StoryService
   * Implements network error handling with exponential backoff retry
   *
   * Validates: Requirements 14.1, 14.5
   */
  loadStories() {
    this.isLoading = true;
    this.storyService.getAll().subscribe({
      next: stories => {
        this.stories = stories;
        this.isLoading = false;
        this.retryAttempts = 0; // Reset retry counter on success
        this.updatePagination(); // Update pagination after loading stories
      },
      error: error => {
        this.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT, 'Error loading stories', error);
        this.isLoading = false;
        // Implement exponential backoff retry
        if (this.retryAttempts < this.MAX_RETRY_ATTEMPTS) {
          this.retryAttempts++;
          const delayMs = Math.pow(2, this.retryAttempts - 1) * 1000; // 1s, 2s, 4s
          this.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT, `Reintentando en ${delayMs / 1000} segundos...`);
          setTimeout(() => {
            this.loadStories();
          }, delayMs);
        } else {
          // Max retries reached, show error with manual retry option
          this.errorToastService.showErrorWithRetry(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT, () => {
            this.retryAttempts = 0;
            this.loadStories();
          });
        }
      }
    });
  }
  /**
   * Navigate to story creation flow
   * Opens the story creation modal and handles the complete creation process
   *
   * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 4.6, 13.1, 13.3, 14.2, 15.1
   */
  createStory() {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _components_story_creation_modal_story_creation_modal_component__WEBPACK_IMPORTED_MODULE_5__.StoryCreationModalComponent
      });
      yield modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
      if (role === 'create' && data) {
        // Show loading indicator
        const loading = yield _this.loadingController.create({
          message: 'Creando historia...'
        });
        yield loading.present();
        try {
          // Step 1: Compress cover image and generate thumbnail
          const coverImageFile = data.coverImageFile;
          const compressedCover = yield _this.imageOptimizerService.compressImage(coverImageFile, 1920, 0.85);
          const thumbnail = yield _this.imageOptimizerService.generateThumbnail(coverImageFile, 300);
          // Step 2: Generate unique ID for the story
          const storyId = _this.generateUniqueId();
          const coverPath = `stories/${storyId}/cover.jpg`;
          const thumbnailPath = `stories/${storyId}/thumbnail.jpg`;
          // Step 3: Upload cover image and thumbnail
          let coverUrl = '';
          let coverStorageType = 'cloudinary';
          // Upload cover image with progress tracking
          yield new Promise((resolve, reject) => {
            _this.storageService.uploadPhoto(compressedCover, coverPath).subscribe({
              next: progress => {
                if (progress.status === 'complete') {
                  // Get URL and storage type from progress
                  coverUrl = progress.url || '';
                  coverStorageType = progress.storageType || 'cloudinary';
                  resolve();
                } else if (progress.status === 'error') {
                  reject(new Error(progress.error || 'Upload failed'));
                }
              },
              error: error => {
                reject(error);
              }
            });
          });
          // Upload thumbnail (fire and forget, no need to wait)
          _this.storageService.uploadPhoto(thumbnail, thumbnailPath).subscribe({
            error: error => {
              console.error('Thumbnail upload failed:', error);
              // Don't fail the story creation if thumbnail fails
            }
          });
          // Step 4: Create story metadata in Firestore
          const newStory = {
            title: data.title,
            coverUrl: coverUrl,
            coverStorageType: coverStorageType,
            photoCount: 0,
            photos: []
          };
          yield _this.storyService.create(newStory);
          // Dismiss loading and show success message
          yield loading.dismiss();
          yield _this.showToast('Historia creada exitosamente', 'success');
          // Refresh story list
          _this.loadStories();
        } catch (error) {
          console.error('Error creating story:', error);
          yield loading.dismiss();
          // Determine error type and show appropriate message
          const errorCode = _this.determineErrorCode(error);
          _this.errorToastService.logError(errorCode, 'Error creating story', error);
          // Show error with retry option
          yield _this.errorToastService.showErrorWithRetry(errorCode, () => _this.retryStoryCreation(data));
        }
      }
    })();
  }
  /**
   * Retry story creation after an error
   * @param data - The story creation data from the modal
   */
  retryStoryCreation(data) {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Show loading indicator
      const loading = yield _this2.loadingController.create({
        message: 'Reintentando...'
      });
      yield loading.present();
      try {
        // Repeat the same process as createStory
        const coverImageFile = data.coverImageFile;
        const compressedCover = yield _this2.imageOptimizerService.compressImage(coverImageFile, 1920, 0.85);
        const thumbnail = yield _this2.imageOptimizerService.generateThumbnail(coverImageFile, 300);
        const storyId = _this2.generateUniqueId();
        const coverPath = `stories/${storyId}/cover.jpg`;
        const thumbnailPath = `stories/${storyId}/thumbnail.jpg`;
        let coverUrl = '';
        let coverStorageType = 'cloudinary';
        yield new Promise((resolve, reject) => {
          _this2.storageService.uploadPhoto(compressedCover, coverPath).subscribe({
            next: progress => {
              if (progress.status === 'complete') {
                coverUrl = progress.url || '';
                coverStorageType = progress.storageType || 'cloudinary';
                resolve();
              } else if (progress.status === 'error') {
                reject(new Error(progress.error || 'Upload failed'));
              }
            },
            error: error => {
              reject(error);
            }
          });
        });
        _this2.storageService.uploadPhoto(thumbnail, thumbnailPath).subscribe({
          error: error => {
            console.error('Thumbnail upload failed:', error);
          }
        });
        const newStory = {
          title: data.title,
          coverUrl: coverUrl,
          coverStorageType: coverStorageType,
          photoCount: 0,
          photos: []
        };
        yield _this2.storyService.create(newStory);
        yield loading.dismiss();
        yield _this2.showToast('Historia creada exitosamente', 'success');
        _this2.loadStories();
      } catch (error) {
        console.error('Retry failed:', error);
        yield loading.dismiss();
        const errorCode = _this2.determineErrorCode(error);
        _this2.errorToastService.logError(errorCode, 'Retry story creation failed', error);
        yield _this2.errorToastService.showError(errorCode);
      }
    })();
  }
  /**
   * Generate a unique ID for a story
   * Uses timestamp and random string for uniqueness
   */
  generateUniqueId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `${timestamp}-${random}`;
  }
  /**
   * Navigate to StoryViewerComponent to view a specific story
   * @param storyId - The ID of the story to view
   */
  /**
   * Open story viewer modal
   */
  openStory(storyId) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/story-viewer/story-viewer.component */ 3122))).StoryViewerComponent,
        componentProps: {
          storyId: storyId
        },
        cssClass: 'story-viewer-modal'
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      if (data !== null && data !== void 0 && data.updated) {
        // Reload stories if changes were made
        _this3.loadStories();
      }
    })();
  }
  /**
   * Delete a story with confirmation dialog and cascade cleanup
   * Implements complete deletion of story and all associated photos from storage
   *
   * @param storyId - The ID of the story to delete
   * Validates: Requirements 10.1, 10.2, 10.3, 10.6
   */
  deleteStory(storyId) {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: 'Confirmar eliminación',
        message: '¿Estás seguro de que deseas eliminar esta historia? Esta acción no se puede deshacer.',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Eliminar',
          role: 'destructive',
          handler: function () {
            var _ref = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this4.performStoryDeletion(storyId);
            });
            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }]
      });
      yield alert.present();
    })();
  }
  /**
   * Perform the actual story deletion with cascade cleanup
   * Shows progress indicator and handles all cleanup operations
   *
   * @param storyId - The ID of the story to delete
   * Validates: Requirements 10.2, 10.3
   */
  performStoryDeletion(storyId) {
    var _this5 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Show loading indicator
      const loading = yield _this5.loadingController.create({
        message: 'Eliminando historia...'
      });
      yield loading.present();
      try {
        // Step 1: Load story with all photos
        const story = yield new Promise((resolve, reject) => {
          _this5.storyService.get(storyId).subscribe({
            next: story => resolve(story),
            error: error => reject(error)
          });
        });
        // Step 2: Delete all photos from storage (both Cloudinary and IndexedDB)
        if (story.photos && story.photos.length > 0) {
          // Update loading message to show progress
          loading.message = `Eliminando fotos (0/${story.photos.length})...`;
          for (let i = 0; i < story.photos.length; i++) {
            const photo = story.photos[i];
            // Update progress
            loading.message = `Eliminando fotos (${i + 1}/${story.photos.length})...`;
            try {
              // Delete photo from storage
              yield _this5.storageService.deletePhoto(photo.url, photo.storageType);
              // Also delete thumbnail if it exists
              if (photo.thumbnailUrl) {
                try {
                  yield _this5.storageService.deletePhoto(photo.thumbnailUrl, photo.storageType);
                } catch (thumbnailError) {
                  // Log but don't fail if thumbnail deletion fails
                  console.warn(`Failed to delete thumbnail for photo ${photo.id}:`, thumbnailError);
                }
              }
            } catch (photoError) {
              // Log error but continue with other photos
              console.error(`Failed to delete photo ${photo.id}:`, photoError);
              _this5.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.DATA_CORRUPTION, `Error deleting photo ${photo.id}`, photoError);
            }
          }
        }
        // Step 3: Delete cover image from storage
        loading.message = 'Eliminando portada...';
        try {
          yield _this5.storageService.deletePhoto(story.coverUrl, story.coverStorageType);
        } catch (coverError) {
          // Log error but continue with story deletion
          console.error('Failed to delete cover image:', coverError);
          _this5.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.DATA_CORRUPTION, 'Error deleting cover image', coverError);
        }
        // Step 4: Delete story metadata from local storage
        loading.message = 'Eliminando metadatos...';
        yield _this5.storyService.delete(storyId);
        // Step 5: Dismiss loading and show success message
        yield loading.dismiss();
        yield _this5.showToast('Historia eliminada exitosamente', 'success');
        // Step 6: Refresh story list
        _this5.loadStories();
      } catch (error) {
        console.error('Error deleting story:', error);
        yield loading.dismiss();
        // Show error message
        _this5.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.DATA_CORRUPTION, 'Error deleting story', error);
        yield _this5.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.DATA_CORRUPTION, 'No se pudo eliminar la historia completamente. Algunos archivos pueden no haberse eliminado.');
      }
    })();
  }
  /**
   * Open StoryEditorComponent modal to edit a story
   * @param storyId - The ID of the story to edit
   */
  editStory(storyId) {
    var _this6 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this6.modalController.create({
        component: (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/story-editor/story-editor.component */ 4312))).StoryEditorComponent,
        componentProps: {
          storyId: storyId
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      if (data !== null && data !== void 0 && data.updated) {
        // Reload stories if changes were made
        _this6.loadStories();
      }
    })();
  }
  /**
   * Handle pull-to-refresh event
   * Implements network error handling
   *
   * @param event - The refresh event from ion-refresher
   * Validates: Requirements 14.1
   */
  handleRefresh(event) {
    this.storyService.getAll().subscribe({
      next: stories => {
        this.stories = stories;
        event.target.complete();
        this.updatePagination(); // Update pagination after refresh
      },
      error: error => {
        this.errorToastService.logError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT, 'Error refreshing stories', error);
        this.errorToastService.showError(_models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT);
        event.target.complete();
      }
    });
  }
  /**
   * Show action sheet menu for story options (edit/delete)
   * @param storyId - The ID of the story
   */
  showStoryMenu(storyId) {
    var _this7 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this7.actionSheetController.create({
        header: 'Opciones de historia',
        buttons: [{
          text: 'Editar',
          icon: 'create-outline',
          handler: () => {
            _this7.editStory(storyId);
          }
        }, {
          text: 'Eliminar',
          icon: 'trash-outline',
          role: 'destructive',
          handler: () => {
            _this7.deleteStory(storyId);
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }
  /**
   * Show a toast message
   * @param message - The message to display
   * @param color - The toast color (success, danger, warning)
   */
  showToast(message, type = 'success') {
    var _this8 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const iconMap = {
        success: 'checkmark-circle',
        error: 'alert-circle',
        warning: 'warning'
      };
      const toast = yield _this8.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom',
        cssClass: 'neutral-toast',
        buttons: [{
          icon: iconMap[type],
          side: 'start'
        }]
      });
      yield toast.present();
    })();
  }
  /**
   * Determine error code from error object
   * Analyzes error to categorize it appropriately
   *
   * @param error - The error object
   * @returns Appropriate ErrorCode enum value
   * Validates: Requirements 14.1, 14.2, 14.4, 14.5
   */
  determineErrorCode(error) {
    var _error$message;
    const errorMessage = (error === null || error === void 0 || (_error$message = error.message) === null || _error$message === void 0 ? void 0 : _error$message.toLowerCase()) || '';
    const errorCode = (error === null || error === void 0 ? void 0 : error.code) || '';
    // Network errors
    if (errorMessage.includes('network') || errorMessage.includes('timeout') || errorMessage.includes('connection')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.NETWORK_TIMEOUT;
    }
    // Storage quota errors (Cloudinary has generous limits)
    if (errorMessage.includes('quota') || errorCode === 'storage/quota-exceeded') {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.CLOUDINARY_QUOTA_EXCEEDED;
    }
    // Permission errors
    if (errorMessage.includes('permission') || errorCode.includes('permission')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.PERMISSION_DENIED;
    }
    // Image format errors
    if (errorMessage.includes('format') || errorMessage.includes('invalid image')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.INVALID_IMAGE_FORMAT;
    }
    // Image size errors
    if (errorMessage.includes('too large') || errorMessage.includes('size')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.IMAGE_TOO_LARGE;
    }
    // Data corruption errors
    if (errorMessage.includes('corrupt') || errorMessage.includes('invalid data')) {
      return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.DATA_CORRUPTION;
    }
    // Default to unknown error
    return _models_error_code_enum__WEBPACK_IMPORTED_MODULE_6__.ErrorCode.UNKNOWN_ERROR;
  }
  /**
   * Update pagination based on current stories
   * Calculates total pages and updates displayed stories
   * Implements pagination for collections exceeding 50 stories
   *
   * Validates: Requirements 2.1
   */
  updatePagination() {
    // Calculate total pages
    this.totalPages = Math.ceil(this.stories.length / this.itemsPerPage);
    // Ensure current page is valid
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    // Update displayed stories for current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedStories = this.stories.slice(startIndex, endIndex);
    // Prepare data for virtual scroll (group stories into rows)
    // Each row contains stories for one row in the grid (2 columns on mobile, 4 on tablet, etc.)
    this.paginatedStories = this.groupStoriesIntoRows(this.displayedStories);
  }
  /**
   * Group stories into rows for virtual scrolling
   * Creates rows based on responsive column layout
   *
   * @param stories - The stories to group
   * @returns Array of story rows
   */
  groupStoriesIntoRows(stories) {
    const rows = [];
    const itemsPerRow = 2; // Default to 2 columns (mobile)
    for (let i = 0; i < stories.length; i += itemsPerRow) {
      rows.push(stories.slice(i, i + itemsPerRow));
    }
    return rows;
  }
  /**
   * Navigate to the next page
   * Validates: Requirements 2.1
   */
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
      // Scroll to top of content
      const content = document.querySelector('ion-content');
      content === null || content === void 0 || content.scrollToTop(300);
    }
  }
  /**
   * Navigate to the previous page
   * Validates: Requirements 2.1
   */
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
      // Scroll to top of content
      const content = document.querySelector('ion-content');
      content === null || content === void 0 || content.scrollToTop(300);
    }
  }
}
_Tab5Page = Tab5Page;
_Tab5Page.ɵfac = function Tab5Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab5Page)();
};
_Tab5Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _Tab5Page,
  selectors: [["app-tab5"]],
  standalone: false,
  decls: 17,
  vars: 5,
  consts: [[3, "translucent"], [3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngIf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["name", "ellipsis-vertical-outline"], ["side", "top"], [3, "click"], ["name", "add"], [1, "loading-container"], [1, "empty-state"], ["name", "images-outline", 1, "empty-state-icon"], [1, "empty-state-hint"], ["size", "6", 4, "ngFor", "ngForOf"], ["size", "6"], ["loading", "lazy", 1, "story-cover", 3, "src", "alt"], [1, "card-content"], [2, "display", "flex", "align-items", "center", "gap", "5px"], ["name", "images-outline"], ["fill", "clear", 1, "story-menu-button", 3, "click"], ["slot", "icon-only", "name", "ellipsis-vertical"]],
  template: function Tab5Page_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Historias");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-connection-status");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-refresher", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionRefresh", function Tab5Page_Template_ion_refresher_ionRefresh_6_listener($event) {
        return ctx.handleRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-refresher-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, Tab5Page_div_8_Template, 2, 0, "div", 3)(9, Tab5Page_div_9_Template, 6, 0, "div", 4)(10, Tab5Page_ion_grid_10_Template, 3, 1, "ion-grid", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-fab", 6)(12, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-fab-list", 8)(15, "ion-fab-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function Tab5Page_Template_ion_fab_button_click_15_listener() {
        return ctx.createStory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.stories.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.stories.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _components_connection_status_connection_status_component__WEBPACK_IMPORTED_MODULE_7__.ConnectionStatusComponent],
  styles: ["ion-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.story-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.story-menu-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --background: rgba(255, 255, 255, 0.9);\n  --background-hover: rgba(255, 255, 255, 1);\n  --background-activated: rgba(255, 255, 255, 1);\n  --color: var(--ion-color-dark);\n  --border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  z-index: 10;\n}\n.story-menu-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 300px;\n  color: var(--ion-color-medium);\n  padding: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  text-align: center;\n  margin: 8px 0;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-state-hint[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.7;\n}"]
});

/***/ }),

/***/ 7778:
/*!***********************************************!*\
  !*** ./src/environments/cloudinary.config.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloudinaryConfig: () => (/* binding */ cloudinaryConfig)
/* harmony export */ });
/**
 * Cloudinary Configuration
 *
 * To set up:
 * 1. Sign up at: https://cloudinary.com/users/register/free
 * 2. Go to: https://console.cloudinary.com/
 * 3. Copy your Cloud Name
 * 4. Go to Settings > Upload > Add upload preset
 * 5. Create an "Unsigned" upload preset (no authentication required)
 * 6. Copy the preset name
 * 7. Update the values below
 */
const cloudinaryConfig = {
  cloudName: 'dzcs6ivi9',
  // Replace with your cloud name
  uploadPreset: 'sadri-mvp' // Replace with your unsigned upload preset
};

/***/ }),

/***/ 4843:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 9350);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 2998);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}
//# sourceMappingURL=firstValueFrom.js.map

/***/ }),

/***/ 605:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 3236);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 1807);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}
//# sourceMappingURL=interval.js.map

/***/ })

}]);