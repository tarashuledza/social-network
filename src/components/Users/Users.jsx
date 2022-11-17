import React from "react";
import s from './Users.module.css';
import {Link} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
        let pageCount = Math.ceil(props.totalUserCount/props.pageSize);

        let pageNum = [];
        for (let i = 1;i <= pageCount;i++) {
            pageNum.push(i);
        }
    return <div className={s.users}>
        <div>
            {
                pageNum.map((p, id) => {
                    return <span key={id} className={props.currentPage ===  p ? s.selectedPage : undefined }
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div className={s.user} key={u.id}>
                <div className={s.avatar}>
                    <Link to={'/profile/'+u.id}>
                        <img className={s.avatar} src={u.photos.small != null
                            ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/25/25634.png'}/>
                    </Link>
                </div>
                <div>
                    {u.name}
                </div>
                <div className={s.button}>
                    { u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={()=> props.unfollow(u.id)}>Add friend</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={()=>props.follow(u.id)}>Remove friend</button>}
                </div>
            </div>)
        }
    </div>

}
export default Users;