import React from 'react';
import { useEffect } from "react"

function Map() {
  useEffect(() => {
    const script = document.createElement("script")
  //script.src = "./src/Home/map_v2.js"

    script.setAttribute('src',"//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=1000&t=tt&d=_87YyRVEFCeXP807NcNBvqGZhHxg5VU2ynROMMrqq6I&co=000000&cmo=5385ff&cmn=5385ff");

    // 
    //   "//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=n&d=_87YyRVEFCeXP807NcNBvqGZhHxg5VU2ynROMMrqq6I"

    // //script.async = true
    script.type="text/javascript" 
    script.id="clustrmaps" 



    document.body.appendChild(script)

    // return () => {
    //   // clean up the script when the component in unmounted
    //   document.body.removeChild(script)
    // }
  }, [])

  return <div className="App"></div>
}

export default Map