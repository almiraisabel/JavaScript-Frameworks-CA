import { useState, useEffect } from "react";
import { API } from "../../constants/api";
import SpacecraftItem from "../spacecraft/SpacecraftItem";
import Heading from "../layout/Heading";



function SpacecraftList() {
    const [spacecrafts, setCrafts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch(API);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setCrafts(json.spacecrafts);
                } else {
                    setError("An error occured");
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (

    <div className="spacecrafts">
            <div><Heading title="List of Spacecrafts" />
                <p>By ID</p></div>
        {spacecrafts.map(function (spacecraft) {
            const { id, name } = spacecraft;
            return <SpacecraftItem key={id} id={id} name={name} />;
        })}
    </div>
);

}

export default SpacecraftList;