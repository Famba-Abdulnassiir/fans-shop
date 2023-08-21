import { useEffect, useState } from "react";


function Aboutus(){
    const [aboutus, setAboutus] = useState(''); 
    const abouturl = "http://localhost:1337/api/about?populate=about_image";
   

    useEffect(() => {
        fetch(abouturl)
        .then(response => response.json())
        .then(data => {
            setAboutus(data);
        })
    },[])


    return(
        <>
        <div>
        {aboutus.data && aboutus.data.attributes.about_content}
        </div>
        </>
    )
}

export default Aboutus;