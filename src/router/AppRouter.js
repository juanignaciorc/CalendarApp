import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";


export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					{/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Route exact path="/login" component={ LoginScreen }    />
                    <Route exact path="/" component={ CalendarScreen }    />

                    <Redirect to="/" />
				</Switch>
			</div>
		</Router>

	);
};

