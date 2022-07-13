let Control = function(window) {
    this.window = window;
    this.map = {};
    this.intervals = {};

    let scope = this;

    this.eventKeyDown = function (event)
    {
        scope.map[event.key.toLowerCase()] = true;
        console.log(scope.map);
        event.preventDefault();
    }

    this.eventKeyUp = function (event)
    {
        scope.map[event.key.toLowerCase()] = false;
        event.preventDefault();
    }

    this.isKeyDown = function (key)
    {
        return scope.map[key.toLowerCase()];
    }

    this.multipleKeysDown = function (array)
    {
        return typeof array.find( key => !scope.isKeyDown(key.toLowerCase()) ) === "undefined";
    }

    this.areKeysDown = function (...args)
    {
        return scope.multipleKeysDown(args);
    }

    this.clear = function ()
    {
        scope.map = {};
    }

    this.watchLoop = function (keyList, callback)
    {
        return function(){
            if(scope.multipleKeysDown(keyList))
                callback();
        }
    }

    this.watch = function (name, callback, ...keyList)
    {
        scope.intervals[name] = setInterval(scope.watchLoop(keyList, callback), 1000/24);
    }

    this.unwatch = function (name)
    {
        clearInterval(scope.intervals[name]);
        delete scope.intervals[name];
    }

    this.detach = function ()
    {
        scope.window.removeEventListener("keydown", scope.eventKeyDown);
        scope.window.removeEventListener("keyup", scope.eventKeyUp);
    }

    this.attach = function ()
    {
        scope.window.addEventListener("keydown", scope.eventKeyDown);
        scope.window.addEventListener("keyup", scope.eventKeyUp);
    }

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

export default Control;
let control = new Control(window);
export let getControl = function(){
    return control;
}