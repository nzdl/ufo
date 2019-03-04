import * as React from "react";
import { observable, computed } from 'mobx'
import { inject, observer } from 'mobx-react'

@observer
export class UserApp extends React.Component<any> {
    @observable users = ["leiwang", "runlei"]
    @observable userName = ""
    @computed
    get userLength(){ return this.users.length}

    render() {
        window["users"] = this
        return <div>
            <ul>
                {this.users.map(user => <li key={user}>{user}</li>)}

            </ul>
            <p>Length: {this.userLength}</p>

            <input onChange={e => this.userName = e.target.value}/>
            <button onClick={e => this.users.push(this.userName)}>Add</button>
        </div>
    }
}

