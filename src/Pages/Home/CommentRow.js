import React from 'react';
import { GoHeartFill, GoHeart } from "react-icons/go";
import swal from 'sweetalert';

const CommentRow = ({ individualComment, refetch }) => {

    const { _id, comment } = individualComment;

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "This Comment will be deleted.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/comment/${_id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json',
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch()
                        })
                } else {
                }
            });
    }

    const handleCommentLike = _id => {

        fetch(`http://localhost:5000/comment/like/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.status === 403) {
                    swal('Failed to like this comment');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })
    };

    const handleRemoveCommentLike = (_id) => {
        fetch(`http://localhost:5000/comment/removeLike/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => { return res.json() })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })
    };

    return (
        <div class="media flex pb-4">
            <div class="mr-4" href="/">
                <img alt='Naimur Rashid Rahib' class="rounded-full max-w-none w-12 h-12" src="https://avatars.githubusercontent.com/u/61423411?v=4" />
            </div>
            <div class="media-body">
                <div>
                    <div class="inline-block text-base font-semibold mr-2" href="/">Naimur Rashid Rahib</div>
                    <span class="text-slate-500 text-sm">25 minutes ago</span>
                    <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-ghost ml-2'>Delete</button>
                </div>
                <p>
                    {comment}
                </p>
                <div class="mt-2 flex items-center">
                    <div class="inline-flex items-center py-2 mr-3" href="/">
                        {(individualComment.role ? <button onClick={() => handleRemoveCommentLike(_id)}><GoHeartFill className='text-rose-600 w-6 h-6' />1</button> : <button onClick={() => handleCommentLike(_id)}><GoHeart className='text-rose-600 w-6 h-6' /></button>)}
                    </div>
                    <button class="py-2 px-4 hover:bg-slate-200  rounded-lg">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentRow;