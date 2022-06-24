import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "Misiek",
			image:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fsrc%2F480%2F4800346.jpg&f=1&nofb=1",
			places: 3
		}
	];

	return <UsersList items={USERS} />;
};

export default Users;
