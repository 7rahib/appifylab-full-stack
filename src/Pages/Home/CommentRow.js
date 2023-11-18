import React from 'react';
import { GoHeartFill } from "react-icons/go";

const CommentRow = ({ individualComment, refetch }) => {

    const { comment } = individualComment;

    return (
        <div class="media flex pb-4">
            <div class="mr-4" href="/">
                <img alt='Naimur Rashid Rahib' class="rounded-full max-w-none w-12 h-12" src="https://avatars.githubusercontent.com/u/61423411?v=4" />
            </div>
            <div class="media-body">
                <div>
                    <div class="inline-block text-base font-semibold mr-2" href="/">Naimur Rashid Rahib</div>
                    <span class="text-slate-500 text-sm">25 minutes ago</span>
                </div>
                <p>
                    {comment}
                </p>
                <div class="mt-2 flex items-center">
                    <div class="inline-flex items-center py-2 mr-3" href="/">
                        <span class="mr-2">
                            <GoHeartFill className='text-rose-600 w-6 h-6' />
                        </span>
                        <span class="text-base">1</span>
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