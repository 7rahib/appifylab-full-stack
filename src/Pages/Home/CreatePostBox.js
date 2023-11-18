import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const CreatePostBox = () => {

    const email = 'rahib@gmail.com';

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();
    const imageStorageKey = 'a1d7d3a7e4fde5cadc71e0a2315af238';

    const onSubmit = async (data) => {
        // Check if an image is selected
        if (data.image && data.image[0]) {
            const formData = new FormData();
            const image = data.image[0];
            formData.append('image', image);

            // Upload the selected image to ImgBB
            const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
            try {
                const imgbbResponse = await fetch(imgbbUrl, {
                    method: 'POST',
                    body: formData
                });

                const imgbbResult = await imgbbResponse.json();

                if (imgbbResult.success) {
                    // If the ImgBB upload is successful, use the uploaded image URL
                    const img = imgbbResult.data.url;
                    const newPost = {
                        img: img,
                        email: email,
                        description: data.description
                    };

                    // Upload the image URL to the database
                    const databaseResponse = await fetch(`http://localhost:5000/createpost`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newPost)
                    });

                    const databaseData = await databaseResponse.json();

                    if (databaseData.insertedId) {
                        reset();
                        navigate('/');
                    }
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            // If no image is selected, use the random image URL
            const randomImage = ' ';
            const newPost = {
                img: randomImage,
                email: email,
                description: data.description
            };

            // Upload the random image URL to the database
            const databaseResponse = await fetch(`http://localhost:5000/createpost`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newPost)
            });

            const databaseData = await databaseResponse.json();

            if (databaseData.insertedId) {
                reset();
                navigate('/');
            }
        }
    };


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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label for="description" className="block mb-2 text-sm text-gray-700">Description</label>
                            <textarea
                                type="text" name="description"
                                className="w-full py-4 border-2 px-2 rounded-lg"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Valid description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        <div>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-ghost file-input-sm w-full max-w-xs"
                                {...register("image")}
                            />
                        </div>
                        <div className='flex justify-end items-center mt-2'>
                            <div>
                                <button type="submit" className='btn btn-sm btn-primary'>Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>

    );
};

export default CreatePostBox;