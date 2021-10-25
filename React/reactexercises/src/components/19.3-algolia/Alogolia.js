import React from "react";

export default function Alogolia() {
    const [hooks, setHooks] = React.useState([]);
    const [searchTerm, setSearchterm] = React.useState("hooks");
    const [searchValue, setSearchValue] = React.useState("hooks");

    React.useEffect(() => {
        const myFunc = async () => {
            let result = await (
                await fetch(`https://hn.algolia.com/api/v1/search?query=${searchValue}`)
            ).json();
            console.log(result.hits);

            let searchedData = result.hits.map((ele) => {
                return { title: ele.title, url: ele.url };
            });
            console.log(searchedData);
            setHooks(searchedData);
        };
        myFunc();
    }, [searchValue]);

    return (
        <div>
            <input
                id="searchField"
                onChange={(e) => {
                    setSearchterm(e.target.value);
                }}
            />
            <input
                type="button"
                value="Search"
                onClick={() => {
                    setSearchValue(searchTerm);
                }}
            />
            {hooks.map((e, index) => {
                return (
                    <li key={index}>
                        <a href={e.url}>{e.title}</a>
                    </li>
                );
            })}
        </div>
    );
};