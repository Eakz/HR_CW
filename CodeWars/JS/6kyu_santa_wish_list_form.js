// https://www.codewars.com/kata/5a9ecd89fd5777e0790001ea/train/javascript

const React = require("react")

class WishlistForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: "",
      wish: "",
      priority: 1,
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.send(this.state)
  }

  render() {
    const {name, wish, priority} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="name" value={name} onChange={e => this.setState({name: e.target.value})} />
        <textarea id="wish" value={wish} onChange={e => this.setState({wish: e.target.value})} />
        <select id="priority" value={priority} onChange={e => this.setState({priority: +e.target.value})}>
          <option value="1" />
          <option value="2" />
          <option value="3" />
          <option value="4" />
          <option value="5" />
        </select>
        <button />
      </form>
    )
  }
}

const { shallow } = require("enzyme");
const { send } = require("process");

describe("Santa wish-list form", () => {
  
  let form;

  before(() => {
    form = shallow(
      <WishlistForm />
    );
  });
  
  it("has an initial state containing name, wish and priority", () => {
    Test.assertEquals(form.state('name'), '');
    Test.assertEquals(form.state('wish'), '');
    Test.assertEquals(form.state('priority'), 1);
  });
    
  it("has an text area with id 'wish'", () => {
    let wishInput = form.find('#wish');
    Test.assertEquals(wishInput.length, 1);
    Test.assertEquals(wishInput.type(), 'textarea');
  });
    
  it('should change state when entering Peter as name', () => {
    form.find("#name")
      .simulate("change", { target: { value: "Peter" } });
    Test.assertEquals(form.state("name"), "Peter");
  });

});