import React from "react";

export default class ReviewForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Review
                        <input type="text" name="review" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}