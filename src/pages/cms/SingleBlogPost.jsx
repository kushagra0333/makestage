import { useState, useEffect } from "react";
import { client } from "../../sanity";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { Container } from "react-bootstrap";
import "./singleBlog.css";

const SingleBlogPost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
      title,
      slug,
      body,
      "footer": footer->body,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt,
      },
      "name": author->name,
    }`,
      )
      .then((data) => setSinglePost(data[0]))
      .catch("Sanity Error", console.error);
  }, [slug]);
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {singlePost.mainImage && singlePost.mainImage.asset && (
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            style={{
              width: "100%",
              height: "30vh",
              display: "block",
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <Container className="single-blog">
        <h1 className="blog-post-title">{singlePost.title}</h1>
        <div>
          {/* Published At Date, formatted using `date-fns` in the format Day/Month/Year */}
          {singlePost.publishedAt && (
            <small>
              By {singlePost.name} on{" "}
              {format(new Date(singlePost.publishedAt), "dd MMMM yyyy")}
            </small>
          )}
          <div className="blog-content">
            {/* Display your blog content - text, images, heading, links */}
            <PortableText value={singlePost.body} />
          </div>
          <Container className="blog-footer">
            💡
            <div className="blog-footer-text">
              <PortableText value={singlePost.footer} />
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SingleBlogPost;
