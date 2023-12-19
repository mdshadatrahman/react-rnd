import React from "react";

const UpdatedComp = OriginalComponent => {
	class NewComp extends React.Component {
		render() {
			return <OriginalComponent name="The user" />
		}
	}
	return NewComp;
};

export default UpdatedComp;