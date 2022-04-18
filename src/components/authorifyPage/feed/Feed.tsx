/* eslint-disable array-callback-return */
import { useContext, useEffect, useState } from "react";
import Post from "../../post/Post";
import Share from "../../share/Share";
import { Container } from "./style";
import { DefaultContext } from "../../../context/DefaultContext";

const Feed = () => {
    const { posts } = useContext(DefaultContext)

    return (
        <Container>
            <Share />
            {posts.map((post: any) => {
                return (
                    <Post
                        description={post.desc}
                        img={post.img}
                        key={post._id}
                    />
                )
            })}

        </Container>
    )
}

export default Feed;
