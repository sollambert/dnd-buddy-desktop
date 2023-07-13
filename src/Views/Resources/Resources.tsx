import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ResourceLink from "./ResourceLink";
import ResourceItem from "./ResourceItem";
import ResourceDetails from "./ResourceDetails";

type Params = {
  endpoint?: string;
  index?: string;
  subindex?: string;
};

type ApiResponse = {
  results: Array<ApiResult>;
};

type ApiResult = {
  index: string;
  name: string;
  url: string;
};

function Resources(): JSX.Element {
  const [result, setResult] = useState<ApiResponse | undefined>({
    results: [],
  });
  const [details, setDetails] = useState({});
  const [search, setSearch] = useState('');

  const params: Params = useParams();
  const path = "https://www.dnd5eapi.co/api";

  useEffect(() => {
    if (params.endpoint !== undefined
      && params.index !== undefined
      && params.subindex !== undefined) {
      axios
        .get(`${path}/${params.endpoint}/${params.index}/${params.subindex}`)
        .then((response) => {
          setDetails(response.data);
          setResult(undefined)
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (params.endpoint !== undefined
      && params.index !== undefined) {
      axios
        .get(`${path}/${params.endpoint}/${params.index}`)
        .then((response) => {
          setDetails(response.data);
          setResult(undefined)
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (params.endpoint !==
      undefined) {
      axios
        .get(`${path}/${params.endpoint}`)
        .then((response) => {
          setResult(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return () => {
      setDetails({});
      setSearch('');
      setResult(undefined);
    }
  }, [params]);

  return (
    <>
      {params.endpoint === undefined ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <ResourceLink path="ability-scores" label="ABILITIES" />
          <ResourceLink path="alignments" />
          <ResourceLink path="backgrounds" />
          <ResourceLink path="classes" />
          <ResourceLink path="conditions" />
          <ResourceLink path="damage-types" />
          <ResourceLink path="equipment-categories" />
          <ResourceLink path="feats" />
          <ResourceLink path="languages" />
          <ResourceLink path="magic-schools" />
          <ResourceLink path="monsters" />
          <ResourceLink path="proficiencies" />
          <ResourceLink path="races" />
          <ResourceLink path="spells" />
          <ResourceLink path="traits" />
        </div>
      ) : (
        <>
          {result?.results
            ?
            <>
              <input
                style={{ width: "20vw", height: "2em" }}
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => { setSearch(e.target.value) }} />
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>{
                result.results.map((result, i) => {
                  if (search === ''
                    || (result.name && result.name.toLocaleLowerCase().includes(search.toLowerCase()))) {
                    return <ResourceItem result={result} key={i} />
                  } return null
                })}
              </div>
            </>
            :
            <ResourceDetails details={details} changeTitle={true} searchBar={true}/>}
        </>
      )}
    </>
  );
}

export default Resources;

export type { ApiResult };
