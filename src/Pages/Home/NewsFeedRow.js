import React from 'react';
import { GoHeartFill } from "react-icons/go";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import CommentRow from './CommentRow';

const NewsFeedRow = ({ allPost, refecth }) => {
    const { _id, email, description, img } = allPost;

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const { data: individualComments, refetch } = useQuery('individualComments', () => fetch(`http://localhost:5000/comment/${_id}`).then(res => res.json()))

    const onSubmit = (data) => {
        const newComment = {
            email: email,
            postId: _id,
            comment: data.comment
        };
        fetch("http://localhost:5000/postComment", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newComment),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    console.log(data);
                    reset();
                    navigate('/');
                }
            });
    }

    return (
        <article class="mb-4 p-6 rounded-xl bg-white flex flex-col shadow-md border-2">
            <div class="flex pb-6 items-center justify-between">
                <div class="flex">
                    <div class="inline-block mr-4" href="/">
                        <img class="rounded-full max-w-none w-14 h-14" src="https://avatars.githubusercontent.com/u/61423411?v=4" alt='Naimur Rashid Rahib' />
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="inline-block text-md font-bold mr-2" href="/">Naimur Rashid Rahib</div>
                            <span class="text-slate-500 text-sm">25 minutes ago</span>
                        </div>
                        <div class="text-slate-500 text-sm">
                            Software Developer
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="text-3xl font-extrabold">
                {description}
            </h2>
            <div class="py-4">
                <div class="flex" href="/">
                    <img class="max-w-full rounded-lg" src={img} />
                </div>
            </div>
            <div class="py-4">
                <div class="inline-flex items-center" href="/">
                    <span class="mr-2">
                        <GoHeartFill className='text-rose-600 w-6 h-6' />
                    </span>
                    <span class="text-md">1</span>
                </div>
            </div>
            <div class="relative">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                        type="text" placeholder="Write a comment"
                        {...register("comment", {
                            required: {
                                value: true,
                                message: 'Valid comment is Required'
                            }
                        })} />
                    <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
                        <button className='btn btn-sm btn-primary' type="submit">Post</button>

                    </span>
                </form>
            </div>
            <div class="pt-6">
                {
                    individualComments?.map((individualComment, index) => <CommentRow
                        key={individualComment._id}
                        individualComment={individualComment}
                        refetch={refetch}
                    >
                    </CommentRow>)
                }
            </div>
        </article>
    );
};

export default NewsFeedRow;