import Bounded from "@/components/bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Article`.
 */
export type ArticleProps = SliceComponentProps<Content.ArticleSlice>;

/**
 * Component for "Article" Slices.
 */
const Article = ({ slice }: ArticleProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <article className="prose lg:prose-xl dark:prose-invert">
        <PrismicRichText field={slice.primary.content} />
      </article>
    </Bounded>
  );
};

export default Article;
