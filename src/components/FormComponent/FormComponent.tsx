import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IPosts} from "../../models/IPosts";
import styles from './FormComponent.module.css';
import {postService} from "../../services/postService";
import {ISetState} from "../../types/resType";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../../validators/postValidator";

type IProps = {
    setTrigger: ISetState<boolean>
}

const FormComponent: FC<IProps> = ({setTrigger}) => {
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
        await postService.createPost(post);
        setTrigger(prevState => !prevState);
        reset();
    };
    return (
        <div className={styles.main}>
            <form
                className={styles.form}
                onSubmit={handleSubmit(postSubmitCustomHandler)}
            >

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