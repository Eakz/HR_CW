// https://www.codewars.com/kata/5a9fb5147c7a53e6c30000d0/train/javascript
const React = require('react');

class BeastForm extends React.Component{
  constructor(props){
    super(props);
    this.beastToRelease={ // <<<<<<<<<<<<<
      value:this
    };
    this.Submit = this.Submit.bind(this);
  }
  Submit(e){
    e.preventDefault();
    console.log(this.beastToRelease);
    unshackle(this.beastToRelease.value);

  }
  
  render(){
    return (
      <form onSubmit={this.Submit} id="beastForm">
        <input type="text" id="beastToRelease"/>
        <button type="submit" id="submit"></button>
      </form>
    )
  }
}

const { mount } = require("enzyme");
const sinon = require("sinon");

const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: "node.js",
};

describe(`BeastForm`, () => {
    let wrapper;
    const beastToRelease = "Cyborg";

    before(() => {
        wrapper = mount(<BeastForm />);
        wrapper.instance().beastToRelease.value = beastToRelease;
    });

    it(`should have a form with the id beastForm`, () => {
        Test.assertEquals(wrapper.find("#beastForm").exists(), true);
        Test.assertEquals(wrapper.find("#beastForm").first().type(), "form");
    });

    it(`should have an input field to specify the beast to release`, () => {
        Test.assertEquals(wrapper.find("#beastToRelease").exists(), true);
        Test.assertEquals(
            wrapper.find("#beastToRelease").first().type(),
            "input",
        );
    });

    it(`should have a submit button`, () => {
        Test.assertEquals(wrapper.find("#submit").exists(), true);
        Test.assertEquals(wrapper.find("#submit").first().type(), "button");
    });

    it(`onSubmit should call preventDefault`, () => {
        const spy = sinon.spy();
        const event = { preventDefault: spy };

        wrapper.find("#beastForm").simulate("submit", event);
        Test.assertEquals(spy.called, true);
    });

    it("onSubmit calls the unshackle function on submit with the beastName", () => {
        const unshackleSpy = sinon.spy();
        unshackle = unshackleSpy;
        const event = { preventDefault: () => {} };
        wrapper.simulate("submit", event);
        Test.assertEquals(unshackleSpy.called, true);
        sinon.assert.calledWith(unshackleSpy, beastToRelease);
    });
});
