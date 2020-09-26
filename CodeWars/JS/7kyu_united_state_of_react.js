import React from "react";

export class States extends React.Component {
    constructor() {
        super();
        this.state = {
            united: false,
        };
    }
    unite() {
        this.setState({ united: true });
    }
    render() {
        return (
            <div className="status">
                <p>
                    {this.state.united === true
                        ? "Code for everyone"
                        : "Make America code again"}
                </p>
            </div>
        );
    }
}
