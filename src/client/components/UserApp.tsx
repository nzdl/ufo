import * as React from "react";
import { observable, computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import axios from 'axios'


class UserStore {

    @observable users = ["leiwang", "runlei"]
    @observable userName = ""

    @computed
    get userLength(){ return this.users.length}

    onChange = userName => userstore.userName = userName
    submit = () => {
         userstore.users.push(userstore.userName);
         this.userName = ""
    }

    fetchUser = async () => {
        const response = await axios.get('/users')
        this.users = response.data
    }


 }

const userstore = new UserStore()

function User({userName}) {
    return <li>{userName}</li>
}

export let UserApp = () =>

        <div>
            <ul>
                {userstore.users.map((userName) => <User key={userName} userName={userName} />)}

            </ul>
            <p>Length: {userstore.userLength}</p>

            <input onChange={e => userstore.onChange(e.target.value)} value={userstore.userName}/>
            <button onClick={userstore.submit}>Add</button>
        </div>


UserApp = observer(UserApp)