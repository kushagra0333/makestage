// import { client } from "../../sanity";
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import BlockContent from "@sanity/block-content-to-react";
// import { format } from "date-fns";
// import {Outlet} from 'react-router-dom';

// export const BlogFetch = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "post"] {
//       title,
//       slug,
//       body,
//       publishedAt,
//       mainImage {
//         asset -> {
//           _id,
//           url
//         },
//         alt,
//       }
//     } | order(publishedAt desc)`
//       )
//       .then((data) => setPosts(data))
//       .catch(console.error);
//   }, []);
//   return <div>
//     <Outlet/>
//   </div>;
// };
