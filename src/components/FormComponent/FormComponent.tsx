import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IPosts} from "../../models/IPosts";
import styles from './FormComponent.module.css';
import {postService} from "../../services/postService";
import {ISetState} from "../../types/resType";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../../validators/postValidator";

type IProps = {
    posts: IPosts[],
    setPosts: ISetState<IPosts[]>
}

const FormComponent: FC<IProps> = ({setPosts, posts}) => {

    const newPosts = [...posts]


    const {
        formState: {isValid, errors},
        register,
        handleSubmit ,
        reset
    } = useForm<IPosts>({
        mode: "all",
        resolver: joiResolver(postValidator),
    })

    const postSubmitCustomHandler:SubmitHandler<IPosts> = async (post: IPosts) => {
        const res =  await postService.createPost(post);
        setPosts([...newPosts, res.data])
        newPosts
        console.log(posts)
        reset();

    };


    return (
        <div className={styles.main}>
            <form
                className={styles.form}
                onSubmit={handleSubmit(postSubmitCustomHandler)}
            >

                {errors.userId && <p>{errors.userId.message}</p>}

                <label className={styles.label}>User ID:
                    <input
                        type="text"
                        className={styles.formInput}
                        placeholder={'UserID'}
                        {...register('userId')}
                    />
                </label>

                {errors.title && <p>{errors.title.message}</p>}

                <label className={styles.label}>Title:
                    <input
                        type="text"
                        className={styles.formInput}
                        placeholder={'enter more than 3 chars'}
                        {...register('title')}
                    />
                </label>

                {errors.body && <p>{errors.body.message}</p>}

                <label className={styles.label}>Body:
                    <input
                        type="text"
                        placeholder={'enter more than 5 chars'}
                        className={styles.formInput}
                        {...register('body')}
                    />
                </label>

                <button
                    className={styles.formButton}
                    disabled={!isValid}
                >Send
                </button>

            </form>
        </div>
    );
};

export default FormComponent;