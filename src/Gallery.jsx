import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./Context";

const Gallery = () => {
    const { searchTerm } = useGlobalContext();

    const response = useQuery({
        queryKey: ["images", searchTerm],
        queryFn: async () => {
            const result = await axios.get(
                `https://api.unsplash.com/search/photos?client_id=R5MFVVNLMfMoigJn5I_WkjXLb8tylNzDpInv0y0_iuQ&query=${searchTerm}`,
            );
            return result.data;
        },
    });

    if (response.isLoading) {
        return (
            <section className="image-container">
                <h4>LOading....</h4>
            </section>
        );
    }

    if (response.isError) {
        return (
            <section className="image-container">
                <h4>There was an error</h4>
            </section>
        );
    }

    const result = response.data.results;
    if (result.length < 1) {
        return (
            <section className="image-container">
                <h4>No Result found....</h4>
            </section>
        );
    }

    return (
        <>
            <section className="image-container">
                {result.map((item) => {
                    const url = item?.urls?.regular;
                    return (
                        <img
                            src={url}
                            key={item.id}
                            alt={item.alt_description}
                            className="img"
                        />
                    );
                })}
            </section>
        </>
    );
};

export default Gallery;
