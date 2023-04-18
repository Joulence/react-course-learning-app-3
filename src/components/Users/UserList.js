import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} ({user.age} years old)
                    </li>))}
            </ul>
        </Card>
    );
};

export default UserList;