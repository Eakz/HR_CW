// https://www.codewars.com/kata/5571d9fc11526780a000011a/train/javascript

class Thing {
    constructor(name) {
      this.name = name;
    }
  
    get is_a() {
      return booleanPropAdder(this, true);
    }
  
    get is_not_a() {
      return booleanPropAdder(this, false);
    }
  
    get is_the() {
      return relationPropAdder(this);
    }
  
    get being_the() {
      return relationPropAdder(this);
    }
  
    get and_the() {
      return relationPropAdder(this);
    }
  
    has(n) {
      return thingPropAdder(this, n);
    }
  
    having(n) {
      return thingPropAdder(this, n);
    }
  
    get can() {
      return funcPropAdder(this);
    }
  
  }
  
  class ThingArray extends Array {
    constructor(count, name) {
      super(count);
      for (let i = 0; i < count; i++) {
        this[i] = new Thing(name);
      }
    }
  
    each(fn) {
      this.forEach(thing => {
        global.having = n => thingPropAdder(thing, n);
        global.being_the = relationPropAdder(thing);
        fn();
        delete global.having;
        delete global.being_the;
      });
    }
  }
  
  function booleanPropAdder(o, value) {
    return onPropAccess(prop => {
      o[`is_a_${prop}`] = value;
      return o;
    });
  }
  
  function thingPropAdder(o, count) {
    return onPropAccess(prop => {
      if (count === 1) {
        o[prop] = new Thing(prop);
      } else {
        const thingName = prop.slice(0, -1);
        o[prop] = new ThingArray(count, thingName);
      }
      return o[prop];
    });
  }
  
  function relationPropAdder(o) {
    return onPropAccess(relation => {
      return onPropAccess(object => {
        o[relation] = object;
        return o;
      });
    });
  }
  
  function funcPropAdder(o) {
    return onPropAccess(function(actionName) {
      return function (...trackerAction) {
        let trackerName, action;
        if (trackerAction.length === 1) {
          action = trackerAction[0];
        } else {
          [trackerName, action] = trackerAction;
          o[trackerName] = [];
        }
        o[actionName] = function (...args) {
          global.name = o.name;
          const result = action(...args);
          if (trackerName) o[trackerName].push(result);
          return result;
        };
      };
    });
  }
  
  function onPropAccess(fn) {
    return new Proxy({}, { get: (target, name) => fn(name) });
  }