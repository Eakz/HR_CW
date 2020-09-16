// https://www.codewars.com/kata/5a95947f4a6b342636000173/train/javascript

import React from "react";

export const EggList = props => (
    <ul>
        {props.eggs.map((e, i) => (
            <EasterEgg key={i} name={e} />
        ))}
    </ul>
);

export const EasterEgg = props => <li key={props.key}>{props.name}</li>;

// NOTE This kata uses Jest.
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

import { EggList, EasterEgg } from "./solution";

describe("Magic egg list", () => {
    let eggList;

    beforeEach(() => {
        eggList = shallow(
            <EggList eggs={["Lindt", "Cadbury", "Milka", "Maltesers"]} />,
        );
    });

    it("has an unordered egg list component", () => {
        expect(eggList.name()).toEqual("ul");
    });

    it("has list items", () => {
        expect(eggList.find("EasterEgg").length).toEqual(4);
    });

    it("must have key prop", () => {
        const list = eggList.find("EasterEgg");
        expect(list.at(0).key()).toEqual("0");
        expect(list.at(1).key()).toEqual("1");
        expect(list.at(2).key()).toEqual("2");
        expect(list.at(3).key()).toEqual("3");
    });

    it("should have an EasterEgg child component", () => {
        expect(eggList.children().first().name()).toEqual("EasterEgg");
        expect(eggList.children().first().props().name).toEqual("Lindt");
    });
});
