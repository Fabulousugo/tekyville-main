import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "./Baseof";

const PostSingle = ({ frontmatter, content, mdxContent }) => {
  let { description, title, image } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base title={title} description={description}>
      <section className="section text-white">
        <div className="container text-white">
          <div className="row">
            <article className="col-12 mx-auto text-center md:col-8 text-white">
              {image && (
                <Image
                  src={image}
                  height="500"
                  width="1000"
                  alt={title}
                  priority={true}
                  layout="responsive"
                  className="rounded-lg"
                />
              )}
              {markdownify(title, "h1", "h2 mb-6 mt-6 text-left text-white")}

              <div className="content mb-16 text-left text-primary">
                <MDXRemote {...mdxContent} components={shortcodes} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
