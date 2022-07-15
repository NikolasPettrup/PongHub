/**
 * constructor of control
 *
 * @param {Window} window - the window of the browser
 * @returns {{
 *   areKeysDown: (function(...[*]): boolean),
 *   watch: Control.watch,
 *   isKeyDown: (function(*): *),
 *   clear: Control.clear,
 *   detach: Control.detach,
 *   unwatch: Control.unwatch
 * }}
 * @constructor
 */
let Control = function(window) {
    /**
     * window reference
     *
     * @type {Window}
     */
    this.window = window;

    /**
     * key map
     *
     * @type {Object}
     */
    this.map = {};

    /**
     * intervals
     *
     * @type {Object}
     */
    this.intervals = {};


    /**
     * scope reference
     *
     * @type {Control}
     */
    let scope = this;


    /**
     * set the key on the key map to true if it is pressed
     *
     * @param event - the keypress event
     */
    this.eventKeyDown = function (event)
    {
        scope.map[event.key.toLowerCase()] = true;
        event.preventDefault();
    }


    /**
     * set the key on the key map to false if it is not pressed
     *
     * @param event - the keypress event
     */
    this.eventKeyUp = function (event)
    {
        scope.map[event.key.toLowerCase()] = false;
        event.preventDefault();
    }


    /**
     * check if key is pressed
     *
     * @param {string} key - the key which gets checked
     * @returns {boolean}
     */
    this.isKeyDown = function (key)
    {
        return scope.map[key.toLowerCase()];
    }


    /**
     * check if any pressed key is set to the key map
     *
     * @param array - the keys which get checkt
     * @returns {boolean}
     */
    this.multipleKeysDown = function (array)
    {
        return typeof array.find( key => !scope.isKeyDown(key.toLowerCase()) ) === "undefined";
    }


    /**
     * check if keys are pressed atm
     *
     * @param {string} args - the keys which get checkt
     * @returns {boolean}
     */
    this.areKeysDown = function (...args)
    {
        return scope.multipleKeysDown(args);
    }


    /**
     * clear the key map
     */
    this.clear = function ()
    {
        scope.map = {};
    }


    /**
     * watch if any key of the key map is pressed
     *
     * @param {array} keyList - the key list for the check
     * @param {function} callback - the function for the callback
     * @returns {(function(): void)|*}
     */
    this.watchLoop = function (keyList, callback)
    {
        return function(){
            if(scope.multipleKeysDown(keyList))
                callback();
        }
    }


    /**
     * watch for key presses in a set interval
     *
     * @param {string} name - the name of the watcher
     * @param {function} callback - the callback function
     * @param {array} keyList - the list of defined keys
     */
    this.watch = function (name, callback, ...keyList)
    {
        scope.intervals[name] = setInterval(scope.watchLoop(keyList, callback), 1000/24);
    }


    /**
     * disable the watcher
     *
     * @param {string} name - the name of the watcher
     */
    this.unwatch = function (name)
    {
        clearInterval(scope.intervals[name]);
        delete scope.intervals[name];
    }


    /**
     * remove all event listeners
     */
    this.detach = function ()
    {
        scope.window.removeEventListener("keydown", scope.eventKeyDown);
        scope.window.removeEventListener("keyup", scope.eventKeyUp);
    }


    /**
     * add all event listeners
     */
    this.attach = function ()
    {
        scope.window.addEventListener("keydown", scope.eventKeyDown);
        scope.window.addEventListener("keyup", scope.eventKeyUp);
    }


    /**
     * return all functions of control and add event listeners
     */
    return function ()
    {
        scope.attach();

        return {
            isKeyDown:  scope.isKeyDown,
            areKeysDown: scope.areKeysDown,
            watch:     scope.watch,
            unwatch:   scope.unwatch,
            clear:     scope.clear,
            detach:    scope.detach
        };
    }();
}


/**
 * export Control to make it importable for other files
 */
export default Control;

/**
 * create a single instance of Control to get called from anywhere in the project
 *
 * @type {Control}
 */
let control = new Control(window);

/**
 * export the getControl function to get the single instance of Control
 *
 * @returns {Control}
 */
export let getControl = function() {
    return control;
}