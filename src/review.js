import React from "react";
import Stars from "./stars";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;

            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }
            return state;
        });
    }


    render() {
        return (
            <div>
                <h2>{this.state.highestCountName}</h2>
                <Stars
                    name="* * * * *"
                    count={this.state.counts.one}
                    onClick={this.countClicks}
                />
            </div>
        );
    }
}