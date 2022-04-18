import React, { createContext, useEffect, useState } from "react";
import api from "../core/api";

const defaultContext = {
    userId: "",
    username: "",
    profilePicture: "",
    ownerUsername: "",
    ownerPicture: "",
    posts: [],
}

const DefaultContext = createContext(defaultContext);

const DefaultContextProvider: React.FC<any> = ({ children }) => {
    const [ownerUsername, setOwnerUsername] = useState<string>("");
    const [ownerPicture, setOwnerPicture] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [profilePicture, setProfilePicture] = useState<string>("");
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get("/posts/timeline/all");
            const data: any = res.data;
            setPosts(data);
        }
        fetchPosts();
    }, [])


    useEffect(() => {
        const fetchOwner = async () => {
            const res = await api.get("/users/625c41aa15a0e8131ca214ba");
            const data: any = res.data;
            setOwnerUsername(data.username);
            setOwnerPicture(data.profilePicture);
        }

        const fetchUser = async () => {
            const res = await api.get("/users/625c394e6a5b69fda867b24f");
            const data: any = res.data;
            setUserId(data._id);
            setUsername(data.username);
            setProfilePicture(data.profilePicture);
        }

        fetchOwner();
        fetchUser();
    }, []);

    return (
        <DefaultContext.Provider value={{
            userId,
            username,
            profilePicture,
            ownerUsername,
            ownerPicture,
            posts,
        }}>
            {children}
        </DefaultContext.Provider>
    )
}

export { DefaultContext, DefaultContextProvider };
