import React from "react";
import { ApiResult } from "./Resources";
import { useHistory } from "react-router-dom";

type Props = {
  result: ApiResult;
};

// Event handler for mouseDown events to handle url navigation
const handleMouseDown = (e: any, result: ApiResult, history?: any) => {
  if (e.button === 0) {
    // If ctrl key pressed, copy link to clipboard
    if (e.ctrlKey) {
      navigator.clipboard.writeText(result.url.replace('/api/', '/resources/'))
        .then(() => alert('Copied!'));
    } else {
      history?.push(result.url.replace('/api/', '/resources/'));
    }
  }
  else if (e.button === 1) {
    window.open(result.url.replace('/api/', '/resources/'));
  }
}

function ResourceItem({ result }: Props): JSX.Element {
  const history = useHistory();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="resource-redirect"
        style={{ border: "1px solid #000000", padding: ".25em" }}
        onMouseDown={(e) => {
        handleMouseDown(e, result, history)
      }}>
        {result.name}
      </div>
    </div>
  );
}

export default ResourceItem;
