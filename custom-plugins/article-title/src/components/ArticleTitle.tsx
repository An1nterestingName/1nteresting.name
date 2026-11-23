import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = (fileData.frontmatter as { title?: string } | undefined)?.title;
  if (title) {
    // `inline-title` is Obsidian's class for the note title, so Obsidian themes style it.
    return <h1 class={classNames(displayClass, "article-title", "inline-title")}>{title}</h1>;
  } else {
    return null;
  }
};

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`;

export default (() => ArticleTitle) satisfies QuartzComponentConstructor;
