/*
    Source File: COMP397-W2016-MailPilotDemo-master/ gameobject.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 18, 2016
    Date Last  Modified: Mar 18, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: super class for game objects.
    Revision History: updated variable values for scrolling
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GAMEOBJECT SUPER CLASS ++++++++++++++++++++++++++++++
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR METHOD 
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = 0;
            this._bottomBounds = config.Screen.HEIGHT - this.height;
            this._leftBounds = -this.width;
            this._rightBounds = config.Screen.WIDTH + this.width;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        GameObject.prototype._checkBounds = function (value) {
            var resetValue = 0;
            // check if x value has met the reset criteria
            if (this.x >= value) {
                this._reset(resetValue);
            }
        };
        // Reset the Object offscreen
        GameObject.prototype._reset = function (value) {
            this.x = value;
        };
        // Getter Method to check collision flag of object
        GameObject.prototype.getIsColliding = function () {
            return this._isColliding;
        };
        // Setter Method to set the collision flag of the object - true or false
        GameObject.prototype.setIsColliding = function (isColliding) {
            this._isColliding = isColliding;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        GameObject.prototype.update = function () {
            var boundValue = 0;
            // scroll the road 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(boundValue);
        };
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map