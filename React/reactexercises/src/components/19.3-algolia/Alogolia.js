import React from "react";

export default function Alogolia() {
    const [results, setResults] = React.useState([]);
    const [searchTerm, setSearchterm] = React.useState("hooks");
    // const [searchValue, setSearchValue] = React.useState("hooks"); //use this to us the "tricking-method" of setting searchValue according to searchTerm using onClick.

    React.useEffect(() => {
        // const myFunc = async () => {
        //     let result = await (
        //         await fetch(`https://hn.algolia.com/api/v1/search?query=${searchValue}`)
        //     ).json();
        //     console.log(result.hits);

        //     let searchedData = result.hits.map((ele) => {
        //         return { title: ele.title, url: ele.url };
        //     });
        //     console.log(searchedData);
        //     setHooks(searchedData);
        // };
        myFunc();
    // }, [searchValue]);
    }, []);

    
    const myFunc = async () => {
        let result = await (
            await fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
        ).json();

        let searchedData = result.hits.map((ele) => {
            return { title: ele.title, url: ele.url };
        });
        setResults(searchedData);
    };

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
                    // setSearchValue(searchTerm);
                    myFunc()
                }}
            />
            {results.map((e, index) => {
                return (
                    <li key={index}>
                        <a href={e.url}>{e.title}</a>
                    </li>
                );
            })}
        </div>
    );
};