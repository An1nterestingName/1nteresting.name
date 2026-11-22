import { readFileSync } from "fs";
import { join } from "path";
import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { i18n } from "../i18n";
import style from "./styles/footer.scss";

function getQuartzVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8"));
    return pkg.version ?? "";
  } catch {
    return "";
  }
}

export interface FooterOptions {
  links: Record<string, string>;
  /**
   * Extra text shown in the footer, below the "Created with Quartz" line. HTML is allowed
   * (e.g. `'Licensed under <a href="/license">CC BY 4.0</a>'`).
   */
  message?: string;
}

export default ((opts?: FooterOptions) => {
  const version = getQuartzVersion();

  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear();
    const links = opts?.links ?? [];
    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <div class="flex-row footer-textbox">
          <p>© An1nterestingName 2024-2026</p>
          <p>
            Built with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> (© jackyzha0 {year}
            )
          </p>
          <p>
            Hosted on <a href="https://pages.github.com">GitHub Pages</a>
          </p>
          <p>
            Comments powered by <a href="https://giscus.app">giscus</a>
          </p>
        </div>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
