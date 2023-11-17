import React from 'react';

const CreatePostBox = () => {
    return (
        <div className='my-5'>
            <div className="rounded-lg bg-white flex flex-col p-3 px-4 shadow-md">
                <div className="flex items-center space-x-2 pb-3 mb-2">
                    <div className="w-10 h-10">
                        <img
                            src="https://avatars.githubusercontent.com/u/61423411?v=4"
                            className="w-full h-full rounded-full"
                            alt="dp"
                        />
                    </div>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left rounded-full h-10 pl-5">
                        What&apos;s on your mind, Rahib?
                    </button>
                </div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex items-center justify-between'>
                        <div></div>
                        <div>
                            <h3 className="font-bold text-lg text-center">Create a post</h3>
                        </div>
                        <div className="modal-action mb-3">
                            <form method="dialog">
                                <button className="btn btn-sm">Cancel</button>
                            </form>
                        </div>
                    </div>
                    <div href="/" class="px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                        <div class="w-10 h-10 rounded-full overflow-hidden">
                            <img class="w-full" src="https://avatars.githubusercontent.com/u/61423411?v=4" alt="Naimur Rashid Rahib" />
                        </div>
                        <div class="flex flex-col justify-center content-start">
                            <h2 class="font-semibold">Naimur Rashid Rahib</h2>

                        </div>
                    </div>
                    <div>
                        <textarea className="w-full py-4 border-2 px-2 rounded-lg">What&apos;s on your mind ?</textarea>
                    </div>
                    <div>
                        <input type="file" className="file-input file-input-bordered file-input-ghost file-input-sm w-full max-w-xs" />
                    </div>
                    <div className='flex justify-end items-center mt-2'>
                        <div>
                            <button className='btn btn-md btn-primary'>Post</button>
                        </div>

                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default CreatePostBox;