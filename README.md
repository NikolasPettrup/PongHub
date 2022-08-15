
## Ball
**Kind**: global class  

* [Ball](#markdown-header-ball)
    * [new Ball(context, x, y, speed, velocityX, velocityY, r, color)](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)
    * _instance_
        * [.context](#markdown-header-ballcontext-object) : Object
        * [.x](#markdown-header-ballx-number) : number
        * [.y](#markdown-header-bally-number) : number
        * [.speed](#markdown-header-ballspeed-number) : number
        * [.velocityX](#markdown-header-ballvelocityx-number) : number
        * [.velocityY](#markdown-header-ballvelocityy-number) : number
        * [.radius](#markdown-header-ballradius-number) : number
        * [.color](#markdown-header-ballcolor-string) : string
        * [.drawBall()](#markdown-header-balldrawball)
        * [.collisionDetection(width, height, playerOne, playerTwo)](#markdown-header-ballcollisiondetectionwidth-height-playerone-playertwo)
        * [.collideWithPlayer(player, width)](#markdown-header-ballcollidewithplayerplayer-width)
            * [~collidePoint](#markdown-header-collidewithplayercollidepoint-number) : number
            * [~angleRad](#markdown-header-collidewithplayeranglerad-number) : number
            * [~direction](#markdown-header-collidewithplayerdirection-number) : number
        * [.isColliding(player)](#markdown-header-balliscollidingplayer-boolean) ⇒ boolean
        * [.setVelocityX(velocity)](#markdown-header-ballsetvelocityxvelocity)
        * [.setVelocityY(velocity)](#markdown-header-ballsetvelocityyvelocity)
        * [.setSpeed(speed)](#markdown-header-ballsetspeedspeed)
        * [.setX(x)](#markdown-header-ballsetxx)
        * [.setY(y)](#markdown-header-ballsetyy)
        * [.getSpeed()](#markdown-header-ballgetspeed-number) ⇒ number
        * [.getVelocityX()](#markdown-header-ballgetvelocityx-number) ⇒ number
        * [.getVelocityY()](#markdown-header-ballgetvelocityy-number) ⇒ number
        * [.getX()](#markdown-header-ballgetx-number) ⇒ number
        * [.getY()](#markdown-header-ballgety-number) ⇒ number
        * [.getRadius()](#markdown-header-ballgetradius-number) ⇒ number
    * _inner_
        * [~scope](#markdown-header-ballscope-ball) : Ball
            * [.speed](#markdown-header-scopespeed-number) : number

### new Ball(context, x, y, speed, velocityX, velocityY, r, color)
constructor of Ball


| Param | Type | Description |
| --- | --- | --- |
| context | Object | the context of the canvas |
| x | number | the x position of the ball |
| y | number | the y position of the ball |
| speed | number | the speed of the ball |
| velocityX | number | the velocity in x direction of the ball |
| velocityY | number | the velocity in y direction of the ball |
| r | number | the radius of the ball |
| color | string | the color of the ball as hex string |

### ball.context : Object
the canvas context

**Kind**: instance property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.x : number
the x position of the ball

**Kind**: instance property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.y : number
the y position of the ball

**Kind**: instance property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.speed : number
the speed of the ball

**Kind**: instance property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.velocityX : number
the velocity in x direction of the ball

**Kind**: instance property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.velocityY : number
the velocity in y direction of the ball

**Kind**: instance property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.radius : number
the radius of the ball

**Kind**: instance property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.color : string
the color of the ball as hex string

**Kind**: instance property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.drawBall()
draw the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.collisionDetection(width, height, playerOne, playerTwo)
detect any collisions of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  

| Param | Type | Description |
| --- | --- | --- |
| width | number | the width of the canvas |
| height | number | the height of the canvas |
| playerOne | Player | the instance of player one |
| playerTwo | Player | the instance of player two |

### ball.collideWithPlayer(player, width)
calculate collision with a player and set a new angle of reflection and speed for the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  

| Param | Type | Description |
| --- | --- | --- |
| player | Player | the instance of the player |
| width | number | the width of the canvas |


* [.collideWithPlayer(player, width)](#markdown-header-ballcollidewithplayerplayer-width)
    * [~collidePoint](#markdown-header-collidewithplayercollidepoint-number) : number
    * [~angleRad](#markdown-header-collidewithplayeranglerad-number) : number
    * [~direction](#markdown-header-collidewithplayerdirection-number) : number

#### collideWithPlayer~collidePoint : number
check for the collision point with the player

**Kind**: inner property of collideWithPlayer  
#### collideWithPlayer~angleRad : number
calculate a new angle of reflection

**Kind**: inner property of collideWithPlayer  
#### collideWithPlayer~direction : number
set the new direction of the ball

**Kind**: inner property of collideWithPlayer  
### ball.isColliding(player) ⇒ boolean
check if the ball is colliding with a player

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  

| Param | Type | Description |
| --- | --- | --- |
| player | Player | the instance of the player |

### ball.setVelocityX(velocity)
set velocity x of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  

| Param | Type | Description |
| --- | --- | --- |
| velocity | number | the new x velocity of the ball, default 5 |

### ball.setVelocityY(velocity)
set velocity y of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  

| Param | Type | Description |
| --- | --- | --- |
| velocity | number | the new y velocity of the ball, default 5 |

### ball.setSpeed(speed)
set speed of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  

| Param | Type | Description |
| --- | --- | --- |
| speed | number | the new speed of the ball, default 5 |

### ball.setX(x)
set x position of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  

| Param | Type | Description |
| --- | --- | --- |
| x | number | the new x position of the ball |

### ball.setY(y)
set y position of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  

| Param | Type | Description |
| --- | --- | --- |
| y | number | the new y position of the ball |

### ball.getSpeed() ⇒ number
get the speed of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.getVelocityX() ⇒ number
get the x velocity of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.getVelocityY() ⇒ number
get the y velocity of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.getX() ⇒ number
get the x position of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.getY() ⇒ number
get the y position of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### ball.getRadius() ⇒ number
get the radius of the ball

**Kind**: instance method of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
### Ball~scope : Ball
create a scope reference

**Kind**: inner property of [Ball](#markdown-header-new-ballcontext-x-y-speed-velocityx-velocityy-r-color)  
#### scope.speed : number
set ball speed + 0.3

**Kind**: static property of scope  
## Control
**Kind**: global class  

* [Control](#markdown-header-control)
    * [new Control(window)](#markdown-header-new-controlwindow)
    * _instance_
        * [.window](#markdown-header-controlwindow-window) : Window
        * [.map](#markdown-header-controlmap-object) : Object
        * [.intervals](#markdown-header-controlintervals-object) : Object
        * [.eventKeyDown(event)](#markdown-header-controleventkeydownevent)
        * [.eventKeyUp(event)](#markdown-header-controleventkeyupevent)
        * [.isKeyDown(key)](#markdown-header-controliskeydownkey-boolean) ⇒ boolean
        * [.multipleKeysDown(array)](#markdown-header-controlmultiplekeysdownarray-boolean) ⇒ boolean
        * [.areKeysDown(args)](#markdown-header-controlarekeysdownargs-boolean) ⇒ boolean
        * [.clear()](#markdown-header-controlclear)
        * [.watchLoop(keyList, callback)](#markdown-header-controlwatchloopkeylist-callback-function) ⇒ function
        * [.watch(name, callback, keyList)](#markdown-header-controlwatchname-callback-keylist)
        * [.unwatch(name)](#markdown-header-controlunwatchname)
        * [.detach()](#markdown-header-controldetach)
        * [.attach()](#markdown-header-controlattach)
    * _inner_
        * [~scope](#markdown-header-controlscope-control) : Control

### new Control(window)
constructor of control


| Param | Type | Description |
| --- | --- | --- |
| window | Window | the window of the browser |

### control.window : Window
window reference

**Kind**: instance property of [Control](#markdown-header-new-controlwindow)  
### control.map : Object
key map

**Kind**: instance property of [Control](#markdown-header-new-controlwindow)  
### control.intervals : Object
intervals

**Kind**: instance property of [Control](#markdown-header-new-controlwindow)  
### control.eventKeyDown(event)
set the key on the key map to true if it is pressed

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  

| Param | Description |
| --- | --- |
| event | the keypress event |

### control.eventKeyUp(event)
set the key on the key map to false if it is not pressed

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  

| Param | Description |
| --- | --- |
| event | the keypress event |

### control.isKeyDown(key) ⇒ boolean
check if key is pressed

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  

| Param | Type | Description |
| --- | --- | --- |
| key | string | the key which gets checked |

### control.multipleKeysDown(array) ⇒ boolean
check if any pressed key is set to the key map

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  

| Param | Description |
| --- | --- |
| array | the keys which get checkt |

### control.areKeysDown(args) ⇒ boolean
check if keys are pressed atm

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  

| Param | Type | Description |
| --- | --- | --- |
| args | string | the keys which get checkt |

### control.clear()
clear the key map

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  
### control.watchLoop(keyList, callback) ⇒ function
watch if any key of the key map is pressed

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  

| Param | Type | Description |
| --- | --- | --- |
| keyList | array | the key list for the check |
| callback | function | the function for the callback |

### control.watch(name, callback, keyList)
watch for key presses in a set interval

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  

| Param | Type | Description |
| --- | --- | --- |
| name | string | the name of the watcher |
| callback | function | the callback function |
| keyList | array | the list of defined keys |

### control.unwatch(name)
disable the watcher

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  

| Param | Type | Description |
| --- | --- | --- |
| name | string | the name of the watcher |

### control.detach()
remove all event listeners

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  
### control.attach()
add all event listeners

**Kind**: instance method of [Control](#markdown-header-new-controlwindow)  
### Control~scope : Control
scope reference

**Kind**: inner property of [Control](#markdown-header-new-controlwindow)  
## Player
**Kind**: global class  

* [Player](#markdown-header-player)
    * [new Player(context, type, x, y, width, height, color, id)](#markdown-header-new-playercontext-type-x-y-width-height-color-id)
    * _instance_
        * [.context](#markdown-header-playercontext-object) : Object
        * [.type](#markdown-header-playertype-string) : string
        * [.x](#markdown-header-playerx-number) : number
        * [.y](#markdown-header-playery-number) : number
        * [.width](#markdown-header-playerwidth-number) : number
        * [.height](#markdown-header-playerheight-number) : number
        * [.color](#markdown-header-playercolor-string) : string
        * [.id](#markdown-header-playerid-number) : number
        * [.upKey](#markdown-header-playerupkey-string) : string
        * [.downKey](#markdown-header-playerdownkey-string) : string
        * [.speedKey](#markdown-header-playerspeedkey-string) : string
        * [.drawPlayer()](#markdown-header-playerdrawplayer)
        * [.move(height)](#markdown-header-playermoveheight)
        * [.moveUp(speed)](#markdown-header-playermoveupspeed)
        * [.moveDown(height, speed)](#markdown-header-playermovedownheight-speed)
        * [.getType()](#markdown-header-playergettype-string) ⇒ string
        * [.getX()](#markdown-header-playergetx-number) ⇒ number
        * [.getY()](#markdown-header-playergety-number) ⇒ number
        * [.getHeight()](#markdown-header-playergetheight-number) ⇒ number
        * [.getWidth()](#markdown-header-playergetwidth-number) ⇒ number
        * [.getId()](#markdown-header-playergetid-number) ⇒ number
        * [.setY(y)](#markdown-header-playersetyy)
        * [.setUpKey(key)](#markdown-header-playersetupkeykey)
        * [.setDownKey(key)](#markdown-header-playersetdownkeykey)
        * [.setSpeedKey(key)](#markdown-header-playersetspeedkeykey)
    * _inner_
        * [~scope](#markdown-header-playerscope-player) : Player
        * [~control](#markdown-header-playercontrol-control) : Control

### new Player(context, type, x, y, width, height, color, id)
constructor of player


| Param | Type | Description |
| --- | --- | --- |
| context | object | the canvas' context |
| type | string | the type of the player (user or com) |
| x | number | the x position of the player |
| y | number | the y position of the player |
| width | number | the width of the player's paddle |
| height | number | the height of the player's paddle |
| color | string | the color of the player's paddle as hex string |
| id | number | the id of the player |

### player.context : Object
the context of the canvas

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.type : string
the type of the player

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.x : number
the x position of the player

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.y : number
the y position of the player

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.width : number
the width of the player's paddle

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.height : number
the height of the player's paddle

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.color : string
the color of the player's paddle as hex string

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.id : number
the id of the player

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.upKey : string
the move up key of the player

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.downKey : string
the move down key of the player

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.speedKey : string
the speed key of the player

**Kind**: instance property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.drawPlayer()
draw the player's paddle

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.move(height)
move the player in specific direction and on specific speed on key press

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  

| Param | Type | Description |
| --- | --- | --- |
| height | number | the height of the canvas |

### player.moveUp(speed)
move up the paddle

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  

| Param | Type | Description |
| --- | --- | --- |
| speed | number | the speed of the paddle |

### player.moveDown(height, speed)
move down the paddle

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  

| Param | Type | Description |
| --- | --- | --- |
| height | number | the height of the canvas |
| speed | number | the speed of the paddle |

### player.getType() ⇒ string
get the type of the player

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.getX() ⇒ number
get the x position of the player

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.getY() ⇒ number
get the y position of the player

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.getHeight() ⇒ number
get the height of the player's paddle

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.getWidth() ⇒ number
get the width of the player's paddle

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.getId() ⇒ number
get the id of the player

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### player.setY(y)
set the y position of the player

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  

| Param | Type | Description |
| --- | --- | --- |
| y | number | the y position |

### player.setUpKey(key)
set the move up key of the player

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  

| Param | Type | Description |
| --- | --- | --- |
| key | string | the key which gets pressed |

### player.setDownKey(key)
set the move down key of the player

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  

| Param | Type | Description |
| --- | --- | --- |
| key | string | the key which gets pressed |

### player.setSpeedKey(key)
set the speed key of the player

**Kind**: instance method of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  

| Param | Type | Description |
| --- | --- | --- |
| key | string | the key which gets pressed |

### Player~scope : Player
set a scope reference

**Kind**: inner property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
### Player~control : Control
get an instance of the control listener

**Kind**: inner property of [Player](#markdown-header-new-playercontext-type-x-y-width-height-color-id)  
## Scene
**Kind**: global class  

* [Scene](#markdown-header-scene)
    * [new Scene(elementId, window)](#markdown-header-new-sceneelementid-window)
    * _instance_
        * [.element](#markdown-header-sceneelement-htmlelement) : HTMLElement
        * [.context](#markdown-header-scenecontext-object) : object
        * [.width](#markdown-header-scenewidth-number) : number
        * [.height](#markdown-header-sceneheight-number) : number
        * [.color](#markdown-header-scenecolor-string) : string
        * [.startX](#markdown-header-scenestartx-number) : number
        * [.startY](#markdown-header-scenestarty-number) : number
        * [.playerOne](#markdown-header-sceneplayerone-player) : Player
        * [.playerTwo](#markdown-header-sceneplayertwo-player) : Player
        * [.draw()](#markdown-header-scenedraw)
        * [.update()](#markdown-header-sceneupdate)
        * [.render()](#markdown-header-scenerender)
        * [.reset()](#markdown-header-scenereset)
        * [.getPlayerOne()](#markdown-header-scenegetplayerone-player) ⇒ Player
        * [.getPlayerTwo()](#markdown-header-scenegetplayertwo-player) ⇒ Player
        * [.getHeight()](#markdown-header-scenegetheight-number) ⇒ number
    * _inner_
        * [~scope](#markdown-header-scenescope-scene) : Scene
        * [~control](#markdown-header-scenecontrol-control) : Control
        * [~ball](#markdown-header-sceneball-ball) : Ball
        * [~score](#markdown-header-scenescore-score) : Score

### new Scene(elementId, window)
constructor of Scene


| Param | Type | Description |
| --- | --- | --- |
| elementId | string | the id of the canvas |
| window | Window | the window of the browser |

### scene.element : HTMLElement
canvas element

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.context : object
context from canvas element

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.width : number
width of window

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.height : number
height of window

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.color : string
color as hex string with default black

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.startX : number
starting x position with default 0

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.startY : number
starting y position with default 0

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.playerOne : Player
instantiate player one and set control keys

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.playerTwo : Player
instantiate player two and set control keys

**Kind**: instance property of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.draw()
draw the scene

**Kind**: instance method of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.update()
update the current scene

**Kind**: instance method of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.render()
render the game

**Kind**: instance method of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.reset()
reset the ball

**Kind**: instance method of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.getPlayerOne() ⇒ Player
get instance of player one

**Kind**: instance method of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.getPlayerTwo() ⇒ Player
get instance of player two

**Kind**: instance method of [Scene](#markdown-header-new-sceneelementid-window)  
### scene.getHeight() ⇒ number
get height of the canvas

**Kind**: instance method of [Scene](#markdown-header-new-sceneelementid-window)  
### Scene~scope : Scene
scope reference

**Kind**: inner property of [Scene](#markdown-header-new-sceneelementid-window)  
### Scene~control : Control
get instance of control

**Kind**: inner property of [Scene](#markdown-header-new-sceneelementid-window)  
### Scene~ball : Ball
instantiate a new Ball

**Kind**: inner property of [Scene](#markdown-header-new-sceneelementid-window)  
### Scene~score : Score
instantiate the score and set it to 0:0

**Kind**: inner property of [Scene](#markdown-header-new-sceneelementid-window)  
## Score
**Kind**: global class  

* [Score](#markdown-header-score)
    * [new Score(scorePlayerOne, scorePlayerTwo)](#markdown-header-new-scorescoreplayerone-scoreplayertwo)
    * _instance_
        * [.scorePlayerOne](#markdown-header-scorescoreplayerone-number) : number
        * [.scorePlayerTwo](#markdown-header-scorescoreplayertwo-number) : number
        * [.pointsToWin](#markdown-header-scorepointstowin-number) : number
        * [.getScorePlayerOne()](#markdown-header-scoregetscoreplayerone-number) ⇒ number
        * [.getScorePlayerTwo()](#markdown-header-scoregetscoreplayertwo-number) ⇒ number
        * [.setScorePlayerOne(score)](#markdown-header-scoresetscoreplayeronescore)
        * [.setScorePlayerTwo(score)](#markdown-header-scoresetscoreplayertwoscore)
    * _inner_
        * [~scope](#markdown-header-scorescope-score) : Score

### new Score(scorePlayerOne, scorePlayerTwo)
constructor of score


| Param | Type | Description |
| --- | --- | --- |
| scorePlayerOne | number | the score of player one |
| scorePlayerTwo | number | the score of player two |

### score.scorePlayerOne : number
set score of player one

**Kind**: instance property of [Score](#markdown-header-new-scorescoreplayerone-scoreplayertwo)  
### score.scorePlayerTwo : number
set score of player two

**Kind**: instance property of [Score](#markdown-header-new-scorescoreplayerone-scoreplayertwo)  
### score.pointsToWin : number
set points to be reached to win the game

**Kind**: instance property of [Score](#markdown-header-new-scorescoreplayerone-scoreplayertwo)  
### score.getScorePlayerOne() ⇒ number
get the score of player one

**Kind**: instance method of [Score](#markdown-header-new-scorescoreplayerone-scoreplayertwo)  
### score.getScorePlayerTwo() ⇒ number
get the score of player two

**Kind**: instance method of [Score](#markdown-header-new-scorescoreplayerone-scoreplayertwo)  
### score.setScorePlayerOne(score)
set the score of player one

**Kind**: instance method of [Score](#markdown-header-new-scorescoreplayerone-scoreplayertwo)  

| Param | Type | Description |
| --- | --- | --- |
| score | number | the new score |

### score.setScorePlayerTwo(score)
set the score of player two

**Kind**: instance method of [Score](#markdown-header-new-scorescoreplayerone-scoreplayertwo)  

| Param | Type | Description |
| --- | --- | --- |
| score | number | the new score |

### Score~scope : Score
set a scope reference

**Kind**: inner property of [Score](#markdown-header-new-scorescoreplayerone-scoreplayertwo)  
## scene : object
declare scene type

**Kind**: global variable  
## control : [Control](#markdown-header-new-controlwindow)
create a single instance of Control to get called from anywhere in the project

**Kind**: global variable  
## getControl ⇒ [Control](#markdown-header-new-controlwindow)
export the getControl function to get the single instance of Control

**Kind**: global variable  
## start()
create a new game screen

**Kind**: global function  

* [start()](#markdown-header-start)
    * [~child](#markdown-header-startchild-htmlelement) : HTMLElement
    * [~parent](#markdown-header-startparent-htmlbodyelement) : HTMLBodyElement
    * [~canvasId](#markdown-header-startcanvasid-string) : string
    * [~canvas](#markdown-header-startcanvas-htmlcanvaselement) : HTMLCanvasElement
        * [.id](#markdown-header-canvasid-string) : string
        * [.width](#markdown-header-canvaswidth-number) : number
        * [.height](#markdown-header-canvasheight-number) : number
    * [~div](#markdown-header-startdiv-element) : Element
    * [~scene](#markdown-header-startscene-object) : object

### start~child : HTMLElement
starting screen element from body

**Kind**: inner property of [start](#markdown-header-start)  
### start~parent : HTMLBodyElement
body element

**Kind**: inner property of [start](#markdown-header-start)  
### start~canvasId : string
canvas id

**Kind**: inner property of [start](#markdown-header-start)  
### start~canvas : HTMLCanvasElement
create new canvas element

**Kind**: inner property of [start](#markdown-header-start)  

* [~canvas](#markdown-header-startcanvas-htmlcanvaselement) : HTMLCanvasElement
    * [.id](#markdown-header-canvasid-string) : string
    * [.width](#markdown-header-canvaswidth-number) : number
    * [.height](#markdown-header-canvasheight-number) : number

#### canvas.id : string
set canvas id

**Kind**: static property of canvas  
#### canvas.width : number
set canvas width to window innerWidth

**Kind**: static property of canvas  
#### canvas.height : number
set canvas height to window innerHeight

**Kind**: static property of canvas  
### start~div : Element
get pong-game element and append this element with canvas child

**Kind**: inner property of [start](#markdown-header-start)  
### start~scene : object
instantiate a new scene

**Kind**: inner property of [start](#markdown-header-start)  

| Param | Type | Description |
| --- | --- | --- |
| elementId | string | the id of the canvas |
| window | Window | the current browser window |

## drawRect(context, x, y, width, height, color)
draw a rectangle in a canvas context

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | object | the canvas' context |
| x | number | the x position of the rectangle |
| y | number | the y position of the rectangle |
| width | number | the width of the rectangle |
| height | number | the height of the rectangle |
| color | string | the color of the rectangle as hex string |

## drawNet(context, x, y, netWidth, netHeight, height, color)
draw a net from rectangles on the canvas

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | object | the canvas' context |
| x | number | the x position of the net |
| y | number | the y position of the net |
| netWidth | number | the width of each net rectangle |
| netHeight | number | the height of each net rectangle |
| height | number | the height of the canvas |
| color | string | the color of the net rectangles as hex string |

## drawCircle(context, x, y, r, color)
draw a circle in a canvas context

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | object | the canvas' context |
| x | number | the x position of the circle |
| y | number | the y position of the circle |
| r | number | the radius of the circle |
| color | string | the color of the circle as hex string |

